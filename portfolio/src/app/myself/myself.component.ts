import {Component} from '@angular/core';
import {NzIconDirective, NzIconModule, NzIconService} from "ng-zorro-antd/icon";
import {NgxTypewriterComponent} from "@omnedia/ngx-typewriter";
import {GithubOutline, LinkedinFill, ProfileOutline} from "@ant-design/icons-angular/icons";
import {ProfilePictureComponent} from "../profile-picture/profile-picture.component";
import {AchievementsCardComponent} from "../achievments-card/achievements-card.component";


@Component({
    selector: 'app-myself',
    templateUrl: './myself.component.html',
    styleUrls: ['./myself.component.scss'],
    standalone: true,
    imports: [
        NzIconDirective,
        NgxTypewriterComponent,
        NzIconModule,
        ProfilePictureComponent,
        AchievementsCardComponent,
    ]
})
export class MySelfComponent {
    constructor(private iconService: NzIconService) {
        this.iconService.addIcon(LinkedinFill, ProfileOutline, GithubOutline);
    }

    typewriterTitles = [
        ' Full Stack Developer',
        ' DevOps Practitioner',
        ' Cloud Enthusiast',
    ];
}
