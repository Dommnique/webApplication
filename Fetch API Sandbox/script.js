document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUser').addEventListener('click', getUser);
document.getElementById('getPost').addEventListener('click', getPost);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText() {
    //fetch('sample.txt')
    //.then(function (res) {
    //    return res.text();
    //})
    //.then(function (data) {
    //    document.getElementById('display').innerHTML = data
    //})

    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
        document.getElementById('display').innerHTML = data
    })
   
}

function getUser() {
    fetch('sample.json')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2 class="mb-3">Users</h2>`
            data.forEach(function (user) {
                output += `
                <ul class="list-group mb-3">
                  <li class="list-group-item">${user.id}</li>
                  <li class="list-group-item">${user.name}</li>
                  <li class="list-group-item">${user.email}</li>
                </ul>
                `
            })
            document.getElementById('display').innerHTML = output;
    })
}

function getPost() { 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2 class="mb-3">Posts</h2>`
            data.forEach(function (post) {
                output += `
                  <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                  </div>
                `
            })
            document.getElementById('display').innerHTML = output
    })


}


function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            header: {
                'accept': 'application/json, text/plain, */*',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        }
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
}