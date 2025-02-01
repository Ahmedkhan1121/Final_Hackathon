import { createClient } from "@sanity/client";
import axios from "axios";
import path from "path";
import "dotenv/config";

// Initialize Sanity Client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Dataset name (e.g., production)
  apiVersion: '2025-01-25',                           // API version
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,    // Write token
  useCdn: false,                                      // Disable CDN for write operations
});

// Fetch Data from Mock API
const fetchMockApiData = async () => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_MOCK_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
};

// Upload Image and Return Image Asset
const uploadImageToSanity = async (imageUrl) => {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' }); // Get image as binary data
    const buffer = Buffer.from(response.data); // Convert binary data to Buffer
    const fileName = path.basename(imageUrl);

    // Upload image to Sanity
    const asset = await client.assets.upload('image', buffer, { filename: fileName });
    return asset._id; // Return the image asset ID
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return null; // Return null if the upload fails
  }
};

// Migrate Data to Sanity
const migrateDataToSanity = async () => {
  const data = await fetchMockApiData();

  for (const item of data) {
    try {
      // Upload product image to Sanity and get its ID
      const imageId = await uploadImageToSanity(item.productimage);

      // Prepare Sanity document
      const sanityDocument = {
        _type: "productList",
        id: item.id,
        productname: item.productname,
        description: item.description,
        productimg: imageId ? { _type: "image", asset: { _ref: imageId } } : null,
        price: item.price,
        discount: item.discount,
        category: item.category,
        stock: item.stock,
        rating: item.rating ,
        reviews: item.reviews || [], // Default to empty array if undefined
        tags: item.tags || [], // Default to empty array if undefined
        ProductColor: item.colors || [], // Default to empty array if undefined
        features: item.features || [], // Default to empty array if undefined
        dimensions: {
          depth: item.dimensions?.depth || "", // Default to empty string if undefined
          width: item.dimensions?.width || "",
          height: item.dimensions?.height || "",
        },
        ceratedAt: item.createdAt || new Date().toISOString(), // Use provided date or default to now
        UpdatedAt: item.updatedAt || new Date().toISOString(),
      };

      // Create or update the document in Sanity
      const result = await client.createOrReplace({
        _id: `product-${item.id.trim()}`, // Unique document ID (e.g., product-5)
        ...sanityDocument,
      });

      console.log(`Migrated product: ${result.id}`);
    } catch (error) {
      console.error("Error migrating product:", error.message);
    }
  }
};

// Execute Migration
migrateDataToSanity()
  .then(() => console.log("Migration complete!"))
  .catch((error) => console.error("Migration failed:", error.message));