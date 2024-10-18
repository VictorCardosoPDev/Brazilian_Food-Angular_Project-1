import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { NgFor } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,SearchComponent,TagsComponent,MatDialogModule,RouterLink,CartPageComponent, FormsModule],
  
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  foods:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) {}

  ngOnInit(): void {
      this.foods = this.foodService.getAll();
      this.route.params.subscribe(params =>{
        if(params.searchTerm){
          this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        }
        else if (params.tag){
          this.foods = this.foodService.getAllFoodsByTag(params.tag);
        }
        else
        {
          this.foods = this.foodService.getAll();
        }
          
      })
  }

}
