import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICharacter} from "../interfaces/character.interface";
import {urls} from "../../episodes/configs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient,) {
  }

  getAll(): Observable<ICharacter[]> {
    return this.httpClient.get<ICharacter[]>(urls.character)
  }

  geById(id: string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${urls.character}/${id}`)
  }

}
