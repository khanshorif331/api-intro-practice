function loadData (){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=> displayUsers(data))
}

function loadPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>console.log(data))
}


// this function was called from loadUsers function()

function displayUsers(data){
    const ul = document.getElementById('users')
    for(const user of data){
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
    }
}



function imageLoad (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>displayImages(data))
}
imageLoad()


function displayImages(images){
    const imageContainer = document.getElementById('images-container')
    for(const image of images){
        // console.log(image.title)
        const div = document.createElement('div')
        div.innerHTML = `
        <h2>${image.title}</h2>
        <div><img src="${image.url}"></div>
        `
        imageContainer.appendChild(div)
    }
}