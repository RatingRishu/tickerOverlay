import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.css'],
})
export class MatchSummaryComponent implements OnInit {
  @Input() battingStats: any;
  @Input() battingMetaInfo: any;
  @Input() bowlingTeamDetails: any;
  @Input() bowlingMetaInfo: any;
  showBatting: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showBatting = false; // After 5 seconds, switch to bowling
      setTimeout(() => {
        this.showBatting = true; // After another 5 seconds, switch back to batting
      }, 5000);
    }, 5000);
  }
}
