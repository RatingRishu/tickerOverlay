import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private apiUrl = 'http://criccenter-eb-server-env.eba-ehyam9g3.us-east-2.elasticbeanstalk.com/getScoreByMatch/6da2e6fe-b854-4231-9512-531362ec34b6';
  
  public inningScoreCardList: any[] = [];
  public bowlingScoreCardResponses: any[] = [];
  public battingScoreCardResponseList: any[] = [];
  
  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
