import { MongoClient, SortDirection } from 'mongodb';
require('dotenv').config();
export const connectDatabase = async () => {
  const client = await MongoClient.connect(`${process.env.MONGO_URL}`);
  return client;
};
export const insertDocument = async (
  client: MongoClient,
  collection: string,
  document: object
) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};
export const getAllDocuments = async (
  client: MongoClient,
  collection: string,
  sortHow: any,
  filter = {}
) => {
  const db = client.db();
  const comments = await db
    .collection(collection)
    .find(filter)
    .sort(sortHow)
    .toArray(); //sorting items in descensing order so the last added item is the first in the array
  return comments;
};
