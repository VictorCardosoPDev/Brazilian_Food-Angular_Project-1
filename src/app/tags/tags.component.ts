import { Component,OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food.service';
import { NgForOf, NgIf } from '@angular/common';





@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule,NgIf,NgForOf],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  tags:Tag[] = [];
  constructor(private foodService:FoodService) {}

  ngOnInit(): void {
    
    this.tags = this.foodService.getAllTags();
  }


}
