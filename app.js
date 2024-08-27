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
const nxtBtn = document.querySelector('.next-arrow');
const prevBtn = document.querySelector('.back-arrow');
const currAlbum = document.querySelector('.album');
//const currCover = document.querySelector('.album-cover');
const currName = document.querySelector('.album-name');
const coverBanner = document.querySelector('.cover-banner');
const namesBanner = document.querySelector('.names-banner');

// to create a banner of the album covers
for (let i = 0; i < albums.length; i++) {
    let albumImg = document.createElement('img');
    albumImg.class = 'cover-img';
    albumImg.src = `../${albums[i].albumSrc}`;
    coverBanner.appendChild(albumImg);

    // let albumNameElement = document.createElement('h2');
    // let albumName = document.createTextNode(`${albums[i].name}`);
    // albumNameElement.appendChild(albumName);
    // albumNameElement.class = 'album-name';
    // namesBanner.appendChild(albumNameElement);

    let albumNameDiv = document.createElement('div');
    albumNameDiv.class = 'name-container';
    let albumNameElement = document.createElement('h2');
    let albumName = document.createTextNode(`${albums[i].name}`);
    albumNameElement.appendChild(albumName);
    albumNameElement.class = 'name-txt';
    albumNameDiv.appendChild(albumNameElement);
    namesBanner.appendChild(albumNameDiv);

    //console.log(albumNameDiv);

}

// function changeNxt() {
//     currCover.style.backgroundPosition = "100%";
//     if (currIndex < maxIndex) {
//         currIndex++; 
//     }
//     else {
//         currIndex = 0; 
//     }
//     //currCover.style.backgroundImage = `url(../${albums[currIndex].albumSrc})`;

//     currName.innerHTML = `${albums[currIndex].name}`

//     //console.log(currCover.style.backgroundImage);
//     console.log(albums);
// }

// nxtBtn.addEventListener('click', changeNxt);


