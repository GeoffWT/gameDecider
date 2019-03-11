const GAMES = ['apex', 'pubg', 'dota', 'lol'];

const gameRoller = (games) => {
	const i = Math.floor(Math.random() * games.length);
  return games[i];
};

const button = document.getElementById('button');

button.addEventListener('click', () => {
	const el = document.getElementById('gamename');
  el.innerHTML = gameRoller(GAMES);
});
