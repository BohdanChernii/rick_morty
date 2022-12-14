import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICharacter} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) {
  }

  getCharacterById(id: number | string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${urls.character}/${id}`)
  }
}
