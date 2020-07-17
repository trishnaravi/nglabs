# Chapter 4 Passing Data: How to add and reference a new component

## Objectives

- practice creating a hierarchy of components
- move HTML template from AppComponent

## Steps

1. Continue working in your angular100-labs project in your branch. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

2. Open the integrated terminal. Create an **AlbumListComponent** by using this Angular CLI command. Note that g is short for generate, c is for component.

   ```bat
   ng g c albums/album-list
   ```

   Here we are specifying to create album-list inside of a directory called albums. Notice that a sub-directory is also created called album-list. If you wish to not have a subdirectory created you can use --flat.

3. Examine the updates made to the **app.module.ts** class decorator. You can see the changes easily if you click on the Y shaped Source Control icon in VS Code and click the changed **app.module.ts** file.

4. From the **app.component.html** file, move the entire element that starts with `<div class="container-fluid">` to the new **album-list.component.html** file.

5. The template is expecting there to be a property called **albumsArray** in the **album-list.component.ts** file. If you have extensions enabled, you should get an error about this in the template. 
  
    In the **album-list.component.ts** file, include the declaration of the property in the class, immediately after the export class line:

    ```typescript
    albumsArray: Album[];
    ```

6. To make this compile you must import Album into the AlbumListComponent file.

   ```javascript
   import { Album } from "../album.model";
   ```

    Remember that the convention is to have all @angular imports first, then a blank line, then all of the files we create and modify.

7. Move the **ngOnInit()** function out of the **app.component.ts** into the **album-list.component.ts** file. It must come after any/all property declarations.

8.  If you did not discard changes from the last exercise, remove any possibly remaining interval timer and setTimeout() functionality from the **album-list.component.ts** file's **ngOnInit()**

9.  Update the **app.component.ts** so that it only has this code:

    ```typescript
    import { Component } from "@angular/core";

    @Component({
      selector: "app-root",
      templateUrl: "./app.component.html",
      styleUrls: ["./app.component.css"]
    })
    export class AppComponent {
      title = "My Angular Albums";
    }
    ```

10. Update **app.component.html** so that it only has this code:

    ```html
    <div style="text-align:center;">
      <h1 class="jumbotron my-5 mx-5">Welcome to {{ title }}!</h1>
    </div>

    <app-album-list></app-album-list>

    <router-outlet></router-outlet>
    ```

    Note the reference to the selector of AlbumListComponent.

11. You should now see the albums in the browser, now being shown via the lst component.

12. Mark your work as complete. (Name tent card, electronic status, etc.)

## Bonus

If done before others, create a new from scratch application in your my-angular-course directory related to your own work, or an interest of yours. Ony use AppComponent to refer to a new component that you create. 