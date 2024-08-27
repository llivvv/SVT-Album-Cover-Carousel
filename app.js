// import albums from 'albumdetails.js';

// album details: name, album cover image source, and tracks for each album
const svtCarat = {
    name: "17 CARAT",
    albumSrc: "images/AdoreU.jpg",
    tracks: ["Shining Diamond", "Adore U", "Ah Yeah", "Jam Jam", "20"]
}

const attacca = {
    name: "Attacca",
    albumSrc: "images/Attacca.png",
    tracks: ["To you", "Rock with you", "Crush", "Imperfect love", "I can't run away", "2 MINUS 1 (Bonus Track)"]
}

const faceTheSun = {
    name: "Face the Sun",
    albumSrc: "images/FaceTheSun.png",
    tracks: ["Darl+ing", "HOT", "DON QUIXOTE", "March", "Domino", "Shadow", "'bout you", "IF you leave me", "Ash"]
} 

const svtHeaven = {
    name: "SEVENTEENTH HEAVEN",
    albumSrc: "images/GodOfMusic.jpg",
    tracks: ["SOS", "God of Music", "Diamond Days", "Back 2 Back", "Monster", "Yawn", "Headliner"]
}

const albums = [svtCarat, attacca, faceTheSun, svtHeaven];

let currIndex = 0; 
const maxIndex = albums.length - 1; 
const root = document.querySelector(':root'); 
const nxtBtn = document.querySelector('.next-arrow');
const prevBtn = document.querySelector('.back-arrow');
const currAlbum = document.querySelector('.album');
const currName = document.querySelector('.album-name');
const coverBanner = document.querySelector('.cover-banner');
const namesBanner = document.querySelector('.names-banner');

// to create a banner of the album covers
for (let i = 0; i < albums.length; i++) {
    let albumImg = document.createElement('img');
    albumImg.setAttribute('class', 'cover-img');
    albumImg.src = `../${albums[i].albumSrc}`;
    coverBanner.appendChild(albumImg);

    let albumNameDiv = document.createElement('div');
    albumNameDiv.setAttribute('class', 'name-container');
    let albumNameElement = document.createElement('h2');
    let albumName = document.createTextNode(`${albums[i].name}`);
    albumNameElement.appendChild(albumName);
    albumNameElement.setAttribute('class', 'name-txt');
    albumNameDiv.appendChild(albumNameElement);
    namesBanner.appendChild(albumNameDiv);
}

function nxtAlbum() {
    currIndex++; 
    let currPcntStr = getComputedStyle(root).getPropertyValue('--translate-pcnt');
    let currPcnt = parseInt(currPcntStr.substring(0, currPcntStr.length - 1));
    let changeToPcnt = (currPcnt - ((1/albums.length)*100)) + '%'; 
    root.style.setProperty('--translate-pcnt', `${changeToPcnt}`);

    disableNxt();
}

nxtBtn.addEventListener('click', nxtAlbum);

function disableNxt() {
    if (currIndex == albums.length - 1) {
        nxtBtn.disabled = true; 
    }
} 

function disablePrev() {
    if (currIndex == 0) {
        prevBtn.disabled = true; 
    }
}

disablePrev();

