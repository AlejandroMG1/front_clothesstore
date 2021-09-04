import { ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @ViewChild('toolBar') toolBar!: any;
  @Output() height: EventEmitter<string> = new EventEmitter<string>()
  @Output() sidenavToggle = new EventEmitter();
  @Output() cartToggle = new EventEmitter();

  isSticky: boolean = false;
  searchBy!: string;
  cartSub!:Subscription;
  inCart = 0

  constructor(private router: Router, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.cart.subscribe(
      (ids)=>{
        this.inCart = ids.length;
      }
    )
  }


  ngAfterContentChecked() {
    if (this.toolBar) {
      this.height.emit(`${this.toolBar.nativeElement.offsetHeight}px`)
      this.isSticky = true
    }

  }

  public onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  public openCart(){
    this.cartToggle.emit()
  }

  search() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchBy } });
  }
}
