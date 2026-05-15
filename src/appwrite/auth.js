import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectID);
    this.account = new Account(this.client);
  }

  createAccount = async ({ email, password, name }) => {
    const userAccount = await this.account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });

    if (userAccount) {
      // Call another method
      return this.login({ email, password });
    } else {
      return userAccount;
    }
  };

  login = async ({ email, password }) => {
    return await this.account.createEmailPasswordSession({ email, password });
  };

  getCurrentUser = async () => {
    return await this.account.get();
  };

  logout = async () => {
    return await this.account.deleteSessions();
  };
}

const authService = new AuthService();

export default authService;

/*
const client = new Client()
  .setProject("<PROJECT_ID>") // Your project ID
  .setEndpoint("https://<REGION>.cloud.appwrite.io/v1");

const account = new Account(client);

try {
  const user = await account.create({
    userId: "[USER_ID]",
    email: "email@example.com",
    password: "<Password>",
  });
  console.log(user);
} catch (e) {
  console.error(e);
}
*/
