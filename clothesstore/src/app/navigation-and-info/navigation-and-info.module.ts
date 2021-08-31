import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
  ]
})
export class NavigationAndInfoModule { }
