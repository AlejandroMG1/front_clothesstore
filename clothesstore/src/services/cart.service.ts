import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  constructor() { }

  addToCar(id:string){
    let actual = this.cart.value.slice()
    actual.push(id) 
    this.cart.next(actual)
  }

  removeFromCart(id:string){
    let actual = this.cart.value.slice()
    actual = actual.filter((lid)=>lid != id)
    this.cart.next(actual)
  }

  isInCart(id:string){
    return this.cart.value.findIndex((lid)=>lid===id) > 0;
  }
}
