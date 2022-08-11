
import { renderPoll } from './render-utils.js';
import { createPoll, getPolls } from './fetch-utils.js';

const pollFormEl = document.getElementById('form-input');
const currentPollEl = document.getElementById('current-poll-container');
const voteABtn = document.getElementById('vote-a');
const voteBBtn = document.getElementById('vote-b');
const closePollBtn = document.getElementById('close-poll');
const pastPollsEl = document.getElementById('past-polls-container');

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

closePollBtn.addEventListener('click', async () => {
    await createPoll(currentPoll);

    currentPoll.question = '';
    currentPoll.optionA = '';
    currentPoll.optionB = '';
    currentPoll.votesA = 0;
    currentPoll.votesB = 0;

    displayCurrentPoll();

    await displayAllPolls();
});

function displayCurrentPoll() {
    currentPollEl.textContent = '';
    const currentPollData = renderPoll(currentPoll);
    currentPollEl.append(currentPollData);
}

async function displayAllPolls() {
    pastPollsEl.textContent = '';

    const pastPollsData = await getPolls();
    console.log(pastPollsData);

    for (let poll of pastPollsData) {
        const pastPolls = renderPoll(poll);
        pastPollsEl.append(pastPolls);
    }
}