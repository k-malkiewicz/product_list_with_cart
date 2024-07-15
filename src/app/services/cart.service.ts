import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  orderConfirmed: boolean = false;
  private readonly MAX_QUANTITY_PER_PRODUCT = 20;

  addProductToCart(product: Product): void {
    if (this.getProductCartIndex(product) >= 0) {
      return;
    }
    product.quantity = 1;
    this.cart.push(product);
  }

  getProductCartIndex(product: Product): number {;
    return this.cart.findIndex(cartItem => cartItem.name === product.name);
  }

  changeProductQuantity(product: Product, num: number): void {
    const foundProduct: Product = this.cart.filter(cartItem => cartItem.name === product.name)[0];
    const productQuantity = this.getProductQuantity(foundProduct);
    
    if (productQuantity) {
      if (productQuantity + num === 0) {
        this.removeProductFromCart(product);
      }
      if (productQuantity + num > this.MAX_QUANTITY_PER_PRODUCT) {
        return;
      }
      foundProduct.quantity! += num;
    }
  }

  getProductQuantity(product: Product): number {
    const foundProduct = this.cart.find(cartItem => cartItem.name === product.name);
    
    if (foundProduct && foundProduct.quantity) {
      return foundProduct.quantity;
    }
    return 0;
  }

  removeProductFromCart(product: Product): void {
    const productIndex = this.getProductCartIndex(product);

    if (productIndex >= 0) {
      this.cart.splice(productIndex, 1);
    }
  }

  resetCart(): void {
    this.cart = [];
  }

  get totalOrderPrice(): number {
    return this.cart.reduce((total, product) => total + product.quantity! * product.price, 0);
  }

  get totalQuantity(): number {
    return this.cart.reduce((total, product) => total + product.quantity!, 0);
  }
}
