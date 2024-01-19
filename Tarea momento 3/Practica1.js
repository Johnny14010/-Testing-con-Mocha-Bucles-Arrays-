function describe(description, func) {
    console.log(description);
    func();
  }
  
  function it(msg, func) {
    try {
      func();
      console.log(msg + ": Test Passed");
    } catch (e) {
      console.log(msg + ": Test Failed");
    }
  }
  
  
  function assertEqual(a, b) {
    if (a !== b) {
      throw new Error();
    }
  }

  

function pow(x,n){
    return Math.pow(x, n);
     }

  describe("pow", function() {
    it("raises to the nth power", function() {
      assertEqual(pow(2, 3), 8);
    });
  });
