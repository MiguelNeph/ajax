document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const respository = document.querySelector('#respository');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    const urlAPI = 'https://api.github.com/users/MiguelNeph'


    fetch(urlAPI)
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function (json) {
            nameElement.innerText = json.name;
            userName.innerText = json.login;
            followers.innerText = json.followers;
            following.innerText = json.following;
            respository.innerText = json.public_repos;
            link.href = json.html_url;
        })
})