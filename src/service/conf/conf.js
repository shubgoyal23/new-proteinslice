const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionIdOrders: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_ODERS),
    appwriteCollectionIdItems: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_ITEMS),
    appwriteCollectionIdProducts: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_PRODUCTS),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    URL: String(import.meta.env.VITE_BASE_URL),
 };
 
 export default conf;
 