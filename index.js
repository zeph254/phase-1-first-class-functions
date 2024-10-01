function receivesAFunction(callback) {
    callback()
}
function play(){
    console.log("hi");
    
}
receivesAFunction(play);
function returnsANamedFunction() {

    function namedFunction() {
      console.log("hi");
    }
    
    return namedFunction;
  }
  

  const myNamedFunction = returnsANamedFunction();
  myNamedFunction(); 

  function returnsAnAnonymousFunction() {
    
    return function() {
      console.log("Play");
    };
  }
  
  
  const myAnonymousFunction = returnsAnAnonymousFunction();
  myAnonymousFunction(); 
  