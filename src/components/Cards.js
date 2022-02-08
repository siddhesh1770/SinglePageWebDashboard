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
  cowinCard.innerHTML = `<div>Hello</div>`;
  container.appendChild(cowinCard);
};

export { renderNoteCard, renderCowinCard };
