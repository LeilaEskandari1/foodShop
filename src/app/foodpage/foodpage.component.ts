import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!:Food;
constructor(private foodservice:FoodService,private activetedroute:ActivatedRoute,private router:Router,private catService:CartService){
  this.activetedroute.params.subscribe((params)=>{
    if (params['id'])
    this.food=foodservice.getFoodById(params['id']);
  })
 
}
addToCart(){
  this.catService.addToCard(this.food);
this.router.navigateByUrl('/cart-page');
}
}
