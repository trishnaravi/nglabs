# Chapter 8 Services: 1 Use a service to return data for use in component

## Objectives

- Define a service, which returns hard-coded data
- Use dependency injection to inject service to component
- Call the service to get the data

## Steps

1. Continue working in your angular100-labs project in your branch. If you haven't completed previous exercises, you can delete your src directory and copy the solution's src directory from **Ch06-Pipes\1pipes**.

2. Use the integrated terminal to generate a service which returns an array of albums.

   ```bat
   ng g s albums/shared/album
   ```

3. Update the content of the service to look like this:

   ```typescript
   import { Injectable } from "@angular/core";

   import { ALBUMS } from "../albums.data";

   @Injectable({
     providedIn: "root"
   })
   export class AlbumService {
     constructor() {}

     getAlbums() {
       return ALBUMS;
     }
   }
   ```

   Notice the use of providedIn - this is new since Angular 6. With it - you do not need to add the service within the root module.

4. Update the **album list component** to be dependency injected via the constructor.

   1. import the service
   2. Add it as an argument to the constructor

   ```typescript
   constructor(private albumService: AlbumService) { };
   ```

5. Add these functions to call the service's getAlbums() and set it to your albumsArray property

   ```typescript
    getAlbums() {
      this.albumsArray = this.albumService.getAlbums();
    }

    ngOnInit() {
      this.getAlbums();
    }
   ```

6. Check that your code works, and mark your work as complete.
