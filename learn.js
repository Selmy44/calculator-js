        
        function myFunction() {
            document.getElementById("demo").innerHTML="Are coming";
            
        }

        function calculations() {
        
            const a = 5;  // use const if the value or type(Arrays & objects) should not be changed 
            let b = 5;    // use let if you can't use const, Variables declared with let have Block Scope, Variables declared with let must be Declared before use, Variables declared with let cannot be Redeclared in the same scope
            var c = a + b;  // use var if you must support old browsers
            const answer= "The answer is true"
            let palma3;
            document.getElementById("palma1").innerHTML= "The addition of 5+5 is :" +c;
            document.getElementById("palma2").innerHTML= answer;
            document.getElementById("palma4").innerHTML= palma3;
        }
        //The Functions
        function good(a){
            return (3) * a;
        }
        let x = good(3);
        document.getElementById("well").innerHTML= x;
        
        function toCelsius(f) {
            return (5/9) * (f-32);
          }
     
          let value = toCelsius(77);
          document.getElementById("well1").innerHTML = value;
        //The End of Functions

        // Create an Array:
        const cars = ["Saab", "Volvo", "BMW"];

        // Change an element:
        cars[0] = "Toyota";

        // Add an element:
        cars.push("Audi");

        // Display the Array:
        document.getElementById("demo1").innerHTML = cars;

        // Create an object:
        const car = {type:"Lamborghini", model:"Aventador", color:"white"};

        // Change a property:
        car.color = "red";

        // Add a property:
        car.owner = "Nshuti";

        // Display the property:
        document.getElementById("demo2").innerHTML = car["type"] + " " + car.model + " was sold to " + car.owner; 

        let text1 = "D";
        let text2 = "E";
        let result = text1 < text2;
        document.getElementById("demo3").innerHTML= "Is D greater than E?  " + result;

        let bob="hheelloo"
        document.getElementById("one").innerHTML=bob.length;
