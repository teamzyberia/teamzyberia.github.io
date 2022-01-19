// main.js

// Initial.
function initial() {
    console.log("Welcome to Team Zyberia.");
}

function invite(email){
    console.log(email);
    const token = "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";
    const org = "teamzyberia";
    axios.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";
    axios.defaults.headers.common["Authorization"] = `token ${token}`;
    axios.post(`https://api.github.com/orgs/${org}/invitations`, { email: email });
}
