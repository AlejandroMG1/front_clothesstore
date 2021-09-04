import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/interfaces/mercado-libre';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {

  @Input() product!:Product
  @Output() remove = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(){
    this.remove.emit()
  }

}
