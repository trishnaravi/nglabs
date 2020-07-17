
            const starters = ['Soup', 'Fois Gras', 'Smoked Salmon', 'Oysters'] ;

            for ( const dish of starters ) {
                console.log( dish ) ;
            }

            function logArray( array ) {
                for ( const item of array ) {
                    console.log( item ) ;
                }
            }
            logArray( starters ) ;

            function processArray( array, action ) {
                for ( const item of array ) {
                    action( item ) ;
                }
            }
            processArray( starters, console.log ) ;

            processArray( starters, function( entry ) {
                console.log( entry ) ;
            }) ;

            processArray( starters, (entry) => { console.log( entry ) } ) ;
            processArray( starters, entry => { console.log( entry ) } ) ;
            processArray( starters, entry => console.log( entry ) ) ;

            function init() {
                const main = "Chicken Kiev" ;
                function showMain() {
                    console.log( main ) ;
                }
                showMain() ;
            }
            init() ;

            function makeMain() {
                const main = "Chicken Kiev" ;
                function showMain() {
                    console.log( main ) ;
                }
                return showMain ;
            }
            const myMain = makeMain() ;
            myMain() ;

            function makeMultiplier( x ) {
                return function( y ) {
                    return x * y ;
                }
            }
            const multiplyBy5 = makeMultiplier( 5 ) ;
            console.log( multiplyBy5( 6 ) ) ; // 30
            const multiplyBy7 = makeMultiplier( 7 ) ;
            console.log( multiplyBy7( 3 ) ) ; // 21
      