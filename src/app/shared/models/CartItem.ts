import { Food } from "./Food";

export class CartItem{
    constructor(food:Food){
        this.food = food;
        
    }

    get price():number{
        return this.food.price * this.quantity;
    }

    food:Food;
    quantity:number = 1;
}