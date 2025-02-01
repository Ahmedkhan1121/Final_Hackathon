import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Parse query parameters for pagination
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10); // Default to page 1
    const limit = parseInt(url.searchParams.get("limit") || "47", 10); // Default to 10 items per page
    const offset = (page - 1) * limit; // Calculate starting point

    // Fetch total count of products
   //  const totalItems = await client.fetch(`count(*[_type == "productList"])`);
   //  const totalPages = Math.ceil(totalItems / limit); // Calculate total pages

    // Fetch paginated products ordered by id
    const avionData = await client.fetch(
      `*[_type == "productList"]| order(id asc) [${offset}...${offset + limit}]{
        id,
        productname,
        category,
        discount,
        price,
        ProductColor,
        ceratedAt,
        stock,
        description,
        dimensions,
        features,
        rating,
        UpdatedAt,
        tags,
        "productimg": productimg.asset->url
      }`
    );

    // Return paginated response
    return NextResponse.json(
       avionData,
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error:` ${error} : Failed to fetch products` }, { status: 500 });
  }
}