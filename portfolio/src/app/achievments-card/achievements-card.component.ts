import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-achievements-card',
  templateUrl: './achievements-card.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./achievements-card.component.scss']
})
export class AchievementsCardComponent {
  achievements = [
    {number: '2+', label: 'Years of Experience'},
    {number: '20+', label: 'Apps Maintained'},
    {number: '1000+', label: 'Git Contributions'},
    {number: 'Full', label: 'CI/CD Driven Full Stack Dev'}
  ];
}
