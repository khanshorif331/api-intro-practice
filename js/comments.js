function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>getComments(data))
}
loadComments()

function getComments(comments){
    const section = document.getElementById('comment-container')
    for(const comment of comments){
        const div = document.createElement('div')
        div.classList.add('comments')
        div.innerHTML=`
        <h1>${comment.name}</h1>
        <h3>${comment.email}</h3>
        <p>${comment.body}</p>
        `
        section.appendChild(div)
    }
}