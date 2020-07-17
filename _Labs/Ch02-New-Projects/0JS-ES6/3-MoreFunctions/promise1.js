//example of creating a Promise
//in real-world normally receive a promise by calling a function
let myFirstPromise = new Promise((resolve, reject) => {
    //Inside this Promise, 
    // call the sych function
    // if it is successful, call resolve
    // if it is not, call the reject function
    let randomValue = Math.random();

    if (randomValue < 0.5) {
            // Using timeout to simulate
            setTimeout(function () {
                resolve("Success!"); //Yay! Everything went well!
            }, 250);
    }
    else {
        reject("didnt work");
    }
});

//in real-world will usually receive promiseby calling a function
myFirstPromise
.then((successMessage) => {
    //successMessage is whatever we passed in the resolve(...) function above.
    //It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
})
.then(() => {
    //this gets called if last step doesnt throw an error
    console.log("step 2");
})
.then((successMessage) => {
     //this gets called if last step doesnt throw an error
   console.log("step 3 ");
})
.catch((failMessage) =>{
        console.error(failMessage);
});

console.log('This prints first');
   