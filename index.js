function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  globe = json ;
  var link = json.html_url ;
  var owner_login = json.owner.login ;
  var responseText = "<h3>Forked Successfully!</h3><a href=" + `"${link}" ` + ">Go To Form</a>"
  document.querySelector('#results').innerHTML = responseText ;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
    .then(json => showResults(json) );
}

function getToken() {
  const token = '2ef56a951a3de684ed5934d948d1500aa6fec490';

  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
  return ''
}
