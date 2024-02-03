import { Client, Storage } from "appwrite";
import conf from "../conf/conf";

class bucketservice {
   client = new Client();
   bucket;

   constructor() {
      this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
      this.bucket = new Storage(this.client);
   }

   getitem(itemid) {
      return this.bucket.getFilePreview(conf.appwriteBucketId, itemid);
   }
}

const bucketService = new bucketservice();

export default bucketService;
