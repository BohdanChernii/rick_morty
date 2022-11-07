import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {EpisodesPageComponent} from "./pages/episodes-page/episodes-page.component";
import {EpisodesDetailsPageComponent} from "./pages/episodes-details-page/episodes-details-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'episodes'},
      {
        path: 'episodes', component: EpisodesPageComponent, children: [
          {
            path: '',
            loadChildren: () => import('./module/episodes/episodes.module').then(value => value.EpisodesModule)
          }
        ]
      },
      {
        path: 'episodes/:id', component:EpisodesDetailsPageComponent, children: [
          {path: '', loadChildren: () => import('./module/details/details.module').then(value => value.DetailsModule)}
        ]
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
