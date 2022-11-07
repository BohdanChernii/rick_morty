import {Component, Input, OnInit} from '@angular/core';
import {IResult} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input()
  episode: IResult


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {


  }

  ngOnInit(): void {

  }


  getDetails() {
    this.router.navigate([`/episodes/${this.episode.id}`], {
      relativeTo: this.activatedRoute
    })
  }
}
