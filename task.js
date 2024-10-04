// 1.Answer

function add(a,b){
    sum=a+b;
    console.log(sum);
}
add(2,3)

// 2.Answer

 function substract(a, b){
     substract=a-b;
     console.log(substract);
 }
 substract(2,3)
 
 // 3.Answer
 
  function multiply(a, b){
      multiply=a*b;
      console.log(multiply)
  }
  multiply(2,3)
  
  // 4.Answer
  
   function divide(a, b) {
       if(b!==0){
           divide=a/b;
           console.log(divide)
       }
       else{
        console.log("Cannot divide by zero.")
       }
   }
   divide(2,3)
   
   // or
   
  function divide1(a,b){
      if(b==0){
          console.log("Cannot divide by zero.")
      }
      else{
          divide1=a/b;
          console.log(divide1)
      }
  }
  divide1(2,0)