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

  constructor(private iconService: NzIconService) {
    this.iconService.addIcon(LinkedinFill, PhoneFill, GithubOutline, MailFill);
  }

  formspreeUrl = 'https://formspree.io/f/mldlzopr';

  submitted = false;

  onSubmit(event: Event) {
    event.preventDefault(); // stop full-page reload

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch(this.formspreeUrl, {
      method: 'POST',
      body: formData,
      headers: {Accept: 'application/json'}
    })
      .then(response => {
        if (response.ok) {
          this.submitted = true;
          form.reset();
        } else {
          alert('❌ Message failed to send. Please try again.');
        }
      })
      .catch(() => {
        alert('❌ An error occurred. Please try again later.');
      });
  }


}
