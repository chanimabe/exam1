function adjustText() {
  const studentNumber = document.querySelector("h1:nth-child(1)");
  const studentName = document.querySelector("h1:nth-child(2)");

  studentNumber.style.fontSize = "20px";
  studentName.style.fontSize = "20px";
  studentNumber.style.color = "blue";
  studentName.style.color = "green";
}

let isRounded = false;

function adjustProfile() {
  const profilePic = document.getElementById("profile-pic");

  if (isRounded) {
    profilePic.style.border = "2px solid transparent";
  } else {
    profilePic.style.border = "2px solid red";
    profilePic.style.borderRadius = "50%";
  }

  isRounded = !isRounded;
}

let isImage1 = true;

function changeImage() {
  const profilePic = document.getElementById("profile-pic");

  profilePic.src = "2.jpg";

  profilePic.style.width = "200px";
  profilePic.style.height = "250px";

  if (isImage1) {
    profilePic.src = "1.jpg";
  } else {
    profilePic.src = "2.jpg";
  }

  isImage1 = !isImage1;
}
