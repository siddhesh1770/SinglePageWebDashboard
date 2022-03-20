const print = (s) => {
  console.log(s);
};
const getYId = (url) => {
  let regex =
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  return regex.exec(url)[3];
};

const renderNoteCardCurr = (text) => {
  const container = document.getElementById("container");
  const localData = JSON.parse(localStorage.getItem("localnotes"));
  localData.notes.forEach((element) => {
    const noteCard = document.createElement("div");
    let hell23 = "";
    if (!element.text == undefined) {
      hell23 = element.text;
    }
    noteCard.setAttribute("class", "note-card card");
    noteCard.setAttribute("id", element.id);
    noteCard.innerHTML = `<div><h2 onclick="deleteNote(this.id)" id="hell${element.id}" class="h2Head">Close Note</h2>
  <div>
    <textarea onchange="saveinLocal(this.id)" class="notecardTX" id=note${element.id}>${hell23}</textarea>
  </div>
  </div>`;
    container.appendChild(noteCard);
  });
  document.getElementById("create-oldNote-card").style.display = "none";
};

const renderNoteCard = () => {
  const container = document.getElementById("container");
  const noteCard = document.createElement("div");
  const idgenerate = Date.now();
  let local = localStorage.getItem("localnotes");
  if (!local) {
    let hell = {
      notes: [
        {
          id: idgenerate,
          noteText: "",
        },
      ],
    };
    localStorage.setItem("localnotes", JSON.stringify(hell));
  } else {
    local = JSON.parse(local);
    local.notes.push({
      id: idgenerate,
      noteText: "",
    });
    localStorage.setItem("localnotes", JSON.stringify(local));
  }
  noteCard.setAttribute("class", "note-card card");
  noteCard.setAttribute("id", idgenerate);
  noteCard.innerHTML = `<div><h2 class="h2Head" id="hell${idgenerate}" onclick="deleteNote(this.id)">Close Note</h2>
  <div>
    <textarea onchange="saveinLocal(this.id)" class="notecardTX" id=note${idgenerate}></textarea>
  </div>
  </div>`;
  container.appendChild(noteCard);
};

const renderCowinCard = () => {
  const container = document.getElementById("container");
  const cowinCard = document.createElement("div");
  const idgenerate = Date.now();
  cowinCard.setAttribute("class", "cowin-card card");
  cowinCard.setAttribute("id", idgenerate);
  cowinCard.innerHTML = `<div id="hell${idgenerate}"><h2 class="h2Head">Track Covid Vaccine</h2>
  <div class="form-group">
    <div class="pincode" >Pincode = <input type="number" id="pincode${idgenerate}"></input></div>
    <div >Age  =   <input id="age${idgenerate}" type="radio" name="age${idgenerate}" id="18${idgenerate}" value="18">18+    </input><input id="45${idgenerate}" value="45" type="radio" name="age${idgenerate}">45+</input></div>
    <div class="date-picker" >Date = <input type="date" id="date${idgenerate}"></input></div>
    <br />
    <div><button onclick="trackVaccine(this.id)" id="cowin${idgenerate}">Track Vaccine</button></div>
    <div><input type="radio" name="auto${idgenerate}" id="auto${idgenerate}"></input></div>
    <div><h5>Status</h5>
    <div id="vaccavailable${idgenerate}">Not Available</div>
    <div><button id="book${idgenerate}" onclick="startTracking(e)">Book now</button></div>
    </div>
    </div>
  </div>`;
  container.appendChild(cowinCard);
  document.getElementById(`book${idgenerate}`).style.display = "none";
};

const renderEkartCard = () => {
  const container = document.getElementById("container");
  const ekartCard = document.createElement("div");
  const idgenerate = Date.now();
  ekartCard.setAttribute("class", "ekart-card card");
  ekartCard.setAttribute("id", idgenerate);
  ekartCard.innerHTML = `<div><h2 class="h2Head">Ekart Card</h2>
  <div>Tracking ID = <input type="text" id="ekartTrack${idgenerate}"></input></div>
  <div><button onclick="trackEkart(this.id)" id="ekartBtn${idgenerate}">Track Order</button></div>
  <br/><br/>
  <div><h5>Shipment Status</h5></div>
  <div id="ekartStatus${idgenerate}">Please Enter Your Tracking ID</div>
  </div>
  `;
  container.appendChild(ekartCard);
  const change = document.getElementById(`ekartStatus${idgenerate}`);
  change.style.backgroundColor = "yellow";
};

const renderSpotifyCard = () => {
  const container = document.getElementById("container");
  const spotifyCard = document.createElement("div");
  const idgenerate = Date.now();
  let plink = "";
  const hello = localStorage.getItem("playlist");
  if (!hello) {
    plink = window.prompt("Enter Playlist Link");
    localStorage.setItem("playlist", plink);
  } else {
    const confirmation = window.confirm(
      "Do you want to change the playlist link?"
    );
    if (confirmation) {
      plink = window.prompt("Enter Playlist Link");
      localStorage.setItem("playlist", plink);
    } else {
      plink = localStorage.getItem("playlist");
    }
  }
  const plid = plink.slice(34, 56);
  console.log(plid);
  spotifyCard.setAttribute("class", "spotify-card card");
  spotifyCard.setAttribute("id", idgenerate);
  spotifyCard.innerHTML = `
  <div><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${plid}?utm_source=generator" width="100%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>
  `;
  container.appendChild(spotifyCard);
};

const renderCalenderCard = () => {
  const container = document.getElementById("container");
  const calenderCard = document.createElement("div");
  const idgenerate = Date.now();
  calenderCard.setAttribute("class", "calender-card card");
  calenderCard.setAttribute("id", idgenerate);
  calenderCard.innerHTML = `<div>
  <iframe src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" style="border: 0" width="100%" height="300" frameborder="0" scrolling="no"></iframe>
  </div>`;
  container.appendChild(calenderCard);
};

const renderYoutubeCard = () => {
  const container = document.getElementById("container");
  const youtubeCard = document.createElement("div");
  const idgenerate = Date.now();
  youtubeCard.setAttribute("class", "youtube-card card");
  let ylink = "";
  const hello = localStorage.getItem("youtubeVdoLink");
  if (!hello) {
    ylink = window.prompt("Enter Youtube Video Link");
    localStorage.setItem("youtubeVdoLink", ylink);
  } else {
    const confirmation = window.confirm(
      "Do you want to change the Youtube Video Link?"
    );
    if (confirmation) {
      ylink = window.prompt("Enter Youtube Video Link");
      localStorage.setItem("youtubeVdoLink", ylink);
    } else {
      ylink = localStorage.getItem("youtubeVdoLink");
    }
  }
  const vid = getYId(ylink);
  youtubeCard.innerHTML = `<iframe width="100%" height="305" src="https://www.youtube.com/embed/${vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  container.appendChild(youtubeCard);
};

export {
  renderYoutubeCard,
  renderCalenderCard,
  renderNoteCard,
  renderCowinCard,
  renderEkartCard,
  renderNoteCardCurr,
  renderSpotifyCard,
};
