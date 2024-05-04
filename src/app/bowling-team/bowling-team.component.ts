import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bowling-team',
  templateUrl: './bowling-team.component.html',
  styleUrls: ['./bowling-team.component.css'],
})
export class BowlingTeamComponent {
  @Input() bowlingTeamDetails: any;
  @Input() bowlingMetaInfo: any;
  bgImageUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    this.bgImageUrl = '../../assets/img/inning_one_bg.png';
  }
}
