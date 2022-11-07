import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { CharacterComponent } from './components/character/character.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    CharacterComponent
  ],
  exports: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatCardModule
  ]
})
export class DetailsModule { }
