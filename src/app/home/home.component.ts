import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  matchId: any;
  localCurrentOver = 0;
  showTicker: boolean = false;
  showMatchSummary: boolean = false;
  inningScoreDetails: any;
  channelLogo: string = '';
  battingTeamDetails = [];
  bowlingTeamDetails = [];
  tickerData: any;
  battingMetaInfo: any;
  bowlingMetaInfo: any;
  localCurrentBall = -1;
  showAnimatation = false;
  videoUrl: any;

  constructor(
    private commonService: CommonServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('matchId');
    this.callApi();
    setInterval(() => {
      this.callApi();
    }, 10000);
  }

  ngAfterViewInit() {
    if (this.showMatchSummary) {
      this.videoPlayer.nativeElement.play();
    }
  }

  callApi() {
    this.commonService.getTickerData(this.matchId).subscribe((data) => {
      if (!data) return;
      this.channelLogo = data.channelLogo;
      this.tickerData = data;
      console.log("localBall",this.localCurrentBall,"localOver",this.localCurrentOver);
      console.log("dataBall",data.scoreStripBalls,"dataOver",data.scoreStripOvers);
      const localCurrentBall = this.localCurrentOver * 6 + this.localCurrentBall;
      const dataCurrentBall = data.scoreStripOvers * 6 + data.scoreStripBalls;
      if (
        localCurrentBall!==dataCurrentBall 
      ) {
        const lastBall =
          data.overBalls.overSummaryList[0].ballsResponseList.splice(-1)[0];
        if (lastBall.wicket.wicket_id !== null) {
          this.videoUrl = '../../assets/video/out.mp4';
          this.showAnimatation = true;
          setTimeout(() => {
            this.showAnimatation = false;
          }, 5000);
        } else if (lastBall.runs_scored === 4) {
          this.videoUrl = '../../assets/video/4.mp4';
          this.showAnimatation = true;
          setTimeout(() => {
            this.showAnimatation = false;
          }, 5000);
        } else if (lastBall.runs_scored === 6) {
          this.videoUrl = '../../assets/video/6.mp4';
          this.showAnimatation = true;
          setTimeout(() => {
            this.showAnimatation = false;
          }, 5000);
        }
      }
     
      if (
        data.scoreStripBalls == 0 &&
        data.scoreStripOvers != this.localCurrentOver
      ) {
        this.commonService.getMatchData(this.matchId).subscribe((data) => {
          this.inningScoreDetails = data.inningScoreCardList.splice(-1)[0];
          this.battingTeamDetails =
            this.inningScoreDetails.battingScoreCardResponseList.map(
              (batter: any) => {
                return {
                  name: `${batter.playerFirstName} ${batter.playerLastName}`,
                  runs: batter.run,
                  balls: batter.balls,
                  fours: batter.fours,
                  sixes: batter.six,
                  strikeRate: batter.strikeRate,
                  status: batter.status === 'OUT' ? batter.status : '',
                };
              }
            );
          this.bowlingTeamDetails =
            this.inningScoreDetails.bowlingScoreCardResponses.map(
              (bowler: any) => {
                return {
                  name: `${bowler.playerFirstName} ${
                    bowler.playerLastName === null ? '' : bowler.playerLastName
                  }`,
                  overs: bowler.over,
                  maiden: bowler.maiden,
                  wickets: bowler.wickets,
                  economy: bowler.economy,
                  runs: bowler.runs,
                };
              }
            );
          this.battingMetaInfo = {
            battingTeam: this.inningScoreDetails.battingTeamName,
            bowlingTeam: this.inningScoreDetails.bowlingTeamName,
            battingScore: this.inningScoreDetails.runs,
            wickets: this.inningScoreDetails.wicket,
            overs: this.inningScoreDetails.over,
            extras:
              this.inningScoreDetails.wide + this.inningScoreDetails.noBall,
            battingTeamLogo: this.tickerData.battingTeamLogo,
            bowlingTeamLogo: this.tickerData.bowlingTeamLogo,
          };

          this.bowlingMetaInfo = {
            bowlingTeam: this.inningScoreDetails.bowlingTeamName,
            bowlingScore: this.inningScoreDetails.runs,
            wickets: this.inningScoreDetails.wicket,
            overs: this.inningScoreDetails.over,
          };
          if (this.showAnimatation) {
            setTimeout(() => {
              this.showMatchSummary = true;
            }, 6000);
            setTimeout(() => {
              this.showMatchSummary = false;
            }, 16000);
          } else {
            this.showMatchSummary = true;
            setTimeout(() => {
              this.showMatchSummary = false;
            }, 10000);
          }
        });
      }
      this.localCurrentOver = data.scoreStripOvers;
      this.localCurrentBall = data.scoreStripBalls;
      this.showTicker = true;
    });
  }
}
