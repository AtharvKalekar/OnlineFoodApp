import { Injectable } from '@angular/core';
import { Food } from '../Food';
import { sample } from 'rxjs';
import { sample_foods, sample_tags } from '../data';
import { Tag } from '../tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    const filteredFoods = this.getAll().filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log('Filtered Foods:', filteredFoods);
    return filteredFoods;
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodsByTags(tag:string):Food[]{
    return tag==="All"?this.getAll(): this.getAll().filter(food=>food.tags?.includes(tag));
  }
}
