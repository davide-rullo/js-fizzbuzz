
const div = document.querySelector("div.container");



for (let i = 1; i <= 100; i++) {
  
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
        const blocco = document.createElement("div");
        blocco.className = "square";
        blocco.append("fizzbuzz");

    } else if (i % 3 === 0) {
        console.log("fizz");
        div.append("fizz");

    } else if (i % 5 === 0) {
        console.log("buzz");
        div.append("buzz");

    } else {
        console.log(i);
        div.append(i);
    }

    
}


