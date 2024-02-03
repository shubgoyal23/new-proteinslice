const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionIdOrders: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_ODERS),
    appwriteCollectionIdItems: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_ITEMS),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
 };
 
 export default conf;
 