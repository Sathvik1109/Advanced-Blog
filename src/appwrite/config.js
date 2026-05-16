import config from "../config/config";
import { Client, ID, Databases, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectID);
    this.databases = new Databases(this.client);
  }

  createPost = async ({
    title,
    slug,
    content,
    featuredImage,
    status,
    userID,
  }) => {
    try {
      return await this.databases.createRow(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  updatePost = async (slug, { title, content, featuredImage, status }) => {
    try {
      return await this.databases.updateRow(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  deletePost = async (slug) => {
    try {
      return await this.databases.deleteRow(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  getPost = async (slug) => {
    try {
      return await this.databases.getRow(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
      );
    } catch (error) {
      console.log(error);
    }
  };

  getPosts = async (queries = [Query.equal("status", "active")]) => {
    try {
      return await this.databases.listRow(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        queries,
      );
    } catch (error) {
      console.log(error);
    }
  };

  //   File Upload Services

  uploadFile = async (file) => {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketID,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log(error);
    }
  };

  deleteFile = async (fileID) => {
    try {
      return await this.bucket.deleteFile(config.appwriteBucketID, fileID);
    } catch (error) {
      console.log(error);
    }
  };

  getFilePreview = (fileID) => {
    return this.bucket.getFilePreview(config.appwriteBucketID, fileID);
  };
}

const service = new Service();

export default service;
