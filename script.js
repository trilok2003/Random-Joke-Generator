const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url = "https://api.chucknorris.io/jokes/random";

let getJoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        // console.log(item.value);
        jokeContainer.textContent = `${item.value}`;
    });
}

btn.addEventListener("click",getJoke);
getJoke();