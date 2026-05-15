const config = {
  appwriteUrl: String(import.meta.VITE_APPWRITE_URL),
  appwriteProjectID: String(import.meta.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(import.meta.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketID: String(import.meta.VITE_APPWRITE_BUCKET_ID),
};

export default config;
