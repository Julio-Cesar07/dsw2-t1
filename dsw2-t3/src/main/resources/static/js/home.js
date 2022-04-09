var git_click = document.querySelector('#git_click')

git_click.addEventListener('click', spa);

function spa(){
    let input_git = document.querySelector('#input_git')
    let git = input_git.value
    const url = `https://api.github.com/users/${git}`
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)

    xhr.onreadystatechange = function(){
        let resp = JSON.parse(xhr.responseText)
        let img = document.querySelector('#img_git')

        img.src = resp.avatar_url
    }

    xhr.send();
}