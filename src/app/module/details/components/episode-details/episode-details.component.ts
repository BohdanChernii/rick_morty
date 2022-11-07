import {Component, OnInit} from '@angular/core';
import {IResult} from "../../../episodes/interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {
  details: IResult
  charactersIds: string[]

  constructor(private activatedRoute: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({episode}) => this.details = episode)
    this.charactersIds = this.details.characters.map(item => item.split('/')[5]);
    console.log(this.charactersIds);

  }

}
