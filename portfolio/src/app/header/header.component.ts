import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  scrollToEvent($event: MouseEvent) {
    const button = $event.target as HTMLElement;

    const id = button.className;
    console.log("id", id);
    console.log(document);
    const element = document.getElementById(id) as HTMLElement;
    console.log("element", element);
    element.scrollIntoView({ behavior: 'smooth' });

  }
}
