import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data: Array<Product> = [
    {
      "id": "1",
      "name": "Pan",
      "description": "Item used for frying",
      "imageUrl": "https://placehold.co/300x300",
      "price": 345,
      "rating": 3,
      "category": "kitchen"
    },
    {
      "id": "2",
      "name": "Knife Set",
      "description": "Set of kitchen knives",
      "imageUrl": "https://placehold.co/300x300",
      "price": 199,
      "rating": 4,
      "category": "kitchen"
    },
    {
      "id": "3",
      "name": "Blender",
      "description": "Appliance used for blending ingredients",
      "imageUrl": "https://placehold.co/300x300",
      "price": 89,
      "rating": 2,
      "category": "kitchen"
    },
    {
      "id": "4",
      "name": "Coffee Maker",
      "description": "Machine for brewing coffee",
      "imageUrl": "https://placehold.co/300x300",
      "price": 129,
      "rating": 5,
      "category": "kitchen"
    },
    {
      "id": "5",
      "name": "Cutting Board",
      "description": "Board used for cutting ingredients",
      "imageUrl": "https://placehold.co/300x300",
      "price": 29,
      "rating": 3,
      "category": "kitchen"
    },
    {
      "id": "6",
      "name": "Toaster",
      "description": "Device for toasting bread",
      "imageUrl": "https://placehold.co/300x300",
      "price": 49,
      "rating": 4,
      "category": "kitchen"
    },
    {
      "id": "7",
      "name": "Mixing Bowl",
      "description": "Bowl used for mixing ingredients",
      "imageUrl": "https://placehold.co/300x300",
      "price": 19,
      "rating": 2,
      "category": "kitchen"
    },
    {
      "id": "8",
      "name": "Saucepan",
      "description": "Small pot for making sauces",
      "imageUrl": "https://placehold.co/300x300",
      "price": 79,
      "rating": 5,
      "category": "kitchen"
    },
    {
      "id": "9",
      "name": "Food Processor",
      "description": "Appliance for processing food",
      "imageUrl": "https://placehold.co/300x300",
      "price": 149,
      "rating": 3,
      "category": "kitchen"
    },
    {
      "id": "10",
      "name": "Mixer",
      "description": "Electric mixer for baking",
      "imageUrl": "https://placehold.co/300x300",
      "price": 129,
      "rating": 4,
      "category": "kitchen"
    },
    {
      "id": "11",
      "name": "Cookware Set",
      "description": "Set of pots and pans",
      "imageUrl": "https://placehold.co/300x300",
      "price": 399,
      "rating": 5,
      "category": "kitchen"
    },
    {
      "id": "12",
      "name": "Microwave",
      "description": "Appliance for heating food",
      "imageUrl": "https://placehold.co/300x300",
      "price": 159,
      "rating": 3,
      "category": "kitchen"
    },
    {
      "id": "13",
      "name": "Baking Sheet",
      "description": "Sheet used for baking",
      "imageUrl": "https://placehold.co/300x300",
      "price": 39,
      "rating": 4,
      "category": "kitchen"
    },
    {
      "id": "14",
      "name": "Frying Pan",
      "description": "Pan for frying food",
      "imageUrl": "https://placehold.co/300x300",
      "price": 49,
      "rating": 3,
      "category": "kitchen"
    },
    {
      "id": "15",
      "name": "Dish Rack",
      "description": "Rack for drying dishes",
      "imageUrl": "https://placehold.co/300x300",
      "price": 24,
      "rating": 4,
      "category": "kitchen"
    },
    {
      "id": "16",
      "name": "Wine Glasses",
      "description": "Set of wine glasses",
      "imageUrl": "https://placehold.co/300x300",
      "price": 59,
      "rating": 3,
      "category": "kitchen"
    },
    {
      "id": "17",
      "name": "Electric Kettle",
      "description": "Kettle for boiling water",
      "imageUrl": "https://placehold.co/300x300",
      "price": 79,
      "rating": 4,
      "category": "kitchen"
    },
    {
      "id": "18",
      "name": "Food Storage Containers",
      "description": "Containers for storing food",
      "imageUrl": "https://placehold.co/300x300",
      "price": 29,
      "rating": 2,
      "category": "kitchen"
    },
    {
      "id": "19",
      "name": "Utensil Set",
      "description": "Set of cooking utensils",
      "imageUrl": "https://placehold.co/300x300",
      "price": 49,
      "rating": 5,
      "category": "kitchen"
    },
    {
      "id": "20",
      "name": "Laptop",
      "description": "Portable computer",
      "imageUrl": "https://placehold.co/300x300",
      "price": 999,
      "rating": 4,
      "category": "electronics"
    },
    {
      "id": "21",
      "name": "Smartphone",
      "description": "Mobile phone with advanced features",
      "imageUrl": "https://placehold.co/300x300",
      "price": 799,
      "rating": 3,
      "category": "electronics"
    },
    {
      "id": "22",
      "name": "Headphones",
      "description": "Audio devices worn over the ears",
      "imageUrl": "https://placehold.co/300x300",
      "price": 149,
      "rating": 5,
      "category": "electronics"
    },
    {
      "id": "23",
      "name": "Television",
      "description": "Electronic device for viewing broadcasts",
      "imageUrl": "https://placehold.co/300x300",
      "price": 1299,
      "rating": 2,
      "category": "electronics"
    },
    {
      "id": "24",
      "name": "Camera",
      "description": "Device for capturing photographs and videos",
      "imageUrl": "https://placehold.co/300x300",
      "price": 699,
      "rating": 4,
      "category": "electronics"
    },
    {
      "id": "25",
      "name": "Tablet",
      "description": "Portable computing device with touchscreen",
      "imageUrl": "https://placehold.co/300x300",
      "price": 499,
      "rating": 3,
      "category": "electronics"
    },
    {
      "id": "26",
      "name": "Wireless Speaker",
      "description": "Speaker that connects wirelessly to devices",
      "imageUrl": "https://placehold.co/300x300",
      "price": 99,
      "rating": 5,
      "category": "electronics"
    },
    {
      "id": "27",
      "name": "Gaming Console",
      "description": "Device for playing video games",
      "imageUrl": "https://placehold.co/300x300",
      "price": 399,
      "rating": 2,
      "category": "electronics"
    },
    {
      "id": "28",
      "name": "External Hard Drive",
      "description": "Portable storage device",
      "imageUrl": "https://placehold.co/300x300",
      "price": 79,
      "rating": 4,
      "category": "electronics"
    },
    {
      "id": "29",
      "name": "Wireless Earbuds",
      "description": "Earphones without wires",
      "imageUrl": "https://placehold.co/300x300",
      "price": 129,
      "rating": 5,
      "category": "electronics"
    },
    {
      "id": "30",
      "name": "Printers",
      "description": "Device for producing physical copies of documents",
      "imageUrl": "https://placehold.co/300x300",
      "price": 199,
      "rating": 3,
      "category": "electronics"
    },
    {
      "id": "31",
      "name": "T-Shirt",
      "description": "Casual shirt",
      "imageUrl": "https://placehold.co/300x300",
      "price": 19,
      "rating": 4,
      "category": "clothing"
    },
    {
      "id": "32",
      "name": "Jeans",
      "description": "Denim pants",
      "imageUrl": "https://placehold.co/300x300",
      "price": 59,
      "rating": 2,
      "category": "clothing"
    },
    {
      "id": "33",
      "name": "Dress",
      "description": "Women's garment",
      "imageUrl": "https://placehold.co/300x300",
      "price": 79,
      "rating": 5,
      "category": "clothing"
    },
    {
      "id": "34",
      "name": "Sweater",
      "description": "Knitted garment for warmth",
      "imageUrl": "https://placehold.co/300x300",
      "price": 39,
      "rating": 3,
      "category": "clothing"
    },
    {
      "id": "35",
      "name": "Running Shoes",
      "description": "Footwear for running",
      "imageUrl": "https://placehold.co/300x300",
      "price": 99,
      "rating": 4,
      "category": "clothing"
    },
    {
      "id": "36",
      "name": "Hoodie",
      "description": "Casual sweatshirt with a hood",
      "imageUrl": "https://placehold.co/300x300",
      "price": 49,
      "rating": 3,
      "category": "clothing"
    },
    {
      "id": "37",
      "name": "Watch",
      "description": "Timekeeping device worn on the wrist",
      "imageUrl": "https://placehold.co/300x300",
      "price": 149,
      "rating": 5,
      "category": "clothing"
    },
    {
      "id": "38",
      "name": "Backpack",
      "description": "Bag worn on the back",
      "imageUrl": "https://placehold.co/300x300",
      "price": 79,
      "rating": 2,
      "category": "clothing"
    },
    {
      "id": "39",
      "name": "Sunglasses",
      "description": "Eyewear to protect the eyes from sunlight",
      "imageUrl": "https://placehold.co/300x300",
      "price": 29,
      "rating": 4,
      "category": "clothing"
    },
    {
      "id": "40",
      "name": "Wallet",
      "description": "Small folding case for holding money and cards",
      "imageUrl": "https://placehold.co/300x300",
      "price": 39,
      "rating": 3,
      "category": "clothing"
    }
  ];

  getProducts = async (category: string | null = 'all') => {
    if(category === 'all'){
      return this.data;
    } else{
      return this.data.filter(product => product.category == category);
    }
  }

  getCategories = async () => {
    const categories = ['all','kitchen','electronics','clothing'];
    return categories;
  }

  getProduct = async (productId: string | null) => {
    return this.data.find(product => product.id === productId);
  }
  
  constructor() { }
}
