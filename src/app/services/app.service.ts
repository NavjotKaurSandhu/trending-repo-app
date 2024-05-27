import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IRepositories } from '../interface/repositories.interface';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly datePipe: DatePipe
  ) {}

  getRepositories(): Observable<IRepositories[]> {
    const currentDate = new Date();
    const lastWeekDate = new Date(
      currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
    );
    const formatedDate = this.datePipe.transform(lastWeekDate, 'yyyy-MM-dd');

    const apiUrl = `/search/repositories?q=created:>=${formatedDate}&sort=stars&order=desc`;
    return this.httpClient
      .get(apiUrl)
      .pipe(map((res: any) => res['items'])) as Observable<IRepositories[]>;
  }
}
