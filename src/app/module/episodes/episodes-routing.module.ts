import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodesResolver} from "./services/resolvers/episodes.resolver";

const routes: Routes = [{
  path: '', component: EpisodesComponent, resolve: {episodes: EpisodesResolver},
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule {
}
