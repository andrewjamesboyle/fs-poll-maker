export function renderPoll(poll) {
    const pollEl = document.createElement('div');
    const questionEl = document.createElement('p');
    const optionAEl = document.createElement('p');
    const optionBEl = document.createElement('p');
    const votesAEl = document.createElement('p');
    const votesBEl = document.createElement('p');

    questionEl.textContent = poll.question;
    optionAEl.textContent = poll.optionA;
    optionBEl.textContent = poll.optionB;
    votesAEl.textContent = poll.votesA;
    votesBEl.textContent = poll.votesB;

    pollEl.append(questionEl, optionAEl, optionBEl, votesAEl, votesBEl);

    return pollEl;
}
