import { BWS_DATA } from './types';
import { db } from './firebse';
import { MESSAGE } from './types';
// Usage example
// sendFeedback(
//   'john@example.com',
//   'John Doe',
//   'Great app! Keep up the good work.'
// );

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
// export const getFilteredItems = async (priceFilter: {
//   start: number;
//   end: number;
// }) => {
//   const { year, month } = dateFilter;
//   const allEvents = await getAllData(url);
//   let filteredEvents = allEvents.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
//     );
//   });

//   return filteredEvents;
// };
// export const sendFeedback = async (newMessage: MESSAGE) => {
//   try {
//     await db.collection('bws-feedback').add({
//       email: newMessage.email,
//       name: newMessage.name,
//       message: newMessage.message,
//       timestamp: db.firestore.FieldValue.serverTimestamp(),
//     });
//     console.log('Feedback sent successfully');
//   } catch (error) {
//     console.error('Error sending feedback:', error);
//   }
// };
