import {Component} from '@angular/core';
import {ProfilePictureComponent} from "./profile-picture/profile-picture.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {WelcomeTitleComponent} from "./welcome-title/welcome-title.component";

@Component({
  selector: 'app-root',
  imports: [ProfilePictureComponent, HeaderComponent, FooterComponent, WelcomeTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
