import { Client, Databases, Query } from "appwrite";
import conf from "../conf/conf";

class imageService {
   client = new Client();
   databases;

   constructor() {
      this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
      this.databases = new Databases(this.client);
   }

   async getimages() {
      try {
         return await this.databases.listDocuments(
            conf.appwritedDatabaseId,
            conf.appwriteCollectionIdItems,
            [Query.equal("type", "banner")]
         );
      } catch (error) {
         console.log("Get images:: ", error);
      }
   }
}

const imageservice = new imageService();

export default imageservice;
