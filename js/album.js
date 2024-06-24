let currentIndex = 0;
let cd = document.getElementById('cd');
let albumCovers = cd ? cd.getElementsByTagName('img') : [];
for (let i = 1; i < albumCovers.length; i++) {
  albumCovers[i].style.display = 'none';
}

const albumNames = ["a Gift and a Curse", "JESUS IS KING", "Jupiter's Diary: 7 Day Theory", "One of Wun", "Never Too Much", "Tamia", "Comin' From Where I'm From", "Goodbye and Good Riddance", "2014 Forest Hills Drive", "It's Us Vol. 1"]; // Add more album names as needed

function switchImage() {
  albumCovers[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % albumCovers.length;
  albumCovers[currentIndex].style.display = 'block';
  document.getElementById('albumName').textContent = albumNames[currentIndex]; // Update album name
}

setInterval(switchImage, 3500); // Switch image every 3.5 seconds
