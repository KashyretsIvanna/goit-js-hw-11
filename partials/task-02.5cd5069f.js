var ingredients=["Potatoes","Mushrooms","Garlic","Tomatos","Herbs","Condiments"];console.log(ingredients);var l=ingredients.map((function(n){return document.createElement("li")}));l.forEach((function(n){return n.classList.add("item")})),l.map((function(n){return n.innerText=ingredients[l.indexOf(n)]})),console.log(l),l.forEach((function(n){console.log(n),document.getElementById("ingredients").append(n)}));
//# sourceMappingURL=task-02.5cd5069f.js.map