import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService){
    activatedRoute.params.subscribe((params)=>{
      if(params){
        this.food = foodService.getFoodById(params['id'])
      }
    })
  }

}
