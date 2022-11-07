import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IResult} from "../../interfaces";
import {HttpClient} from "@angular/common/http";
import {EpisodeService} from "../episode.service";
import {urls} from "../../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeByIdResolver implements Resolve<IResult> {
  constructor(private episodeService: EpisodeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResult> {
    const {id} = route.params
    return this.episodeService.getById(id)
  }
}
