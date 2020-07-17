# Chapter 6: Pipes

## Objectives

- Apply a 10% discount to albums that are on sale and format them nicely for the screen.
- Previously, the decimal places after simple math did not look great.
- Use a Pipe to format the price using the decimal pipe and currency pipe

## Steps

1. Continue working in your angular100-labs project in your branch. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. Ensure some of the data has currency of USD and if need be, set something to have currency of GBP

1. In **album-card.component.ts** add a property called **newPrice** to be type number.

1. In **ngOnInit()** check if the album is on sale and if it is - set newPrice to be 10% less.

   ```typescript
   if (this.album.onSale) {
   // Apply 10% discount
   this.newPrice = this.album.price - (this.album.price * .10);
   }
   ```

1. Update the album card component template to show the price property with a line-through and use the new price if the album is on sale.

    HINT: Could use a conditional span, which shows IF the item is on sale.  It can have a style of line through.  Use the ternary operator to either display the new price or the sale price.

    <h6>
     <span *ngIf="album.onSale" style="text-decoration:line-through;">
       {{album.price }}
     </span>
     {{ (album.onSale ? newPrice : album.price) }}
   </h6>

2. Open this in the browser, how do the prices of the albums on sale look? 

3. Lets fix the decimals and add the use of currency. Update the display of the price and onSale properties to use pipes for number and currency:

   ```html
   <h6>
     <span *ngIf="album.onSale" style="text-decoration:line-through;">
       {{album.price | number:'1.1-2' | currency:album.currency}}
     </span>
     {{ (album.onSale ? newPrice : album.price) | number:'1.2-2' |
     currency:album.currency }}
   </h6>
   ```

4. Once it is displaying correctly mark your work as complete.
