const categories = document.querySelectorAll(".item");

console.log("Number of categories:", categories.length);

// const titles = document.querySelectorAll(".item > h2");

// const elements = document.querySelectorAll(".item > ul > li");
// console.log(elements);




categories.forEach(category => {
    const title = category.querySelector("h2");
    
    console.log("Category:", title.textContent);

    const elements = category.querySelectorAll("ul > li");

    console.log("Number of elements:", elements.length);

});


