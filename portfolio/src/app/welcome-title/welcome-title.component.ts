import {Component} from '@angular/core';

@Component({
  selector: 'app-welcome-title',
  imports: [],
  templateUrl: './welcome-title.component.html',
  standalone: true,
  styleUrl: './welcome-title.component.scss'
})
export class WelcomeTitleComponent {

  navigateTo(url: string) {
    window.location.href = url;
  }

}
