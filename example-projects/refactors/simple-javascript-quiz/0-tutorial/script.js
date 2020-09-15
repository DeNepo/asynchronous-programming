/* variable
  - declared: global scope
  - constant: no
  - stores: Array of quiz objects
  - used:
    passed by reference as an argument to generateQuiz on initialization
  - role: state
*/
var myQuestions = [
  {
    question: "What is 10/2?",
    answers: {
      a: '3',
      b: '5',
      c: '115'
    },
    correctAnswer: 'b'
  },
  {
    question: "What is 30/3?",
    answers: {
      a: '3',
      b: '5',
      c: '10'
    },
    correctAnswer: 'c'
  }
];

/* variable
  - declared: global scope
  - constant: no
  - stores: a DOM element
  - used:
    passed by reference as an argument to generateQuiz on initialization
    quiz questions are rendered into here
    user input is read from here
  - role: read & update UI - handler
*/
var quizContainer = document.getElementById('quiz');
/* variable
  - declared: global scope
  - constant: no
  - stores: a DOM element
  - used:
    passed by reference as an argument to generateQuiz on initialization
    quiz score is rendered into here
  - role: update UI - handler
*/
var resultsContainer = document.getElementById('results');
/* variable
  - declared: global scope
  - constant: no
  - stores: a DOM element
  - used:
    passed by reference as an argument to generateQuiz on initialization
    an onclick callback is added
  - role: listen for event - listeners
*/
var submitButton = document.getElementById('submit');

/* function call
  arguments:
    myQuestions
    quizContainer
    resultsContainer
    submitButton
  return value: undefined
  behavior:
    renders the questions to the DOM
    attaches an event listener to the submit button
  role: init
*/
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


/* function declaration
  - declared: in global scope
  - is called:
    once when the application is initialized
  - role: init
*/
/**
 * renders data to the user interface and sets event listeners
 * @param {Array} questions - an array of question objects
 *  used as data to render into the quiz UI
 * @param {Element} quizContainer - the element for displaying questions
 *  written to once when the program is initialized
 * @param {Element} resultsContainer - the element for displaying quiz results
 *  written to each time a user clicks the get results button
 * @param {Element} submitButton - the element for triggering quiz evaluation
 *  clicked each time a user wants to evaluate their responses
 */
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {


  /* function declaration
    - declared: local to generateQuiz
    - called:
      once when the site is opened
    - role: init
  */
  function showQuestions(questions, quizContainer) {
    /* variable
      - declared: showQuestions scope
      - constant: no
      - stores: array
      - used:
          rendered html question strings are pushed
          pushed strings are concatenated and appended to dom
      - role:
    */
    // we'll need a place to store the output and the answer choices
    var output = [];
    /* variable
      -

    */
    var answers;
    // for each question...
    for (var i = 0; i < questions.length; i++) {

      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {

        // ...add an html radio button
        answers.push(
          '<label>'
          + '<input type="radio" name="question' + i + '" value="' + letter + '">'
          + letter + ': '
          + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer) {

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  }

}
