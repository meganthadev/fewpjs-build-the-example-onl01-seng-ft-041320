// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorMessage = document.getElementById('modal')
let hearts = document.querySelectorAll('.like-glyph')

document.addEventListener("DOMContentLoaded", () => {
  errorMessage.setAttribute('class', 'hidden')
});

for (let heart of hearts){
  heart.addEventListener('click', (e) => {
    changeHeart(e)
  })
}

function changeHeart(e){
  let heart = e.target

  mimicServerCall()
  .then(response => {
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.classList.add('activated-heart')
    } else {
      heart.innerText = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
  })
  .catch(message => {
    errorMessage.classList.remove('hidden')
    errorMessage.innerText = message
    setTimeout(() => { errorMessage.classList.add('hidden')}, 5000)
  })
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
