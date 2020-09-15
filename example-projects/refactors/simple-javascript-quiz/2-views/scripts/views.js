const renderQuestions = (questions) => {

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
};
