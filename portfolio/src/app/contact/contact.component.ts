import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NzIconDirective, NzIconService} from "ng-zorro-antd/icon";
import {GithubOutline, LinkedinFill, MailFill, PhoneFill} from "@ant-design/icons-angular/icons";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NzIconDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formspreeUrl = 'https://formspree.io/f/mldlzopr';

  constructor(private iconService: NzIconService) {
    this.iconService.addIcon(LinkedinFill, PhoneFill, GithubOutline, MailFill);
  }
}
