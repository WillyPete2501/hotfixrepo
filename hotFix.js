// I want good control flow and function encapsulation for this project. 
// I don't want just lines and lines of code written in the global scope or in one huge function.

// When we click on the button, make a get request that gets all users and creates divs for each user. 
    // Each user div should have the users name, username, and city they are located in.
    // when a div is clicked on, it should fetch all posts associated with the user id.

const container = document.querySelector('#container')

// example()

// function example() {
//     $.get([some url here], [some callback function that gets access to data here])
// } 
getAllUsers()
function getAllUsers() {
    let btn = document.getElementById('btn')
    btn.addEventListener('click', function() {
        document.getElementById('container').innerHTML = ""
        $.get('https://jsonplaceholder.typicode.com/users', function(data) {
            for (let i = 0; i < data.length; i++) {
            let current = data[i]
            allUsers(current)
            }     
        })
    })  
} 
function allUsers(current) {     
    let allUsersDiv = document.createElement('div')
    container.appendChild(allUsersDiv)
    allUsersDiv.textContent = 'Name: '+ current.name +' Username: '+ current.username +' City: '+ current.address.city
    allUsersDiv.setAttribute('id', current.id)
    allUsersDiv.className = 'AUDiv'
    allUsersDiv.addEventListener('click', function(e) {
        for (let i of document.querySelectorAll('.AUDiv'))i.style.display = 'none'
            btn.style.display = 'none'
            let backBtn = document.createElement('button')
            document.body.appendChild(backBtn)
            backBtn.textContent = 'Back to Users'
            backBtn.addEventListener('click', function() {
                document.getElementById('container').innerHTML = ""
                btn.style.display = 'block'
                backBtn.style.display = 'none'
                $.get('https://jsonplaceholder.typicode.com/users', function(data) {
                    for (let i = 0; i < data.length; i++) {
                        let current = data[i]
                        allUsers(current)
                    }     
                })
            })
    getPost(e)
    console.log('AU click functions check')
    })
console.log('AU functions check')
}
function getPost(e) {
    $.get(`https://jsonplaceholder.typicode.com/posts?userId=${e.target.id}`, function(postData) {
        for (let i = 0; i < postData.length; i++) {
            let postCurrent = postData[i]
            appendPost(postCurrent)
        }
    })
}
function appendPost(postCurrent) {
    let userPostDiv = document.createElement('div')
    userPostDiv.setAttribute('id', 'postDiv')
    container.appendChild(userPostDiv)
    userPostDiv.textContent = 'Post: ' + postCurrent.body
}

console.log('Working')