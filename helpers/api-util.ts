import { BWS_DATA } from './types';
import { setDoc, addDoc, collection } from '@firebase/firestore';
import { firestore } from './firebase';
import { doc } from 'firebase/firestore';
// Usage example
// sendFeedback(
//   'john@example.com',
//   'John Doe',
//   'Great app! Keep up the good work.'
// );

// export const handleSubmit = (data: any) => {
//   const ref = collection(firestore, 'testData');
//   const newData = {
//     testdata: data,
//   };
//   try {
//     addDoc(ref, newData);
//   } catch (err) {
//     console.log(err);
//   }
// };
// ////
// const collectionRef = collection(firestore, 'feedback');

// // Function to add a new document to the "products" collection
// export const addFeedback = async (feedback: {
//   name: string;
//   email: string;
//   message: string;
// }) => {
//   console.log(feedback);
//   try {
//     // Create a new document with an auto-generated ID
//     const docRef = doc(collectionRef);

//     // Set the data of the document
//     await setDoc(docRef, feedback);
//     console.log(setDoc);
//     console.log('Feedback added successfully!');
//   } catch (error) {
//     console.error('Error adding feedback:', error);
//   }
// };
////

const firebase_URL: string | undefined = process.env.PRODUCTS_URL;
export const getAllData = async () => {
  const response = await fetch(firebase_URL!);
  const data = await response.json();
  const bws_data: BWS_DATA[] = [];
  for (const key in data) {
    bws_data.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      image: data[key].image,
      price: data[key].price,
      isLiked: data[key].isLiked,
      onSale: data[key].onSale,
      colors: data[key].colors,
      category: data[key].category,
      isTrending: data[key].isTrending,
    });
  }
  return bws_data;
};
export const getOnSaleItems = async () => {
  const allData = await getAllData();
  return allData.filter((event) => event.onSale);
};
export const getItemById = async (id: string) => {
  const allData = await getAllData();
  return allData.find((event) => event.id === id);
};
