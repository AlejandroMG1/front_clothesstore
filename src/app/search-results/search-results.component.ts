import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/interfaces/mercado-libre';
import { MercadoLibreService } from 'src/services/mercado-libre.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  search!: string;
  paramSub!: Subscription;

  searchResults: Product[] = []
  limit = 30;
  offset = 0;
  next = true;
  loading=true;

  constructor(private route: ActivatedRoute, private mlService: MercadoLibreService) { }

  ngOnInit() {
    this.paramSub = this.route.queryParams
      .subscribe(params => {
        this.search = params.q;
        this.offset = 0;
        this.next = true;
        this.getSearchResults();
      }
      );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.paramSub) {
      this.paramSub.unsubscribe()
    }
  }

  async getSearchResults() {
    if (this.next) {
      this.loading=true;
      
      const response = await this.mlService.searchProducts(this.limit, this.offset, this.search);
      if (this.offset == 0) {
        this.searchResults = response.results
      } else {
        this.searchResults = this.searchResults.concat(response.results)
      }
      this.next = this.offset < response.paging.primary_results
      this.offset = this.offset + this.limit
      this.loading=false
    }
  }

  public trackItem (index: number, item: Product) {
    return item.id;
  }
}
