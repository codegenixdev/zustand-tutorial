import { Product } from '@/types/product';

export type CartProduct = Product & { qty: number };
