
const div = document.querySelector("div.container");
const blocco = document.createElement("div");
blocco.className = "square";



for (let i = 1; i <= 100; i++) {
  
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
        div.append("fizzbuzz");
        div.append(blocco);

    } else if (i % 3 === 0) {
        console.log("fizz");
        div.append("fizz");
        div.append(blocco);

    } else if (i % 5 === 0) {
        console.log("buzz");
        div.append("buzz");
        div.append(blocco);

    } else {
        console.log(i);
        div.append(i);
        div.append(blocco);
    }

    
}


