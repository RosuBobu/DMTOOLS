import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  urlApi = 'http://localhost:3000/players';
  classes = ['Shooter', 'Bard', 'Wizard', 'WebDev', 'Knight'];
  campains = ['Call of Cthulhu', 'My way @HumanBooster', 'My Little Poney Nuclear Edition'];

  constructor(private httpClient: HttpClient) {}

  getClasses(){
    return this.classes;
  }

  getCampains(){
    return this.campains;
  }

  add(player: Player): Observable<Player>{
    return this.httpClient.post<Player>(this.urlApi, player).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.urlApi).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getOneById(id: number): Observable<Player> {
    return this.httpClient.get<Player>(this.urlApi + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  delete(player: Player): Observable<Player>{
    return this.httpClient.delete<Player>(this.urlApi + '/' + player.id);
  }

  edit(player: Player): Observable<Player> {
    return this.httpClient.put<Player>(this.urlApi + '/' + player.id, player).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }





}
