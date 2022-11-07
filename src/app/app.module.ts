import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {EpisodesModule} from "./module/episodes/episodes.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EpisodesHeaderComponent } from './components/episodes-header/episodes-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import {MatCardModule} from "@angular/material/card";

import {LocationUpgradeModule} from "@angular/common/upgrade";
import { EpisodesDetailsPageComponent } from './pages/episodes-details-page/episodes-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    EpisodesHeaderComponent,
    EpisodesPageComponent,
    EpisodesDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    EpisodesModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
