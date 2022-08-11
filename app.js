// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const pollFormEl = document.getElementById('form-input');
const currentPollEl = document.getElementById('current-poll-container');
const voteABtn = document.getElementById('vote-a');
const voteBBtn = document.getElementById('vote-b');

// let state

const currentPoll = {
    question: '',
    optionA: '',
    optionB: '',
    votesA: 0,
    votesB: 0
};



pollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollFormEl);
  
    currentPoll.question = data.get('question');
    currentPoll.optionA = data.get('option-a');
    currentPoll.optionB = data.get('option-b');

    displayCurrentPoll();

    pollFormEl.reset();
});

voteABtn.addEventListener('click', () => {
    currentPoll.votesA++;
    displayCurrentPoll();
});

voteBBtn.addEventListener('click', () => {
    currentPoll.votesB++;
    displayCurrentPoll();
});



function displayCurrentPoll() {
    currentPollEl.textContent = '';
    const currentPollData = renderPoll(currentPoll);
    currentPollEl.append(currentPollData);
}