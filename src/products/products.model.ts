import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productBrand: { type: String, required: true },
  productAmount: { type: Number, required: true },
  productSize: { type: String, required: true },
  productDesc: { type: String, required: true },
  productImage: { type: String, required: true },
  productPrice: { type: Number, required: true },
});

export interface ProductInterface {
  productId?: number;
  productName: string;
  productBrand: string;
  productAmount: number;
  productSize: string;
  productDesc: string;
  productImage: string;
  productPrice: number;
}
