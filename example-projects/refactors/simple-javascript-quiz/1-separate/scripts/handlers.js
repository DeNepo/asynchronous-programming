const showResultsHandler = () => {

  // gather answer containers from our quiz
  const quizContainer = document.getElementById('quiz');
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // update state with new user answers
  state.userAnswers = [];
  for (let i = 0; i < answerContainers.length; i++) {
    const answerContainer = answerContainers[i];
    const userAnswer = (answerContainer.querySelector('input[name=question' + i + ']:checked') || {}).value;
    state.userAnswers.push(userAnswer);
  };

  // update UI to show correct/incorrect
  state.numCorrect = 0;
  for (let i = 0; i < state.questions.length; i++) {

    // if answer is correct
    if (state.userAnswers[i] === state.questions[i].correctAnswer) {
      // add to the number of correct answers
      state.numCorrect++;

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
  resultsContainer.innerHTML = state.numCorrect + ' out of ' + state.questions.length;

};
