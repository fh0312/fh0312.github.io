import {Component} from '@angular/core';
import {NgFor} from "@angular/common";

interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: "Accenture Technology Solutions",
      role: "System Developer Analyst",
      start: "03/2025",
      end: "PRESENT",
      description: [
        "Developed and maintained more than ten internal banking applications, working across the full stack with Java (Spring Boot) and Angular to deliver both frontend and backend functionality.",
        "Led the migration of over eight applications from cookie-based authentication to OAuth2, and contributed to the design and development of new systems from scratch.",
        "Managed and optimized CI/CD pipelines using GitHub Actions and Kubernetes, configuring and maintaining environments to ensure smooth integration and delivery.",
        "Participated in Agile ceremonies, improved internal documentation, and streamlined team communication and workflow to enhance productivity."
      ]
    },
    {
      company: "Accenture Technology Solutions",
      role: "App/Cloud Support Associate",
      start: "10/2023",
      end: "03/2025",
      description: [
        "Maintained CI/CD pipelines using GitHub Actions and Kubernetes, and supported environment configuration for development and testing.",
        "Contributed to early-stage development activities, including feature discussions, requirements analysis, and bug resolution.",
        "Improved internal documentation and supported Agile processes within the team."
      ]
    }
  ];
}
