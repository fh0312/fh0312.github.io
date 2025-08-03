import {Component} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {NzIconDirective, NzIconModule, NzIconService} from "ng-zorro-antd/icon";
import {NgxTypewriterComponent} from "@omnedia/ngx-typewriter";
import {GithubOutline, LinkedinFill, ProfileOutline} from "@ant-design/icons-angular/icons";


@Component({
    selector: 'app-myself',
    templateUrl: './myself.component.html',
    styleUrls: ['./myself.component.scss'],
    standalone: true,
    imports: [
        NzIconDirective,
        NgxTypewriterComponent,
        NzIconModule,
    ],
    animations: [
        trigger('floatAnimation', [
            transition(':enter', [
                animate('3s infinite ease-in-out', keyframes([
                    style({transform: 'translateY(0px)', offset: 0}),
                    style({transform: 'translateY(-20px)', offset: 0.5}),
                    style({transform: 'translateY(0px)', offset: 1}),
                ]))
            ])
        ])
    ]
})
export class MySelfComponent {
    constructor(private iconService: NzIconService) {
        this.iconService.addIcon(LinkedinFill, ProfileOutline, GithubOutline);
    }

    typewriterTitles = [
        'Full Stack Developer',
        'Java | Angular | Spring Boot | APIs'
    ];
}
