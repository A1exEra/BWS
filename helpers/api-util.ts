import { BWS_DATA } from './types';
import { addDoc, collection } from '@firebase/firestore';
import { firestore } from './firebse';
// Usage example
// sendFeedback(
//   'john@example.com',
//   'John Doe',
//   'Great app! Keep up the good work.'
// );

export const handleSubmit = (data: any) => {
  const ref = collection(firestore, 'test-data');
  const newData = {
    testdata: data,
  };
  try {
    addDoc(ref, newData);
  } catch (err) {
    console.log(err);
  }
};
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
