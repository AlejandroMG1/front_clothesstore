import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/mercado-libre';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product
  discount = 0;
  alreadiIncart = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    if (this.product.original_price) {
      this.discount = 100 - (this.product.price / (this.product.original_price as number) * 100)
    }
  }

  addToCart() {
    if (!this.alreadiIncart) {
      this.cartService.addToCar(this.product.id);
      this.alreadiIncart = true
    }
  }
}
