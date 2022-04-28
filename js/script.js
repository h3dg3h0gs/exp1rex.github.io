document.addEventListener('DOMContentLoaded', () => {

	const header = document.querySelector('.header');
	header.classList.add('active');

	const main__sidebar = document.querySelector('.main__sidebar');
	main__sidebar.classList.add('active');

	const content = document.querySelector('.content');
	content.classList.add('active');

	const player = document.querySelector('.player');
	player.classList.add('active');

});

music = document.querySelector('.music');
nowplay = document.querySelector('.nowplay');

play__btn = document.querySelectorAll('.player__controls__img');
home = document.querySelector('.home');
search = document.querySelector('.search');

document.querySelector('#home').onclick = homebtn;
document.querySelector('#search').onclick = searchbtn;

document.querySelector('#play').onclick = play;
document.querySelector('#playBlusk').onclick = playBlusk;
document.querySelector('#playNana').onclick = playNana;
document.querySelector('#playDead').onclick = playDead;
document.querySelector('#playEuphoria').onclick = playEuphoria;
document.querySelector('#playEternal').onclick = playEternal;
document.querySelector('#playHappiness').onclick = playHappiness;

//Главная
function homebtn() {
	home.classList.add('show');
	search.classList.remove('show');
}

//Поиск
function searchbtn() {
	home.classList.remove('show');
	search.classList.add('show');
}

play0rPause = 0;
music.src = 'music/blusk.mp3';
music.volume = .5;

nowplay__img = document.querySelector('.nowplay__img');
nowplay__desc__title = document.querySelector('.nowplay__desc__title');
nowplay__desc__autor = document.querySelector('.nowplay__desc__autor');

function play() {
	play0rPause++;
	
	if (play0rPause == 1) {
		play__btn[1].src = 'img/player/pause.png';
		play__btn[1].style.animation = 'play .2s ease';
		nowplay.style.animation = 'nowplay 3s linear';
		music.play();
	}
	else if (play0rPause > 1) {
		play__btn[1].src = 'img/player/play.png';
		play__btn[1].style.animation = 'pause .2s ease';
		nowplay.style.animation = 'none';
		play0rPause = 0;
		music.pause();
	}
}

function playBlusk() {
	nowplay__img.src = 'img/cover/01.png'
	nowplay__desc__title.innerText = 'Blusk';
	nowplay__desc__autor.innerText = 'Geoxor';
	music.src = 'music/blusk.mp3';
	play();
}

function playNana() {
	nowplay__img.src = 'img/cover/02.png'
	nowplay__desc__title.innerText = 'Nana';
	nowplay__desc__autor.innerText = 'Geoxor';
	music.src = 'music/nana.mp3';
	play();
}

function playDead() {
	nowplay__img.src = 'img/cover/03.png'
	nowplay__desc__title.innerText = 'Dead';
	nowplay__desc__autor.innerText = 'Geoxor & SVRGE';
	music.src = 'music/dead.mp3';
	play();
}

function playEuphoria() {
	nowplay__img.src = 'img/cover/04.png'
	nowplay__desc__title.innerText = 'Euphoria';
	nowplay__desc__autor.innerText = 'Geoxor';
	music.src = 'music/euphoria.mp3';
	play();
}

function playEternal() {
	nowplay__img.src = 'img/cover/06.png'
	nowplay__desc__title.innerText = 'Eternal';
	nowplay__desc__autor.innerText = 'SVRGE';
	music.src = 'music/eternal.mp3';
	play();
}

function playHappiness() {
	nowplay__img.src = 'img/cover/05.png'
	nowplay__desc__title.innerText = 'Happiness';
	nowplay__desc__autor.innerText = 'expirex';
	music.src = 'music/happiness.mp3';
	play();
}