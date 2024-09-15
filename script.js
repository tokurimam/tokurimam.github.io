const totalScenes = document.getElementById("svg").children.length - 1;
let currentScene = 0;
let messages = ["",
  "",
  "",
  "",
  "",
  ""
];

let titles = ["Muharrem Şimşek'in Kişisel Web Sitesi",
  "",
  "",
  "",
  "",
  ""
];

refreshFooter();

btnQ.addEventListener('click', () => {
  takeMeHome();
})

btnR.addEventListener('click', () => {
  refreshScenes();
})

menu.addEventListener("mouseenter", function() {
  menu.style.opacity = 1;
  colors.style.opacity = 1;
})

// colors.addEventListener("mouseenter", function() {
//   menu.style.opacity = 1;
//   colors.style.opacity = 1;
// })

btnE.addEventListener('click', () => {
  menu.style.opacity = 0
  colors.style.opacity = 0
})

btnF.addEventListener('click', () => {
  toggleFullscreen();
})

function refreshScenes() {
  for (let i = 1; i <= totalScenes ; i++) {
    // document.getElementById(`bg${i}`).style.filter = "none";
    // document.getElementById(`pia${i}`).classList.add('paused');
    // document.getElementById(`pia${i}b`).classList.add('paused');
  }
  document.getElementById(`scene${currentScene}`).style.display = "none";
  setTimeout(function() {
    document.getElementById(`scene${currentScene}`).style.display = "block";
  }, 1);
  refreshFooter();
}

function nextScene() {
  if (currentScene < totalScenes){
  document.getElementById(`scene${currentScene}`).style.display = "none";
  currentScene++;
  document.getElementById(`scene${currentScene}`).style.display = "block";
  refreshFooter();
  }
}

function prevScene() {
  if (currentScene > 0){
  document.getElementById(`scene${currentScene}`).style.display = "none";
  currentScene--;
  document.getElementById(`scene${currentScene}`).style.display = "block";
  refreshFooter();
  }
}

function refreshFooter() {
  if (currentScene == 0) {
  document.getElementById('title-message').textContent = `${titles[currentScene]}`;
  document.getElementById('message-left').style.display = "none";
  document.getElementById('message-midbar').style.display = "none";
  document.getElementById('message-right').style.display = "none";
  document.getElementById('message-center').style.display = "block";
  document.getElementById('message-center').innerHTML = `<span class="test"><strong><a href="https://www.muharremsimsek.com" style="width: 1280px" id="message-center" class="footer-item">Tokur İmam</a> © 2024</strong></span>`;
  } else {
  // document.getElementById('title-message').textContent = `Scene Title (${currentScene} of ${totalScenes})`;
  document.getElementById('title-message').textContent = `${titles[currentScene]}`;
  document.getElementById('message-center').style.display = "none";
  document.getElementById('message-left').style.display = "block";
  // document.getElementById('message-midbar').style.display = "block";
  document.getElementById('message-right').style.display = "block";
  // document.getElementById('message-left').innerHTML = `<p><span style="width: 1280px" id="message-center" class="footer-item-nonglow">${messages[currentScene]}</span></p>`;
  // document.getElementById('message-right').innerHTML = `<p><span style="width: 1280px" id="message-center" class="footer-item-nonglow">${messages[currentScene]}</span></p>`;
  document.getElementById('message-left').textContent = `${currentScene} / ${totalScenes}`;
  document.getElementById('message-right').textContent = `${currentScene} / ${totalScenes}`;
  }
}

function takeMeHome() {
for (let i = 1; i <= totalScenes ; i++) {
  document.getElementById(`scene${i}`).style.display = "none";
}
currentScene = 0;
document.getElementById(`scene${currentScene}`).style.display = "block";
refreshFooter();
}

function changeBackgroundColor() {
  let randColor = Math.floor(Math.random() * 360);
  document.getElementById(`bg${currentScene}`).style.filter = "sepia(100%) saturate(200%) brightness(80%) hue-rotate(" + randColor + "deg)";
}

function animatePia(i) {
  document.getElementById(`pia${i}`).classList.toggle('paused');
  document.getElementById(`pia${i}b`).classList.toggle('paused');
}

// function goToPage(url) {
//   window.location.href = url;
// }

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}

// && colors.style.opacity == 1

function toggleHideBars() {
  if (menu.style.opacity == 0) {
    menu.style.opacity = 1;
    colors.style.opacity = 1;
  } else {
    menu.style.opacity = 0;
    colors.style.opacity = 0;
  }
}

document.addEventListener('keydown', function(event) {
  switch (event.key.toLowerCase()) {
      case 'a':
          prevScene();
          break;
      case 'd':
          nextScene();
          break;
      case 'w':
          changeBackgroundColor();
          break;
      case 's':
          animatePia(currentScene);
          break;
      case 'e':
          toggleHideBars();
          break;
      case 'r':
          refreshScenes();
          break;
      case 'f':
          toggleFullscreen();
          break;
      case 'q':
          takeMeHome();
          // goToPage('index.html');
          break;
  }
});

  // if (currentScene == 0){
  //   document.getElementById("prev-btn").classList.add('footer-btn-inactive');
  //   document.getElementById("prev-btn").classList.remove('footer-btn-active');
  // } else {
  //   document.getElementById("prev-btn").classList.add('footer-btn-active');
  //   document.getElementById("prev-btn").classList.remove('footer-btn-inactive');
  // }

  // if (currentScene == (totalScenes - 1)){
  //   document.getElementById("next-btn").classList.add('footer-btn-inactive');
  //   document.getElementById("next-btn").classList.remove('footer-btn-active');
  //   document.getElementById("next-btn").classList.remove('footer-btn-focus');
  // } else {
  //   document.getElementById("next-btn").classList.add('footer-btn-active');
  //   document.getElementById("next-btn").classList.add('footer-btn-focus');
  //   document.getElementById("next-btn").classList.remove('footer-btn-inactive');
  // }

// function animatePia(i) {
//   if (!firstClick){
//     document.getElementById(`pia${i}`).classList.toggle('paused');
//     document.getElementById(`pia${i+1}`).classList.toggle('paused');
//   } else {
//     document.getElementById(`pia${i}`).classList.add('up-down');
//     document.getElementById(`pia${i+1}`).classList.add('up-down');
//     firstClick = false;
//   }
// }

// function changeHue() {
//   let randomHue = Math.floor(Math.random() * 360);
//   for (let i = 0; i < totalScenes; i++){
//     document.getElementById(`scene${i}`).style.filter = "sepia(100%) saturate(200%) brightness(80%) hue-rotate(" + randomHue + "deg)";
//     }
// }

// function changeBackground(element) {
//   let randomHue = Math.floor(Math.random() * 360);
//   element.style.filter = "sepia(100%) saturate(200%) brightness(80%) hue-rotate(" + randomHue + "deg)";
// }