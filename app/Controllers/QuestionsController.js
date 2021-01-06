import _questionsService from "../Services/QuestionsService.js";
import _store from "../store.js";

//Private
function _draw() {
  let question = _store.State.questions
  console.log(_store.State.questions)
  // @ts-ignore
  let template = question.QuestionTemplate
  document.getElementById('game-zone').innerHTML = template
  console.log("draw ran");
}


//Public
export default class QuestionsController {
  constructor() {
    _store.subscribe("questions", _draw);
  }
  revealAnswer() {
    let question = _store.State.questions
    console.log(_store.State.questions)
    // @ts-ignore
    let template = question.AnswerTemplate
    document.getElementById('game-zone').innerHTML = template
    console.log("draw ran");
  }

  getQuestion() {
    _questionsService.getQuestion()
  }
}
