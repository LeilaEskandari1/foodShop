import { Injectable } from '@angular/core';
import {Food}from '../../shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllTags():Tag[]{
    return [{name:'All',count:14},
    {name:'FastFood',count:4},
    {name:'Lunch',count:5},
    {name:'سنتی',count:2}]
  }
  getAllFoodsByTag(tag:string):Food[]{
  return tag=="All"?
  this.getAll():
  this.getAll().filter(food=>food.tags?.includes(tag));
  }
  getAllFoodsBySerachTerm(searchTerm:string):Food[]{
  return  this.getAll().filter(food=>food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }
  getFoodById(id:number):Food{
   return  this.getAll().find(food=>food.id==id)!;
  }
  getAll():Food[]{
    return[
    {
      id:1 ,
    name:'ماکارونی',
    price:10,
    tags:['FastFood','Pizza','Lunch'],
    favorite:true,
    stars:4.5,
    imageUrl:'assets/images/foods/food-1.jfif',
    origins:['italy'],
    cookieTime:'10-20',
    },{
      id:2 ,
    name:'ghoemeh',
    price:20,
    tags:['سنتی','Pizza','Lunch'],
    favorite:false,
    stars:4.5,
    imageUrl:'assets/images/foods/food-2.jfif',
    origins:['irani'],
    cookieTime:'10-20',
    },
    {
      id:3 ,
    name:'سیب زمینی',
    price:30,
    tags:['FastFood','Pizza','Lunch'],
    favorite:false,
    stars:4.5,
    imageUrl:'../../../assets/images/foods/food-3.jfif',
    origins:['irani'],
    cookieTime:'10-20',
    },
    {
      id:4 ,
    name:'pizza',
    price:40,
    tags:['FastFood','Pizza','Lunch'],
    favorite:false,
    stars:4.5,
    imageUrl:'../../../assets/images/foods/food-4.jfif',
    origins:['italy'],
    cookieTime:'10-20',
    },
    {
      id:5,
    name:'کوفته',
    price:50,
    tags:['سنتی','Pizza','Lunch'],
    favorite:false,
    stars:4.5,
    imageUrl:'../../../assets/images/foods/food-5.jfif',
    origins:['irani'],
    cookieTime:'10-20',
    }
    
    ]
  }
  
}
