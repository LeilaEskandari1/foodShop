import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import {Food } from '../shared/models/Food';
import{ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];
  constructor(private foodServices:FoodService , private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{if(params['searchTerm'])
      this.foods=this.foodServices.getAllFoodsBySerachTerm(params['searchTerm']);
    else if (params['tag1'])
    this.foods=this.foodServices.getAllFoodsByTag(params['tag1']);
      else  
    this.foods=this.foodServices.getAll();}
    )
  
    console.log(this.foods);
  }

}
