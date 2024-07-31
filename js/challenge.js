const counterDisplay = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');
const likesList = document.querySelector('.likes');

let counter = 0;
let isPaused = false;
let likeCounters = {};

function updateCounter() {
    counterDisplay.textContent= counter;
}

function decrementCounter() {
    if (!isPaused) {
      counter--;
      updateCounter();
    }
  }

  function incrementCounter() {
    if (!isPaused) {
      counter++;
      updateCounter();
    }
  }

    setInterval(incrementCounter, 1000);
    

  function likeCounter() {
    if (!isPaused) {
      if (likeCounters[counter]) {
        likeCounters[counter]++;
      } else {
        likeCounters[counter] = 1;
      }
  
      const existingLikeItem = document.getElementById(`like-${counter}`);
      if (existingLikeItem) {
        existingLikeItem.textContent = `${counter} has been liked ${likeCounters[counter]} times!`;
      } else {
        // Create a new like item
        const likeItem = document.createElement('li');
        likeItem.id = `like-${counter}`;
        likeItem.textContent = `${counter} has been liked ${likeCounters[counter]} times!`;
        likesList.appendChild(likeItem);
      }
    }
  }
minusButton.addEventListener('click', decrementCounter);
plusButton.addEventListener('click', incrementCounter);
heartButton.addEventListener('click', likeCounter);
pauseButton.addEventListener('click', function() {
isPaused = !isPaused;
pauseButton.innerText = isPaused ? 'resume' : 'pause';
});

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = commentInput.value;
    if (comment) {
      const commentItem = document.createElement('div');
      commentItem.innerText = comment;
      commentList.appendChild(commentItem);
      commentInput.value = '';
    }
  });
  
  // Initialize counter display
  updateCounter();
  