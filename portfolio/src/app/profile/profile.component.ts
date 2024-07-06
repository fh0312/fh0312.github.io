import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  imageUrl: string = 'assets/files/profile-picture.png';
  name: string = 'Francisco Henriques';
  description: string = '<Full Stack Developer>';

  constructor() {}

  ngOnInit() {}

}
