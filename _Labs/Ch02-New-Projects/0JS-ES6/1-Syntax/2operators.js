
            var x = 3;
            var x = 'abc';
            var x = true;
            
            
            const shortPi = 3.14;  //i wrote this on Pi day!
            let y = 10;
     

        let z = x + y;

        let myString = "abc";    

        console.group('Plus symbol...');
        console.log('x = ' + x);
        console.log('x+1 = ' + (++x) );
        console.log(z + myString);
        console.groupEnd();

        console.groupCollapsed('Using Boolean()...');
        //truthy or falsy
        console.log('abc');
        console.log("is this true? Boolean('hello')" + Boolean('hello'));
        console.log("is this true? Boolean('')" + Boolean(''));
        console.groupEnd();

        const lowerString = "abc";
        const upperString = "ABC";

        console.group('String comparison');
        console.log(lowerString == upperString);    
        console.groupEnd();
        
        let aa = 1;
        let bb = ++aa; // a = a+1  then it gets assigned
        console.log('aa',aa);  
        console.log('bb',bb);

        let cc = aa++; // assign it, then a = a+1
        console.log('cc',cc);
        console.log('aa',aa);  
    