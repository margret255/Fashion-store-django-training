import { Product } from "@shared/schema";

export const products: Product[] = [
  {
    id: 1,
    name: "Floral Midi Dress",
    description: "Elegant floral print dress perfect for summer occasions",
    price: "11650",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "clothes",
    inStock: true,
    featured: true,
    tags: ["new", "summer", "floral"]
  },
  {
    id: 2,
    name: "Leather Tote Bag",
    description: "Premium leather tote with spacious interior",
    price: "20750",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "bags",
    inStock: true,
    featured: true,
    tags: ["leather", "tote", "professional"]
  },
  {
    id: 3,
    name: "Classic Pumps",
    description: "Timeless high heel pumps in nude shade",
    price: "12950",
    salePrice: "10350",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "shoes",
    inStock: true,
    featured: true,
    tags: ["sale", "classic", "heels"]
  },
  {
    id: 4,
    name: "Vitamin C Serum",
    description: "Brightening serum with 20% vitamin C",
    price: "5950",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "beauty",
    inStock: true,
    featured: true,
    tags: ["skincare", "vitamin-c", "brightening"]
  },
  {
    id: 5,
    name: "Oversized Blazer",
    description: "Structured blazer perfect for office or casual wear",
    price: "15550",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "clothes",
    inStock: true,
    featured: true,
    tags: ["trending", "blazer", "professional"]
  },
  {
    id: 6,
    name: "Hair Styling Kit",
    description: "Professional styling tools for salon-quality results",
    price: "10350",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "hair",
    inStock: true,
    featured: true,
    tags: ["styling", "professional", "tools"]
  },
  {
    id: 7,
    name: "Athletic Sneakers",
    description: "Comfortable sneakers for active lifestyle",
    price: "16850",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "shoes",
    inStock: true,
    featured: true,
    tags: ["athletic", "comfortable", "casual"]
  },
  {
    id: 8,
    name: "Eyeshadow Palette",
    description: "12-shade palette with matte and shimmer finishes",
    price: "6850",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "beauty",
    inStock: true,
    featured: true,
    tags: ["limited", "makeup", "eyeshadow"]
  },
  {
    id: 9,
    name: "Silk Blouse",
    description: "Luxurious silk blouse in soft pink",
    price: "11650",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "clothes",
    inStock: true,
    featured: false,
    tags: ["silk", "luxurious", "blouse"]
  },
  {
    id: 10,
    name: "Crossbody Bag",
    description: "Compact crossbody bag for everyday use",
    price: "9050",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "bags",
    inStock: true,
    featured: false,
    tags: ["crossbody", "everyday", "compact"]
  },
  {
    id: 11,
    name: "Ankle Boots",
    description: "Stylish ankle boots with block heel",
    price: "19450",
    salePrice: "15550",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "shoes",
    inStock: true,
    featured: false,
    tags: ["boots", "ankle", "block-heel"]
  },
  {
    id: 12,
    name: "Dry Shampoo",
    description: "Refreshing dry shampoo for all hair types",
    price: "3250",
    salePrice: null,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "hair",
    inStock: true,
    featured: false,
    tags: ["dry-shampoo", "refreshing", "all-hair-types"]
  }
];
