function fetchInfo(username){
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data =>{
        document.getElementById("overview").innerHTML = `
          <div>
            <img width="150px height="150px" src="${data.avatar_url}" url="${data.login}">
            <h2>${data.login}</h2>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Public Repositories: ${data.public_repos}</p>
        `
    })
}
document.getElementById("serach").addEventListener("submit",(e)=>{
    e.preventDefault();
    const username = document.getElementById("username").value;
    if(username){
        fetchInfo(username);
        fetchRepos(username,1);
    }
})
async function fetchRepos(username,page){
    let data = await fetch(`https://api.github.com/users/${username}/repos?per_page=5$page${page}`);
    let res = await data.json()
    let repoList = res.map((repo)=>`
      <div>
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p>Description: ${repo.description || "no des.. available"}</p>
      </div>    
    `).join("")
    console.log(repoList);
    document.getElementById("repos").innerHTML = repoList;
}

function setPagination(username,page,totalRepos){
    totalRepos = 6;
    let pagination = document.getElementById("pagination");
    let preBtn = document.createElement("button")
    preBtn.textContent = "Prev";
    preBtn.onclick = function(){
        if(page>1){
            fetchRepos(username,page-1);
        }
    }
    preBtn.innerHTML = `
      <button onclick="fetchRepos(${username},${page-1})" disabled = "${page===1 ? true: false}">Prev</button>
    `
    var btnCount = Math.ceil(totalRepos/5);
    pagination.appendChild(preBtn)

    let nextBtn = document.createElement("button")
    nextBtn.innerHTML = `
      <button onclick="fetchRepos(${username},${page+1})" disabled = "${page===btnCount ? true: false}">Prev</button>
    `
}