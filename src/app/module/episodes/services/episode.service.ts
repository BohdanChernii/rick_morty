import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResult, IResults} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IResults<IResult>> {
    return this.httpClient.get<IResults<IResult>>(urls.episodes)
  }

  getById(id: number): Observable<IResult> {
    return this.httpClient.get<IResult>(`${urls.episodes}/${id}`)
  }

  getByPage(page: string | undefined): Observable<IResults<IResult>> {
    return this.httpClient.get<IResults<IResult>>(`${urls.episodes}?page=${page}`)
  }

}

