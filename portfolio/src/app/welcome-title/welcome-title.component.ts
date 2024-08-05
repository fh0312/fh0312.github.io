import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-title',
  standalone: true,
  imports: [],
  templateUrl: './welcome-title.component.html',
  styleUrl: './welcome-title.component.css'
})
export class WelcomeTitleComponent {

  navigateTo(url: string) {
    window.location.href = url;
  }

}
