This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


# Avion Marketplace

**Avion** is a modern online shopping platform built using **Next.js**, **Sanity CMS**, and integrates third-party APIs like **Stripe** for payments and **ShipEngine** for shipping.

---

## 🚀 Project Overview

Avion allows users to explore and purchase products, manage their cart, wishlist, and track shipments. It is fully optimized for different devices with responsive design and is built with modern technologies like React and Next.js for the front-end.

---

## 🖥️ Tech Stack

| Feature            | Technology       |
|--------------------|------------------|
| **Front-End**      | Next.js 14, React |
| **Backend (CMS)**  | Sanity.io        |
| **Authentication** | Clerk            |
| **Payments**       | Stripe           |
| **Shipping**       | ShipEngine       |

---

## ✅ Features Implemented

### 🖥️ Front-End (Next.js)
- **Landing Page:** Showcases a list of popular products.
- **Header & Navigation:** Provides links to Products, Cart, and Login for easy navigation.
- **Footer:** Contains additional marketplace information.
- **Product Page:** Displays products with features like Search, Pagination, and Category Filtering.
- **Cart Page:** Includes options to add, remove, increment, decrement, and clear cart items.
- **Wishlist Page:** Lets users save products for future purchase.
- **Shipment Process UI:** Includes forms for rate lists and tracking details.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **API Handling:** Fetches dynamic data using React hooks in Next.js.

---

## 🔗 API Handling Example in Next.js

Here’s an example of how API requests are handled in the project:

```js
const productApi = async (api: string) => {
    try {
        const productData = await fetch(api, { cache: 'force-cache' });
        const fetchProduct = await productData.json();
        console.log(fetchProduct);
        return fetchProduct;
    } catch (error) {
        throw new Error(`Product not found: ${error}`);
    }
};


🚀 SANITY (CMS)

We are using Sanity to manage oru product, order etc.

First of all, we had run the migration file (migrate.mjs) in scripts folder to migrate the mock API data in Sanity.

We are using private data like token in .env file to run operations securly.

For perform migration processs, so we need to set our schemna via document and that is Product where we defined all the field that will migrate in sanity


---- PRODUCT SCHEMA ----



export const ProductList={
    name:'productList',
    title:'Product List',
    type:'document',
    fields:[
        {
            name:'id',
            title:'product id',
            type:'string'
        },
        {
            name:'productname',
            title:'Product Name',
            type:'string'
        },
        {
            name:'description',
            title:'Product Description',
            type:'text'
        },
        {
            name:'productimg',
            title:'Product Img',
            type:'image'
        },
        {
            name:'price',
            title:'Product price',
            type:'number'
        },
        {
            name:'discount',
            title:'Discount',
            type:'number'
        },
        {
            name:'category',
            title:'Category Name',
            type:'string'
        },
        {
            name:'stock',
            title:'product stock',
            type:'number'
        },
        {
            name:'rating',
            title:'Product Rating',
            type:'number',
            
        },
        {
            name:'reviews',
            title:'Review List',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'tags',
            title:'Product Tags',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'ProductColor',
            title:'Product Color',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'features',
            title:'Product features',
            type:'array',
            of:[{type:'string'}] 
        },
        {
            name: 'dimensions',
            title: 'Dimensions',
            type: 'object',
            fields: [
              {
                name: 'depth',
                title: 'Depth',
                type: 'string',
              },
              {
                name: 'width',
                title: 'Width',
                type: 'string',
              },
              {
                name: 'height',
                title: 'Height',
                type: 'string',
              },
            ],
          },
        {
            name:'ceratedAt',
            title:'Created Data',
            type:'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 30, // Allow selection in 30-minute intervals
                calendarTodayLabel: 'Set to Today',
              },
              initialValue: () => new Date().toISOString(), // Default to the current date and time
        },
         {
            name:'UpdatedAt',
            title:'Updated Data',
            type:'datetime'
        }
       

    ]
}

# Avion Marketplace

**Avion** is a modern online shopping platform built using **Next.js**, **Sanity CMS**, and integrates third-party APIs like **Stripe** for payments and **ShipEngine** for shipping.

---

## 🚀 Project Overview

Avion allows users to explore and purchase products, manage their cart, wishlist, and track shipments. It is fully optimized for different devices with responsive design and is built with modern technologies like React and Next.js for the front-end.

---

## 🔧 Key Features

### 🛍️ User Authentication
Authentication is essential for securing our marketplace and ensuring a smooth shopping experience. Users must register to buy products.

1. **Registration Process:**
   - If a user is not registered, they must sign up to purchase items.
   - Registered users can log in to access their cart and purchase items.

### 📦 Product Listing
When a user visits the **Product Page**, all products are displayed with the following features:
- **Search Bar** – Users can search for specific products.
- **Pagination** – Products are displayed in pages for easy navigation.
- **Filters** – Users can filter products by category, price, etc.
- **Data Source:** Products are fetched from **Sanity CMS**, where mock API data has been migrated.

### ❤️ Wishlist
Users can save products for later by adding them to their **Wishlist Page**.

### 🛒 Cart Page
The **Cart Page** allows users to manage their products before checkout:
- Add/remove products.
- Update quantity.
- View total cost.
- **Payment Processing** is handled securely through **Stripe**.

### 🚚 Shipment Tracking
We use **ShipEngine**, a third-party API, to provide real-time tracking updates for orders. Users can track shipments from the warehouse to their delivery destination.

---

## 🔗 Third-Party APIs

We integrate the following third-party APIs for efficient operation:

| Endpoint      | Method | Purpose                                    | Response Example                             |
|---------------|--------|--------------------------------------------|----------------------------------------------|
| /productlist  | GET    | Fetch all product details                  | { "name": "Product Name", "slug": "product-slug", "price": 100 } |
| /tracking     | GET    | Fetch real-time tracking updates           | { "trackingId": "AB123", "status": "In Transit" } |
| /inventory    | GET    | Fetch real-time stock levels               | { "productId": 789, "stock": 50 }            |
| /cart         | POST   | Add product to cart                        | { "cartId": 101, "items": [...] }            |
| /wishlist     | POST   | Add product to wishlist                    | { "wishlistId": 202, "items": [...] }        |

---

## 🛠️ Testing Section

After completing all the development processes, we performed testing to ensure everything works smoothly.

### ✅ Tested Workflows
- **User Registration:** Users can sign up and log in successfully.
- **Product Listing:** Products display correctly with search, filters, and pagination.
- **Cart Management:** Users can add, remove, and update cart items without errors.
- **Wishlist Section:** Users can save and retrieve their wishlist items.
- **Checkout:** Payment via **Stripe** works smoothly.
- **Shipment Tracking:** Orders can be tracked using **ShipEngine** from warehouse to delivery.

### 🏆 Test Results
All sections have been successfully tested and are working perfectly! 🎉

---

## 🚀 Deployment Phase

Once we completed all tasks for the marketplace, the next step is to deploy it to production.

### 🔧 Steps for Deployment:
1. **Prepare the Code:** Ensure all features are implemented and tested.
2. **Environment Variables:** Securely set up `.env` files for private data (e.g., API keys).
3. **Deploy on Vercel:** Push the latest code to GitHub and deploy via **Vercel**.
4. **Final Testing:** Verify that everything works smoothly in production.
5. **Live Marketplace:** The marketplace is now live and ready for users!

---

## 🏁 Conclusion

This document guides you through the features and the platform’s functioning.

### 🔹 Key Components:
1. **Front-End** – Built with **Next.js + TypeScript** for a seamless user experience.
2. **Sanity (CMS)** – Manages **products, orders, and inventory** dynamically.
3. **Third-Party APIs** – Handles **payments (Stripe)** and **shipment tracking (ShipEngine)**.

---

## 🎯 The End 🎯
