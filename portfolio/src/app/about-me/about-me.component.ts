import {Component} from '@angular/core';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzCarouselModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  carouselGroups = [
    {
      title: 'Development',
      logos: [
        {name: 'Java', img: 'assets/logos/java.svg'},
        {name: 'Angular', img: 'assets/logos/angular.svg'},
        {name: 'Spring', img: 'assets/logos/spring.svg'},
        {name: 'Quarkus', img: 'assets/logos/quarkus.svg'}
      ]
    },
    {
      title: 'Agile & Collaboration',
      logos: [
        {name: 'Jira', img: 'assets/logos/jira.svg'},
        {name: 'Confluence', img: 'assets/logos/confluence.svg'},
      ]
    },
    {
      title: 'CI/CD & Cloud',
      logos: [
        {name: 'Bamboo', img: 'assets/logos/bamboo.svg'},
        {name: 'AWS', img: 'assets/logos/aws.png'},
        {name: 'Kubernetes', img: 'assets/logos/kubernetes.svg'},
        {name: 'Argo CD', img: 'assets/logos/argo.png'},
        {name: 'Docker', img: 'assets/logos/docker.svg'}
      ]
    }
  ];
}
