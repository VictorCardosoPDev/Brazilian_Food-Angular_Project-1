import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food } from '../../shared/models/Food';
import { CartItem } from '../../shared/models/CartItem';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly storageKey = 'cart';
  private cart: Cart;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.cart = new Cart();
    if (isPlatformBrowser(this.platformId)){
      this.loadCart();
    }
    
  }

  private saveCart(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
  }

  private loadCart(): void {
    const cartData = localStorage.getItem(this.storageKey);
    if (cartData) {
      const data = JSON.parse(cartData);

      // Reconstrói o objeto Cart
      this.cart = new Cart();

      // Reconstrói os itens do carrinho
      this.cart.items = data.items.map((itemData: any) => {
        const food = new Food();
        Object.assign(food, itemData.food);

        const cartItem = new CartItem(food);
        cartItem.quantity = itemData.quantity;

        return cartItem;
      });
    }
  }

  addToCart(food: Food, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
        
        this.changeQuantity(food.id, cartItem.quantity + quantity);
    } else {
        const newItem = new CartItem(food);
        newItem.quantity = quantity; 
        this.cart.items.push(newItem);
    }
    this.saveCart();
}

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.saveCart();
  }

  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    this.saveCart();
  }

  getCart(): Cart {
    return this.cart;
  }
}
