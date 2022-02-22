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



function displayUsers(data){
    const ul = document.getElementById('users')
    for(const user of data){
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
    }
}


