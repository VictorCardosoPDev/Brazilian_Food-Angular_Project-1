import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { CommonModule, CurrencyPipe} from '@angular/common';
import { TagsComponent } from '../tags/tags.component';
import {MatIconModule} from '@angular/material/icon'
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { Cart } from '../shared/models/Cart';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { FormsModule} from '@angular/forms';



@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule,TagsComponent,MatIconModule,StarRatingComponent,CurrencyPipe,FormsModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
  food!:Food
  cart!:Cart
  cartItem!:CartItem
  selectedQuantity: number = 1;

  constructor(private activedRoute:ActivatedRoute, 
    private foodService:FoodService, 
    private cartService:CartService, 
    private router:Router){
    
    activedRoute.params.subscribe((params)=>{

      if(params.id)
        this.food = foodService.getFoodById(params.id)

    })}

  ngOnInit(): void {
    this.setCart();
    
  } 
  incrementQuantity() {
    this.selectedQuantity++;
  }

  decrementQuantity() {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }

  addToCart() {
    
    this.cartService.addToCart(this.food, this.selectedQuantity);
    this.router.navigateByUrl('/cart-page');
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
}
