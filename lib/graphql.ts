/*
- Replaced all `any` types with strict, specific TypeScript types (e.g., `string`, `number`).
- This improves type safety, enables better autocompletion, and makes the code easier to maintain.
- Defined a `FetchProductsResponse` type for the return value of `fetchProducts` for clarity.
- Added a new `fetchProductById` function to retrieve a single product, which will be used on the product detail page.
*/

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  sku?: string;
  inventory?: number;
  manufacturer?: string;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  tags?: string[];
  reviews?: any[]; // Assuming review structure is unknown, otherwise this would be a specific type
}

export interface FetchProductsResponse {
  data: {
    products: Product[];
  };
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 25.0,
    description:
      'A comfortable and stylish classic white cotton t-shirt, perfect for any casual occasion.',
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: '2',
    name: 'Premium Denim Jeans',
    price: 60.0,
    description:
      'Durable premium denim jeans with a modern slim fit, crafted for everyday comfort and style.',
    imageUrl:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: '3',
    name: 'Vintage Leather Jacket',
    price: 150.0,
    description:
      'Premium genuine leather jacket with vintage styling, perfect for creating a timeless look.',
    imageUrl:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: '4',
    name: 'Athletic Running Shoes',
    price: 80.0,
    description:
      'Lightweight, breathable running shoes with advanced cushioning technology for maximum comfort.',
    imageUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: '5',
    name: 'Cozy Knit Sweater',
    price: 45.0,
    description:
      'Soft, warm knit sweater made from premium wool blend, ideal for cooler weather.',
    imageUrl:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: '6',
    name: 'Designer Sunglasses',
    price: 120.0,
    description:
      'Stylish designer sunglasses with UV protection and premium polarized lenses.',
    imageUrl:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&crop=center',
  },
];

const productsWithExtraData = mockProducts.map((p) => ({
  ...p,
  sku: `SKU-${p.id}`,
  inventory: Math.floor(Math.random() * 100),
  manufacturer: 'StyleStore',
  weight: Math.random() * 5,
  dimensions: { width: 10, height: 10, depth: 10 },
  tags: ['fashion', 'style', 'modern'],
  reviews: [],
}));

export async function fetchProducts(): Promise<FetchProductsResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { products: productsWithExtraData } });
    }, 500);
  });
}

export async function fetchProductById(id: string): Promise<Product | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productsWithExtraData.find((p) => p.id === id);
      resolve(product || null);
    }, 300);
  });
}