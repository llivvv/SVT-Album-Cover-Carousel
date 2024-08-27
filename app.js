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

const teenAge = {
    name: "TEEN, AGE",
    albumSrc: "images/TeenAge.png",
    tracks: ["Intro. New World", "CHANGE UP", "Without You", "Clap", "BRING IT", "Lilili Yabbay", "TRAUMA", "Pinwheel", "Flower"]
}

const ymmD = {
    name: "YOU MAKE MY DAY",
    albumSrc: "images/YouMakeMyDay.jpg",
    tracks: ["Oh My!", "Holiday", "Come to me", "What's Good", "MOONWALKER", "Our dawn is hotter than day"]
}

// list of albums to put in the carousel
const albums = [svtCarat, attacca, faceTheSun, svtHeaven, teenAge, ymmD];

// document elements 
const root = document.querySelector(':root'); 
const nxtBtn = document.querySelector('.nxt-btn');
const prevBtn = document.querySelector('.prev-btn');
const currAlbum = document.querySelector('.album');
const currName = document.querySelector('.album-name');
const coverBanner = document.querySelector('.cover-banner');
const namesBanner = document.querySelector('.names-banner');

const maxIndex = albums.length - 1; 
let currIndex = 0; 
prevBtn.disabled = true; 
nxtBtn.disabled = false; 

// to create a banner of the album covers
for (let i = 0; i < albums.length; i++) {

    // creates new img element for each album cover

    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'cover-div');
    let albumImg = document.createElement('img');
    albumImg.setAttribute('class', 'cover-img');
    albumImg.src = `../${albums[i].albumSrc}`;
    imgDiv.appendChild(albumImg);
    coverBanner.appendChild(imgDiv);
    
    // let albumImg = document.createElement('img');
    // albumImg.setAttribute('class', 'cover-img');
    // albumImg.src = `../${albums[i].albumSrc}`;
    // coverBanner.appendChild(albumImg);

    // let albumInfo = document.createElement('div');
    // albumInfo.setAttribute('class', 'album-info');
    // albumImg.appendChild(albumInfo);

    // creates new container for each album's name
    let albumNameDiv = document.createElement('div');
    albumNameDiv.setAttribute('class', 'name-container');
    let albumNameElement = document.createElement('h2');
    let albumName = document.createTextNode(`${albums[i].name}`);
    albumNameElement.appendChild(albumName);
    albumNameElement.setAttribute('class', 'name-txt');
    albumNameDiv.appendChild(albumNameElement);
    namesBanner.appendChild(albumNameDiv);
}

// disables the next button when the end of the album list is reached 
function disableNxt() {
    if (currIndex == albums.length - 1) {
        nxtBtn.disabled = true; 
    }
}  

// disabled the previous button when the first album of list is being viewed 
function disablePrev() {
    if (currIndex == 0) {
        prevBtn.disabled = true; 
    }
}

// displays the next album in the list of albums
function nxtAlbum() {
    currIndex++; 
    let currPcntStr = getComputedStyle(root).getPropertyValue('--translate-pcnt');
    let currPcnt = parseFloat(currPcntStr.substring(0, currPcntStr.length - 1));
    let changeToPcnt = (currPcnt - ((1/albums.length)*100)) + '%'; 
    root.style.setProperty('--translate-pcnt', `${changeToPcnt}`);

    prevBtn.disabled = false; 
    disableNxt();
}

// displays the previous album in the list of albums; 
function prevAlbum() {
    currIndex--; 
    let currPcntStr = getComputedStyle(root).getPropertyValue('--translate-pcnt');
    let currPcnt = parseFloat(currPcntStr.substring(0, currPcntStr.length - 1));
    let changeToPcnt = (currPcnt + ((1/albums.length)*100)) + '%'; 
    root.style.setProperty('--translate-pcnt', `${changeToPcnt}`);

    nxtBtn.disabled = false; 
    disablePrev();
}

// adds event listeners for clicking of the buttons 
nxtBtn.addEventListener('click', nxtAlbum);
prevBtn.addEventListener('click', prevAlbum);


