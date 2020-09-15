export const app = {
  state: {
    numCorrect: 0,
    userAnswers: [],
    questions: [
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
    ]
  },


  renderQuestions: function () {
    const questions = this.state.questions;

    const output = [];

    // for each question...
    for (var i = 0; i < questions.length; i++) {

      const questionAnswers = [];

      // for each available answer...
      for (const letter in questions[i].answers) {

        // ...add an html radio button
        questionAnswers.push(
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
        + '<div class="answers">' + questionAnswers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    return output.join('');
  },


  showResultsHandler: function () {

    // gather answer containers from our quiz
    const quizContainer = document.getElementById('quiz');
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // update state with new user answers
    this.state.userAnswers = [];
    for (let i = 0; i < answerContainers.length; i++) {
      const answerContainer = answerContainers[i];
      const userAnswer = (answerContainer.querySelector('input[name=question' + i + ']:checked') || {}).value;
      this.state.userAnswers.push(userAnswer);
    };

    // update UI to show correct/incorrect
    this.state.numCorrect = 0;
    for (let i = 0; i < this.state.questions.length; i++) {

      // if answer is correct
      if (this.state.userAnswers[i] === this.state.questions[i].correctAnswer) {
        // add to the number of correct answers
        this.state.numCorrect++;

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
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = this.state.numCorrect + ' out of ' + this.state.questions.length;

  },

  init: function (containerId) {

    const quizContainer = document.getElementById(containerId);

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = this.renderQuestions();

  }
};
