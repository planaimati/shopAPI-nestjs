import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-protuct.dto';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async getAllProducts() {
    const products = await this.productService.getAllProducts();
    console.log(products);

    return products;
  }

  @Get('/:id')
  async getSingleProduct(@Param('id') id: string) {
    const product = await this.productService.getSingleProduct(id);

    return product;
  }

  @Post()
  async createProduct(@Body() body: CreateProductDto) {
    const product = await this.productService.createProduct(body);
    return product;
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const deletedProduct = await this.productService.deleteProduct(id);
    return deletedProduct;
  }
}
