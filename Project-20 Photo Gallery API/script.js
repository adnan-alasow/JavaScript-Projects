"use strict";

let input = document.querySelector("input")
let btn = document.querySelector("button")
let gallery = document.querySelector(".gallery")



async function search(){
try{ let inputValue = input.value
  let randomNumber = Math.floor(Math.random() * 500);

  let API_key = "KjaZWnu9_7HmiXdxKEefzKwshJpcP1LcI72BY4fW4Ts";
  let API_URL =`https://api.unsplash.co0m/photos?per_page=${inputValue}&page=${randomNumber}&client_id=${API_key}`

  let response = await fetch(API_URL)
  let photos = await response.json()

  let imageContainer = photos.map((element) =>
       `<img src=${element.urls.small}/>`
  ).join("")


  gallery.innerHTML = imageContainer
  gallery.classList.remove("hide")

}
catch(error){
  gallery.innerHTML = "<p style= 'color: red'>Error!</p>"
  gallery.classList.remove("hide")
}
}


btn.addEventListener("click", search)
