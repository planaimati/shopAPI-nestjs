import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductInterface } from './products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductInterface>,
  ) {}

  async createProduct(body: ProductInterface) {
    const newProduct = new this.productModel({
      productName: body.productName,
      productBrand: body.productBrand,
      productDesc: body.productDesc,
      productAmount: body.productAmount,
      productImage: body.productImage,
      productPrice: body.productPrice,
      productSize: body.productSize,
    });

    const result = await newProduct.save();

    return result;
  }

  async getAllProducts() {
    const allProducts = this.productModel.find({});
    return allProducts;
  }

  async getSingleProduct(id: string) {
    const singleProduct = await this.productModel.findById(id);

    return singleProduct;
  }

  async deleteProduct(id: string) {
    const deletedProduct = await this.productModel.findByIdAndDelete(id);

    return deletedProduct;
  }
}
