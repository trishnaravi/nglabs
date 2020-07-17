import { Injectable } from "@angular/core";

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Album } from '../album.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  url = "http://localhost:3334/albums";

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(this.url + '/' + id);
  }

  updateAlbum(album: Album): Observable<Album> {
    console.log('in update svc', album)
    let newUrl = `${this.url}/${album.id}`;
    console.log('newUrl', newUrl)
    return this.http.put<Album>(newUrl,album)
    .pipe(
      catchError(this.handleError('update',album))
    )
  }

  private handleError<T> (operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
