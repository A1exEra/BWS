const firebase_URL: string | undefined = process.env.URL;
export interface BWS_DATA {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  isLiked: boolean;
  onSale: boolean;
  color: string;
  isTrending: boolean;
  category: string;
}

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
      color: data[key].color,
      category: data[key].category,
      isTrending: data[key].isTrending,
    });
  }
  console.log(bws_data);
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
