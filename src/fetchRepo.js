const container = document.querySelector('.app');

async function getRepos() {
  await fetch('https://api.github.com/users/jaywomack/repos')
    .then((res) => res.json())
    .then((data) => {
      // repo.textContent = data
      console.log(data);
      data.forEach((r) => {
        let repo = document.createElement('h2');
        repo.classList = 'text-2xl bg-gray-400 my-5 text-center text-white';
        repo.innerText = r.name;
        document.body.appendChild(repo);
      });
    });
}
getRepos();
