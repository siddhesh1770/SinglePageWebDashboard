const renderNoteCard = () => {
  const container = document.getElementById("container");
  const noteCard = document.createElement("div");
  const idgenerate = Date.now();
  noteCard.setAttribute("class", "note-card card");
  noteCard.setAttribute("id", idgenerate);
  noteCard.innerHTML = `<div>Hello</div>`;
  container.appendChild(noteCard);
};

const renderCowinCard = () => {
  const container = document.getElementById("container");
  const cowinCard = document.createElement("div");
  const idgenerate = Date.now();
  cowinCard.setAttribute("class", "cowin-card card");
  cowinCard.setAttribute("id", idgenerate);
  cowinCard.innerHTML = `<div><h2 class="h2Head">Cowin Card</h2>
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

export { renderNoteCard, renderCowinCard };
