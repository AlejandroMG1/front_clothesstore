import { Component, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/mercado-libre';
import { MercadoLibreService } from 'src/services/mercado-libre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerImg: string[] = ['assets\\img\\banner-principal-desktop.png']

  selectedBannerIndex = 0

  mostWantedProducts:Product[]=[]

  mwIndex = 0;

  constructor(private mlService:MercadoLibreService) { }

  ngOnInit(): void {
    this.getMostWanted()
  }

  circularIndex(actual:number,extra: number,total:number): number {
    const i = actual + extra
    return (total + i) % total
  }

  async getMostWanted(){
    this.mostWantedProducts = await (await this.mlService.searchProducts(20,0)).results
  }
}
