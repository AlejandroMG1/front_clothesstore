import { ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @ViewChild('toolBar') toolBar!:any;
  isSticky: boolean = false;
  @Output() height:EventEmitter<string> = new EventEmitter<string>()
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const offset =  this.toolBar.nativeElement.offsetHeight -window.pageYOffset
    if(window.pageYOffset > 1){
      this.height.emit( `${this.toolBar.nativeElement.offsetHeight}px`)
      this.isSticky=true
      console.log(this.isSticky);
      
    }
  }

  ngAfterViewInit(){
    console.log("lucky");
    
    this.height.emit( `${this.toolBar.nativeElement.offsetHeight}px`)
    this.isSticky=true
    if(window.pageYOffset > 1){
      
      
      console.log(this.isSticky);
      
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
