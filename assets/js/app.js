const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const followersContainer = document.querySelector(".main__profile-followers");
const followingContainer = document.querySelector(".main__profile-following");
const companyContainer = document.querySelector(".main__profile-company");
const bioContainer =  document.querySelector(".main__profile-bio")


const client_id = "Iv1.445831d6f27f102c";
const client_secret = "621422f4c8edd9df1f99e683b6aba4003434818c";


const fetchUsers = async(user) => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&clent_secret=${client_secret}`);

  const data = await api_call.json();
  return { data }
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        

        nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;

        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;
        
        reposContainer.innerHTML = `Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;

        urlContainer.innerHTML = `Profile URL: <span class="main__profile-value">${res.data.html_url}</span>`;

        followersContainer.innerHTML = `Followers: <span class="main__profile-value">${res.data.followers}</span>`;

        followingContainer.innerHTML = `Following: <span class="main__profile-value">${res.data.following}</span>`;

        companyContainer.innerHTML =  `Company: <span class="main__profile-value">${res.data.company}</span>`;

        bioContainer.innerHTML = `Bio: <span class="main__profile-value">${res.data.bio}</span>`;

    })
};

searchButton.addEventListener("click", () => {
    showData();
})