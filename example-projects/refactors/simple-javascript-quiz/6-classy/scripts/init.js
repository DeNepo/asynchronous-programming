import { Quiz } from './quiz.js';
import { questions } from './data.js';

const app = new Quiz(questions);

app.init('quiz', 'submit');
