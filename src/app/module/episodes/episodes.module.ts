import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import { EpisodeDetailsComponent } from '../details/components/episode-details/episode-details.component';
import {DetailsModule} from "../details/details.module";


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent
  ],
  exports: [
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EpisodesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    DetailsModule
  ]
})
export class EpisodesModule { }
