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
progress = document.querySelector('#progress');

music.ontimeupdate = progressUpdate;
progress.onclick = progressSet;

play__btn = document.querySelectorAll('.player__controls__img');
home = document.querySelector('.home');
search = document.querySelector('.search');
liked = document.querySelector('.liked');

document.querySelector('#home').onclick = homebtn;
document.querySelector('#search').onclick = searchbtn;
document.querySelector('#liked').onclick = likedbtn;

document.querySelector('#prev').onclick = prev;
document.querySelector('#play').onclick = play;
document.querySelector('#next').onclick = next;

document.querySelectorAll('#playBlusk')[0].onclick = playBlusk;
document.querySelectorAll('#playBlusk')[1].onclick = playBlusk;
document.querySelectorAll('#playNana')[0].onclick = playNana;
document.querySelectorAll('#playNana')[1].onclick = playNana;
document.querySelector('#playDead').onclick = playDead;
document.querySelector('#playEuphoria').onclick = playEuphoria;
document.querySelectorAll('#playEternal')[0].onclick = playEternal;
document.querySelectorAll('#playEternal')[1].onclick = playEternal;
document.querySelectorAll('#playHappiness')[0].onclick = playHappiness;
document.querySelectorAll('#playHappiness')[1].onclick = playHappiness;
document.querySelector('#playDemisaur').onclick = playDemisaur;
document.querySelector('#playColor').onclick = playColor;
document.querySelector('#playHappyPlace').onclick = playHappyPlace;
//document.querySelector('#playSharkAttack').onclick = playSharkAttack;
document.querySelectorAll('#playDYSTOPIA99')[0].onclick = playDYSTOPIA99;
document.querySelectorAll('#playDYSTOPIA99')[1].onclick = playDYSTOPIA99;
document.querySelectorAll('#playNeonEyes')[0].onclick = playNeonEyes;
document.querySelectorAll('#playNeonEyes')[1].onclick = playNeonEyes;
document.querySelectorAll('#playJourneytoWindrise')[0].onclick = playJourneytoWindrise;
document.querySelectorAll('#playJourneytoWindrise')[1].onclick = playJourneytoWindrise;

let currentSongCount = 0;


//Главная
function homebtn() {
	home.classList.add('show');
	search.classList.remove('show');
	liked.classList.remove('show');
}

//Поиск
function searchbtn() {
	home.classList.remove('show');
	search.classList.add('show');
	liked.classList.remove('show');
}

//Понравившееся
function likedbtn() {
	home.classList.remove('show');
	search.classList.remove('show');
	liked.classList.add('show');
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
	currentSongCount = 0;
	play0rPause = 0;
	play();
}

function playNana() {
	nowplay__img.src = 'img/cover/02.png'
	nowplay__desc__title.innerText = 'Nana';
	nowplay__desc__autor.innerText = 'Geoxor';
	music.src = 'music/nana.mp3';
	currentSongCount = 1;
	play0rPause = 0;
	play();
}

function playDead() {
	nowplay__img.src = 'img/cover/03.png'
	nowplay__desc__title.innerText = 'Dead';
	nowplay__desc__autor.innerText = 'Geoxor & SVRGE';
	music.src = 'music/dead.mp3';
	currentSongCount = 2;
	play0rPause = 0;
	play();
}

function playEuphoria() {
	nowplay__img.src = 'img/cover/04.png'
	nowplay__desc__title.innerText = 'Euphoria';
	nowplay__desc__autor.innerText = 'Geoxor';
	music.src = 'music/euphoria.mp3';
	currentSongCount = 3;
	play0rPause = 0;
	play();
}

function playEternal() {
	nowplay__img.src = 'img/cover/06.png'
	nowplay__desc__title.innerText = 'Eternal';
	nowplay__desc__autor.innerText = 'SVRGE';
	music.src = 'music/eternal.mp3';
	currentSongCount = 4;
	play0rPause = 0;
	play();
}

function playDemisaur() {
	nowplay__img.src = 'img/cover/07.png'
	nowplay__desc__title.innerText = 'Demisaur';
	nowplay__desc__autor.innerText = 'Excision & Kai Wachi';
	music.src = 'music/demisaur.mp3';
	currentSongCount = 5;
	play0rPause = 0;
	play();
}


function playHappiness() {
	nowplay__img.src = 'img/cover/05.png'
	nowplay__desc__title.innerText = 'Happiness';
	nowplay__desc__autor.innerText = 'expirex';
	music.src = 'music/happiness.mp3';
	currentSongCount = 6;
	play0rPause = 0;
	play();
}


function playColor() {
	nowplay__img.src = 'img/cover/08.png';
	nowplay__desc__title.innerText = 'Color';
	nowplay__desc__autor.innerText = 'Amidst';
	music.src = 'music/color.mp3';
	currentSongCount = 7;
	play0rPause = 0;
	play();
}

function playHappyPlace() {
	nowplay__img.src = 'img/cover/09.png';
	nowplay__desc__title.innerText = 'Happy Place';
	nowplay__desc__autor.innerText = 'Slydit';
	music.src = 'music/happyplace.mp3';
	currentSongCount = 8;
	play0rPause = 0;
	play();
}

function playSharkAttack() {
	nowplay__img.src = 'img/cover/10.png';
	nowplay__desc__title.innerText = 'Shark Attack';
	nowplay__desc__autor.innerText = 'Jauz, Megalodon';
	music.src = 'music/sharkattack.mp3';
	currentSongCount = 9;
	play0rPause = 0;
	play();
}

function playDYSTOPIA99() {
	nowplay__img.src = 'img/cover/11.png';
	nowplay__desc__title.innerText = 'DYSTOPIA 99';
	nowplay__desc__autor.innerText = 'AIKA x I-YU';
	music.src = 'music/dystopia99.mp3';
	currentSongCount = 10;
	play0rPause = 0;
	play();
}

function playNeonEyes() {
	nowplay__img.src = 'img/cover/12.png';
	nowplay__desc__title.innerText = 'Neon Eyes';
	nowplay__desc__autor.innerText = 'Geoxor';
	music.src = 'music/neoneyes.mp3';
	currentSongCount = 11;
	play0rPause = 0;
	play();
}

function playJourneytoWindrise() {
	nowplay__img.src = 'img/cover/13.png';
	nowplay__desc__title.innerText = 'Journey to Windrise (feat. aadajuulia)';
	nowplay__desc__autor.innerText = 'DraGonis';
	music.src = 'music/journeytowindrise.mp3';
	currentSongCount = 12;
	play0rPause = 0;
	play();
}

/*
function prev() {
	currentSongCount--;
}

function next() {
	currentSongCount++;
}
*/






function progressUpdate() {
	let d = music.duration;
	let c = music.currentTime;
	if (d != 0 && c != 0) {
		progress.value = (100 * c) / d;
	}

	//console.log(d);
	//console.log(c);
	//console.log(currentSongCount);

	if (c >= d) {
		currentSongCount++;
		if (currentSongCount == 0) {
			play();
			playBlusk();
		}
		else if (currentSongCount == 1) {
			play();
			playNana();
		}
		else if (currentSongCount == 2) {
			play();
			playDead();
		}
		else if (currentSongCount == 3) {
			play();
			playEuphoria();
		}
		else if (currentSongCount == 4) {
			play();
			playEternal();
		}
		else if (currentSongCount == 5) {
			play();
			playDemisaur();
		}
		else if (currentSongCount == 6) {
			play();
			playHappiness();
		}
		else if (currentSongCount == 7) {
			play();
			playColor();
		}
		else if (currentSongCount == 8) {
			play();
			playHappyPlace();
		}
		else if (currentSongCount == 9) {
			play();
			playSharkAttack();
		}
		else if (currentSongCount == 10) {
			play();
			playDYSTOPIA99();
		}
		else if (currentSongCount == 11) {
			play();
			playNeonEyes();
		}
		else if (currentSongCount == 12) {
			play();
			playJourneytoWindrise();
		}
		else if (currentSongCount > 12) {
			currentSongCount = 0;
			play();
			playBlusk();
		}
	}
}

function progressSet() {
	let w = this.offsetWidth;
	let o = event.offsetX;
	this.value = 100 * o / w;
	music.currentTime = music.duration * (o / w);
}
