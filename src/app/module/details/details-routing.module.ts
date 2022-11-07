import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EpisodeDetailsComponent} from "./components/episode-details/episode-details.component";
import {EpisodeByIdResolver} from "../episodes/services/resolvers/episode-by-id.resolver";


const routes: Routes = [
  {path: '', component: EpisodeDetailsComponent, resolve: {episode: EpisodeByIdResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule {
}
