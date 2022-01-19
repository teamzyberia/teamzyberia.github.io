// main.js

// Initial.
function initial() {
    console.log("Welcome to Team Zyberia.");
}

function invite(email){
    console.log(email);
    const token = window.atob('Z2hwX1g3QW9ibVc4cko5aXVaZmJ1TXp3S2dLaGZUT3BUUTBSOVE1eA==');
    const org = "teamzyberia";
    axios.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";
    axios.defaults.headers.common["Authorization"] = `token ${token}`;
    axios
      .post(`https://api.github.com/orgs/${org}/invitations`, { email: email })
      .then((response) =>
        alert(
          response.status === 201
            ? "Success"
            : "Failed"
        )
      )
      .catch((error) => console.log(error));
}
