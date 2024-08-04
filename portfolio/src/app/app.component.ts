import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfilePictureComponent} from "./profile-picture/profile-picture.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {WelcomeTitleComponent} from "./welcome-title/welcome-title.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfilePictureComponent, HeaderComponent, FooterComponent, WelcomeTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
