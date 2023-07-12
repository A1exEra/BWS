export interface MESSAGE {
  email: string;
  name: string;
  message: string;
  _id?: any;
}
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
