// document elements 
const root = document.querySelector(':root'); 
const nxtBtn = document.querySelector('.nxt-btn');
const prevBtn = document.querySelector('.prev-btn');
const currAlbum = document.querySelector('.album');
const currName = document.querySelector('.album-name');
const coverBanner = document.querySelector('.cover-banner');
const namesBanner = document.querySelector('.names-banner');
const coverDiv = document.querySelector('.cover-div');
const trackDiv = document.querySelectorAll('.track-div');
const blurredImg = document.querySelector('.blurred-image');
const imgFilter = document.querySelector('.img-filter');

const maxIndex = albums.length - 1; 
let currIndex = 0; 
prevBtn.disabled = true; 
nxtBtn.disabled = false; 

// to add tracklist 
function trackList(i, imgDiv) {
    let currAlbum = albums[i];
    let ulDiv = document.createElement('div');
    ulDiv.setAttribute('class', 'track-div');
    let header = document.createElement('h3');
    header.innerHTML = "Tracks:";
    header.setAttribute('class', 'track-header');
    ulDiv.appendChild(header);
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'track-list');
    for (let j = 0; j < currAlbum.tracks.length - 1; j++) {
        let li = document.createElement('li');
        li.setAttribute('class', 'track-txt');
        li.innerText = currAlbum.tracks[j];
        ul.appendChild(li);
    }
    ulDiv.appendChild(ul);
    imgDiv.appendChild(ulDiv);
}

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

    trackList(i, imgDiv);
   
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

// darkens filter over background image when transitioning to a new background image
// function changeFilterColor() {
//     imgFilter.style.setProperty('background', 'rgb(124, 124, 124)');

//     setTimeout(() => {
//         imgFilter.style.setProperty('background', 'white')
//     }, 100)
// }

// changes the background image to the current album cover
function changeBgImg() {
    blurredImg.style.backgroundImage = `url(../${albums[currIndex].albumSrc})`;
}

// displays the next album in the list of albums
function nxtAlbum() {
    currIndex++; 
    let currPcntStr = getComputedStyle(root).getPropertyValue('--translate-pcnt');
    let currPcnt = parseFloat(currPcntStr.substring(0, currPcntStr.length - 1));
    let changeToPcnt = (currPcnt - ((1/albums.length)*100)) + '%'; 
    root.style.setProperty('--translate-pcnt', `${changeToPcnt}`);

    changeBgImg();
    prevBtn.disabled = false; 
    disableNxt();
    //changeFilterColor();
}

// displays the previous album in the list of albums; 
function prevAlbum() {
    currIndex--; 
    let currPcntStr = getComputedStyle(root).getPropertyValue('--translate-pcnt');
    let currPcnt = parseFloat(currPcntStr.substring(0, currPcntStr.length - 1));
    let changeToPcnt = (currPcnt + ((1/albums.length)*100)) + '%'; 
    root.style.setProperty('--translate-pcnt', `${changeToPcnt}`);

    changeBgImg();
    nxtBtn.disabled = false; 
    disablePrev();
   // changeFilterColor();
}

// adds event listeners for clicking buttons 
nxtBtn.addEventListener('click', nxtAlbum);
prevBtn.addEventListener('click', prevAlbum);



