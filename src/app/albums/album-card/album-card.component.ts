import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../album.model';


@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {

  newPrice: number
  @Input()
  album: Album;

  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

  showAlbum() {
    this.albumClicked.emit(this.album);
  }

  showArtist() {
    console.log(this.album.artist)
  }

  constructor() { }

  ngOnInit(): void {
    if (this.album.onSale) {
      this.newPrice = this.album.price - (this.album.price * .10)
    }
  }

}
