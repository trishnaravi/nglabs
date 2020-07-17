# Extra Practice: ES6 JavaScript

### Overview

* Practice working with JavaScript

### JavaScript objects
1. Create an object literal to represent one band:
    ```javascript
    let band1 = {
            name : "Pink Floyd",
            city : "London" ,
            country : "England",
            yearFormed : 1965,
            genres : ["Progressive rock", "psychedelic rock", "art rock"]
        }
    band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");
    ```

2. Create another object for a band of your choice. Use the new Object() notation and then add the same properties using the dot notation.

3. Create a bands array and add the two objects.

4. Create a function to loop over this array and console.log the details. 

### Get High/Low temps for the week

1. create an array of objects with the high/low temps for the week.

    An example to get started { day: "Monday", high: 80 }   

    With the array, can you loop through and find the high and low temp of the week?


### ES6 For Each
1. READ: The `Array.prototype.forEach` function takes an anonymous function which iterates over the array allowing you to do something with each element. It is one of the examples of using the `Array.prototype` functions to not need to write a for loop on your own, just to iterate over every element. Most of the `Array.prototype` functions process the array using the callback function that you supply.  

    Now with ES6 notation, we can use an arrow function for specifying the callback function. View the following EXAMPLE. Notice how a local variable is set for `sport`, to represent the single sport being processed during that iteration of the loop - processing each element of the `sportsArray.` 

    ``` javascript
     sportsArray.forEach(sport => {
        console.log(`  ${sport.name} is played in ${sport.duration} `);
    });
    ```

2. Use the `forEach` method with your own hobbies array. Create a `logHobbies` function with no inputs which uses the `forEach` method for looping, and prints a message using ES6 backticks with string template references for the properties. 

   Example output:

   volleyball: A hobby for 25 years

3. After the function definition, add a call to the `logHobbies` function.

4. Confirm the script works - that you see the output in the console. ES6 is supported in Node.

### AJAX Practice load JSON data from JSON server
1. Look at the demos using JSON-server. Copy the package.json from the demos and update your own db.json file to contain family, friends, hobbies. Use this to load data into your AboutMe app.

   * Google npm json-server or refer to the Demos in Ch01 
   * look at the docs to understand how to format and add id values



### Manipulate CSS with JavaScript
1. JavaScript can be used to manipulate CSS values via the style property.  
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

Create a button that when clicked updates some of the CSS values we have used so far. In the function handler for the button click, select an element with document.getElementById() and use element.style.XXX = 'value'. 