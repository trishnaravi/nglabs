import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumListComponent } from '../albums/album-list/album-list.component';
import { AlbumCardComponent } from '../albums/album-card/album-card.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AlbumListComponent,
    AlbumCardComponent,
    AlbumDetailsComponent,
    AlbumEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlbumsRoutingModule,
    RouterModule
  ]
})
export class AlbumsModule { }
