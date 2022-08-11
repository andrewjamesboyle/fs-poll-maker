HTML Elements
  1. Poll creation form
    1. Question input
    2. Option A input
    3. Option B input
    4. Start/submit poll button

  2. Current Poll Container
    1. Div for question
    2. Divs for options
    3. span for votes
    4. buttons for voting
    5. close poll button

  3. Container to display pastPolls

STATE
  let votes A = 0
  let votes B = 0
  let question = '';
  let option A = '';
  let option B = '';

***Instead of setting state, you are going to get state from supabase. So instead, build a poll object and set key value pairs to match table columns and get rows from table

SB Table

  name: polls
  columns: option_a_votes, option_b_votes, option_a, option_b, question

EVENTS

  1. submit form captures form data and displays to current poll container, submit resets form
  2. you can vote in the current poll and increment votesA or votesB;
  3. close poll button sends data to supabase as an object with rows (properties)
    - supabase builds table
    - getPolls grabs table back from supabase
    - renderpoll builds div's for table data
    - displayAllPolls displays polls in pastPollsEl container

Functions

  1. displayAllPolls - grabs table data from supabase
  2. createPoll - sends object to supabase to add to table
  3. getPolls - pulls data from supabase
  4. displayCurrentPoll - fills up currentPollEl container
  5. renderPoll - builds divs and other html elements

PLAN

  1. Set up HTML for form
  2. grab form El 
  3. add event listener
  4. console.log form submit (ACP)
  5. set up form to capture user input (ACP)
  6. get currentpoll to display by building displayCurrentPoll function, this should call renderPoll and append return to currentPollEl (ACP)
  7. get vote button event listeners to increment state, console.log
  8. call function to get votes to display (ACP)
  9. build fetch-utils function createPoll to take state object and build rows in supabase table. console.log outgoing data (ACP)
  10. build getPolls function to pull table data back in, (console.log getPolls data) (ACP) use renderPoll to build divs, append return to pastPollsEl, all this will be nested inside displayAllPolls