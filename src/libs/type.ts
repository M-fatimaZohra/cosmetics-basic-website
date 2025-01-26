export interface Foundation {
    _id: number;
    img: string;
    title: string;
    price: number;
    discountPrice?: number;
    category: string;
    quantity: number;
    description: string;
    inStock: boolean;
    tags: string[];
  }

  export interface Lipstick {
    _id: number;
    img: string;
    title: string;
    price: number;
    discountPrice?: number;
    category: string;
    quantity: number;
    description: string;
    inStock: boolean;
    tags: string[];
  }

  export interface Perfume {
    _id: number;
    img: string;
    title: string;
    price: number;
    discountPrice?: number;
    category: string;
    quantity: number;
    description: string;
    inStock: boolean;
    tags: string[];
  }

  export interface Catagory {
    title: string;
    description: string;
    img:string;
    destination: string
  }