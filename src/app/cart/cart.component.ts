import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetProduct } from 'src/interfaces/mercado-libre';
import { CartService } from 'src/services/cart.service';
import { MercadoLibreService } from 'src/services/mercado-libre.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() cartToggle = new EventEmitter()

  productsIds: string[] = [];

  products: GetProduct[] = [];

  cartSub!: Subscription;

  constructor(private cartService: CartService, private mlService: MercadoLibreService) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.cart.subscribe(
      (ids) => {
        this.productsIds = ids;
        if (this.productsIds.length > 0) {
          this.getProducts();
        }else{
          this.products=[]
        }

      }
    )
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe()
    }
  }

  public onToggleSidenav = () => {
    this.cartToggle.emit();
  }

  async getProducts() {
    this.products = await this.mlService.getRequestProducts(this.productsIds)
  }

  removeFromCart(id:string){
    this.cartService.removeFromCart(id)
  }
}
