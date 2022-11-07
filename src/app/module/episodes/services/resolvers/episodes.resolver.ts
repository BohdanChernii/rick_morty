import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IResult, IResults} from "../../interfaces";
import {EpisodeService} from "../episode.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodesResolver implements Resolve<IResults<IResult>> {

  constructor(private episodeService: EpisodeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResults<IResult>> {
    return this.episodeService.getAll()
  }
}
