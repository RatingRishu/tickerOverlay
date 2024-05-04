import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor(private http: HttpClient) {}

  getMatchData(matchId: string): Observable<any> {
    const apiUrl = `http://criccenter-eb-server-env.eba-ehyam9g3.us-east-2.elasticbeanstalk.com/getScoreByMatch/${matchId}`;
    return this.http.get<any>(apiUrl);
  }

  getTickerData(matchId: string): Observable<any> {
    const apiUrl = `http://criccenter-eb-server-env.eba-ehyam9g3.us-east-2.elasticbeanstalk.com/getTickerByMatchId/${matchId}`;
    return this.http.get<any>(apiUrl);
  }
}
