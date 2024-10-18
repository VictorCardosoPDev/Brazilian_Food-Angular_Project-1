import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';




@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterLink,MatIconModule],
 
  
templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})

export class CartPageComponent implements OnInit{
  cart!:Cart;
  cartItem!:CartItem;
  
  constructor(private cartService:CartService){
    this.setCart();
  }

  ngOnInit(): void {
    
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItemId:CartItem){
    this.cartService.removeFromCart(cartItemId.food.id);
    this.setCart();
  }

  

}
