import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {MySelfComponent} from "./myself/myself.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {ExperienceComponent} from "./experience/experience.component";
import {ContactComponent} from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MySelfComponent, AboutMeComponent, ExperienceComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // <-- fix here
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const targetID = target.getAttribute('href')?.substring(1);
        if (!targetID) return;

        const targetElement = document.getElementById(targetID);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}
