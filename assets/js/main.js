const songs = [
    {
      "id": 1,
      "name": "Shape of You",
      "artist": "Ed Sheeran",
      "thumbnail": "./assets/img/shape_of_you.jpg",
      "duration": "3:53"
    },
    {
      "id": 2,
      "name": "Blinding Lights",
      "artist": "The Weeknd",
      "thumbnail": "./assets/img/The_Weeknd_-_Blinding_Lights.png",
      "duration": "3:20"
    },
    {
      "id": 3,
      "name": "Bad Guy",
      "artist": "Billie Eilish",
      "thumbnail": "./assets/img/bad_guy.webp",
      "duration": "3:14"
    },
    {
      "id": 4,
      "name": "Rolling in the Deep",
      "artist": "Adele",
      "thumbnail": "./assets/img/rolling_in_the_deep.webp",
      "duration": "3:48"
    },
    {
      "id": 5,
      "name": "Levitating",
      "artist": "Dua Lipa",
      "thumbnail": "./assets/img/cover_art_for_levitating_by_dua_lipa_by_studiorinagraphic_dfu483b-pre.jpg",
      "duration": "3:23"
    },
    {
      "id": 5,
      "name": "Levitating",
      "artist": "Dua Lipa",
      "thumbnail": "./assets/img/cover_art_for_levitating_by_dua_lipa_by_studiorinagraphic_dfu483b-pre.jpg",
      "duration": "3:23"
    },
    {
      "id": 5,
      "name": "Levitating",
      "artist": "Dua Lipa",
      "thumbnail": "./assets/img/cover_art_for_levitating_by_dua_lipa_by_studiorinagraphic_dfu483b-pre.jpg",
      "duration": "3:23"
    },
    {
      "id": 5,
      "name": "Levitating",
      "artist": "Dua Lipa",
      "thumbnail": "./assets/img/cover_art_for_levitating_by_dua_lipa_by_studiorinagraphic_dfu483b-pre.jpg",
      "duration": "3:23"
    },
    {
      "id": 5,
      "name": "Levitating",
      "artist": "Dua Lipa",
      "thumbnail": "./assets/img/cover_art_for_levitating_by_dua_lipa_by_studiorinagraphic_dfu483b-pre.jpg",
      "duration": "3:23"
    }
  ]

const listSongs = document.querySelector(".list-songs");

function render() {
  let html = "";
  songs.forEach(song => {
    html += `
         <li class="song">
            <div class="thumnail">
                <img src=${song.thumbnail} alt="">
            </div>

            <div class="song-wrap">
                <h2 class="name-song">${song.name}</h2>
                <p class="singer-song">${song.artist}</p>
            </div>
        </li>
    `
  })
  listSongs.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  render();
})


