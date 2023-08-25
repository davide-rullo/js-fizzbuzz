
const div = document.querySelector("div.container");




for (let i = 1; i <= 100; i++) {

    const blocco = document.createElement("div");
    blocco.className = "square";

    const bloccoF = document.createElement("div");
    bloccoF.className = "squareF";

    const bloccoB = document.createElement("div");
    bloccoB.className = "squareB";

    const bloccoFB = document.createElement("div");
    bloccoFB.className = "squareFB";


   
  
    if (i % 3 === 0 && i % 5 === 0){
        div.append(bloccoFB);
        console.log("fizzbuzz");
        bloccoFB.append("fizzbuzz");
      
    } else if (i % 3 === 0) {
        div.append(bloccoF);
        console.log("fizz");
        bloccoF.append("fizz");

    } else if (i % 5 === 0) {
        div.append(bloccoB);
        console.log("buzz");
        bloccoB.append("buzz");

    } else {
        div.append(blocco);
        console.log(i);
        blocco.append(i);
    }

    
}


