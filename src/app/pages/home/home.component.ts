import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activeCheck = true;
  onCheckActive() {
    this.activeCheck = !this.activeCheck;
  }
}
