import { Client, Databases, Query, ID } from "appwrite";
import conf from "../conf/conf";

class productService {
   client = new Client();
   databases;

   constructor() {
      this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
      this.databases = new Databases(this.client);
   }

   async getproducts(type) {
      try {
         return await this.databases.listDocuments(
            conf.appwritedDatabaseId,
            conf.appwriteCollectionIdProducts,
            type ? [Query.equal("group", type)] : [Query.limit(30)]
         );
      } catch (error) {
         console.log("Get products of:: ", type, "::", error);
      }
   }
   async createitems(item) {
      try {
         return await this.databases.createDocument(
            conf.appwritedDatabaseId,
            conf.appwriteCollectionIdProducts,
            ID.unique(),
            { ...item }
         );
      } catch (error) {
         console.log("Get products of:: ", type, "::", error);
      }
   }
}

const productservice = new productService();

export default productservice;
