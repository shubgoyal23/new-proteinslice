import { Client, Account, ID } from "appwrite";
import auth from "../conf/conf";
class authService {
   client = new Client();
   account;

   constructor() {
      this.client
         .setEndpoint(auth.appwriteUrl)
         .setProject(auth.appwriteProjectId);
      this.account = new Account(this.client);
   }

   async createAccount({ email, password, name }) {
      try {
         const user = await this.account.create(
            ID.unique(),
            email,
            password,
            name
         );
         if (user) {
            return this.loginUser({ email, password });
         } else {
            return user;
         }
      } catch (error) {
         throw error
      }
   }
   async loginUser({ email, password }) {
      try {
         return await this.account.createEmailSession(email, password);
      } catch (error) {
         throw error
      }
   }
   async currentUser() {
      try {
         return await this.account.get();
      } catch (error) {
         console.log("current user:: ", error);
      }
   }
   async logoutUser() {
      try {
         return await this.account.deleteSessions();
      } catch (error) {
         console.log("Logout Account:: ", error);
      }
   }
}

const authservice = new authService();

export default authservice;
