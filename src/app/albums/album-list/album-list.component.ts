import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ALBUMS } from "../albums.data";
import {AlbumService} from '../shared/album.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albumsArray: Observable<Album[]>;

  constructor(private albumService: AlbumService) { };

  getAlbums() {
   this.albumsArray = this.albumService.getAlbums();
  }

  ngOnInit() {
    this.getAlbums();
  }

  parentFunctionHandler(album) {
    alert('Album ' + album.albumName + ' was sent from the album card component');
  }

}
