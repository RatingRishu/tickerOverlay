import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-batting-team',
  templateUrl: './batting-team.component.html',
  styleUrls: ['./batting-team.component.css'],
})
export class BattingTeamComponent {
  @Input() battingStats: any;
  @Input() battingMetaInfo: any;
  bgImageUrl: any;
  constructor() {}

  ngOnInit(): void {
    this.bgImageUrl = '../../assets/img/inning_one_bg.png';
    // data.inningScoreCardList.length == 1
    //   ? '../../assets/img/inning_one_bg.png'
    //   : '../../assets/img/inning_two_bg.png';
  }
}
