import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NavigationAndInfoModule } from './navigation-and-info/navigation-and-info.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CartComponent } from './cart/cart.component';
import { CartCardComponent } from './cart/cart-card/cart-card.component';
import { CartService } from 'src/services/cart.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
    CartComponent,
    CartCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NavigationAndInfoModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatIconModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
