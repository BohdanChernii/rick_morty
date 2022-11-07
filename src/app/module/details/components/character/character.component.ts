import {Component, Input, OnInit} from '@angular/core';
import {ICharacter} from "../../interfaces/character.interface";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input()
  characterId: string
  @Input()
  character: ICharacter

  constructor(private characterService:CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.geById(this.characterId).subscribe(value => this.character = value)
  }

}
