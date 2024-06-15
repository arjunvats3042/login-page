let form=document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();

    let inp1 = document.querySelector("#inp1");
    let inp2 = document.querySelector("#inp2");
    let btn = document.querySelector("button");

    console.log(inp1.value);
    console.log(inp2.value);
    // console.dir(inp.value);

}); 