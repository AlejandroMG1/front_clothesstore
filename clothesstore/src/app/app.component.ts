import { ChangeDetectionStrategy, Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clothesstore';
  marginTop = 'auto';

  reason = '';

  close(view:any) {
    console.log(view);
    
    view.close();
  }
}
