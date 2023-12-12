import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{

  foods:Food[] =[];

  constructor(private foodServiceObj:FoodService, private activatedRoute:ActivatedRoute){ }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        this.foods = this.foodServiceObj.getAllFoodsBySearchTerm(params['searchTerm']);
      }
      else if(params['tag']){
        this.foods = this.foodServiceObj.getAllFoodsByTags(params['tag'])
      }
      else{
        this.foods = this.foodServiceObj.getAll()
      }   
    })
  }
}
