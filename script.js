const roomInfo = {
  bushra: {
    room: "Bedroom 6",
    directions:
      "Go straight from the front door, then it's the first door on the left.",
  },
  ahmed: {
    room: "Bedroom 6",
    directions:
      "Go straight from the front door, then it's the first door on the left.",
  },
  nadia: {
    room: "Bedroom 7",
    directions:
      "Go straight and then turn right. Your room is the first on the right.",
  },
  atif: {
    room: "Bedroom 7",
    directions:
      "Go straight and then turn right. Your room is the first on the right.",
  },
  yusuf: {
    room: "Bedroom 8",
    directions:
      "Go straight, then turn right. Your room is the last one at the end of the hall.",
  },
  ayoub: {
    room: "Bedroom 8",
    directions:
      "Go straight, then turn right. Your room is the last one at the end of the hall.",
  },
  yahya: {
    room: "Bedroom 8",
    directions:
      "Go straight, then turn right. Your room is the last one at the end of the hall.",
  },
  neelam: {
    room: "Bedroom 2",
    directions:
      "Go upstairs, then turn right. Your room is the second door on the right.",
  },
  saqib: {
    room: "Bedroom 2",
    directions:
      "Go upstairs, then turn right. Your room is the second door on the right.",
  },
  nabil: {
    room: "Bedroom 3",
    directions: "Go upstairs and your room is the first door on the left.",
  },
  jamil: {
    room: "Bedroom 3",
    directions: "Go upstairs and your room is the first door on the left.",
  },
  safina: {
    room: "Bedroom 4",
    directions:
      "Go upstairs, then turn left. Your room is the second on the left.",
  },
  siara: {
    room: "Bedroom 4",
    directions:
      "Go upstairs, then turn left. Your room is the second on the left.",
  },
  inaiya: {
    room: "Bedroom 5",
    directions: "Go upstairs, then turn left. It's the third door on the left.",
  },
  alisha: {
    room: "Bedroom 5",
    directions: "Go upstairs, then turn left. It's the third door on the left.",
  },
  shafqat: {
    room: "Main Bedroom",
    directions:
      "Go upstairs to the end of the hallway. Your room is the large one at the end.",
  },
  abdul: {
    room: "Main Bedroom",
    directions:
      "Go upstairs to the end of the hallway. Your room is the large one at the end.",
  },
};

function findRoom() {
  const name = document.getElementById("nameSelect").value.toLowerCase();
  const output = document.getElementById("output");

  if (roomInfo[name]) {
    const { room, directions } = roomInfo[name];
    output.innerHTML = `
      <strong>Hi ${capitalize(name)}!</strong><br/>
      Your room is <strong>${room}</strong>.<br/>
      Directions: ${directions}
    `;
  } else {
    output.textContent = "Please select a name from the dropdown.";
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
