import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetProduct, ProductSearchResponse } from 'src/interfaces/mercado-libre';

@Injectable({
  providedIn: 'root'
})
export class MercadoLibreService {

  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': "Token " });

  apiUrl = environment.mlAPI


  constructor(private http: HttpClient) { }

  searchProducts(limit: number, offset: number, search?: string): Promise<ProductSearchResponse> {
    return this.http.get<ProductSearchResponse>(this.apiUrl + `sites/MCO/search?category=MCO1430&limit=${limit}&offset=${offset}&q=${search ? search : ''}`, { headers: this.httpHeaders }).toPromise();
  }

  getRequestProducts(ids:string[]){
    const pIds = ids.toString()
    return this.http.get<GetProduct[]>(this.apiUrl + `items?ids=${ids}`, { headers: this.httpHeaders }).toPromise();
  }
}
