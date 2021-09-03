import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
  ]
})
export class NavigationAndInfoModule { }
