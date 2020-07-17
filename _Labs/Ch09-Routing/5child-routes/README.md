# Chapter 9 Routing: Child Routes 

## Objectives

- Add a Child Route to the detail page
- add another routing-outlet to child


## Steps

1. Continue working in your angular100-labs project in your branch. If you haven't completed previous exercises, you can copy the last solution's src directory over your src directory.

1. Create the beginnings of an album edit component using:

    ![Use control+shift+v to turn on preview mode](../screenshots/5-ng-g-c-album-edit.png)


2. Modify the **album-details.component.html** to include a button to lead to this new component.  Put this at the bottom of the file before the closing div tag. Note the use of router-outlet as well - this is where we want the child content to load.

    ![Use control+shift+v to turn on preview mode](../screenshots/5-details-html-add-edit-button.png)

3. Lets try to add the edit route in **AlbumsRoutingModule** by creating another entry that leads to the AlbumEditComponent like shown.

    ![Use control+shift+v to turn on preview mode](../screenshots/5-route-edit-without-children.png)

1. Test your changes in the browser. List all albums, click on one album's Show details page, then click the edit button at the bottom.

2. You will see the It works! message but not under the current album where we want it. 

    ![Use control+shift+v to turn on preview mode](../screenshots/5-not-in-child-router-outlet.png)


1. We need to use the children property so that we can target the router outlet.

   Modify your AlbumsRoutingModule by changing the id route to have an additional property have children as shown:

    ![Use control+shift+v to turn on preview mode](../screenshots/5-child-route-with-children.png)


1. Now test your app to see that it shows the it works message under the album details, where the second router-outlet was placed.

1.  Mark your work as complete.

## Bonus 

1. Continue work from previous bonuses - and create edit components and buttons for use in your application.