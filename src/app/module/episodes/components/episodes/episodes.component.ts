import {Component, Input, OnInit} from '@angular/core';
import {EpisodeService} from "../../services/episode.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IResult, IResults} from "../../interfaces";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  results: IResults<IResult>
  episodes: IResult[]

  constructor(private episodeService: EpisodeService, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({episodes}) => {
      this.results = episodes
      this.episodes = episodes?.results
    })
  }

  nextPage(): void {
    const page = this.results.info.next?.split('=')[1]
    this.episodeService.getByPage(page).subscribe(value => {
      this.results = value
      this.episodes = this.results.results
    })
  }

  prevPage(): void {
    const page = this.results.info.prev?.split('=')[1]
    this.episodeService.getByPage(page).subscribe(value => {
      this.results = value
      this.episodes = this.results.results
    })
  }

}
