// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".like-glyph");
  const errorM = document.querySelector("#error-modal");
  hearts.forEach(hearts => {
  hearts.addEventListener('click', () => {
    console.log("Hheart clicked!")
    mimicServerCall()
    .then(() => {
      if(hearts.classList.contains("activated-heart")){
        hearts.classList.remove("activated-heart")
        hearts.innerText = EMPTY_HEART;
      }else {
        hearts.classList.add("activated-heart");
        hearts.innerText = FULL_HEART;
      }
    })
    .catch((error) => {
      errorM.classList.remove("hidden")
      errorM.querySelector(".error-message").innerText = error;
      setTimeout(() => {
        errorM.classList.add("hidden")
      }, 3000);
    });
   });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
