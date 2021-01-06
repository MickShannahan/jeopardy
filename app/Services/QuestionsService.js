import _store from "../store.js";
import Question from "../Models/Question.js"

// @ts-ignore
const _api = axios.create({
  baseURL: "http://jservice.io/api/",
  timeout: 3000
})

class QuestionsService {
  getQuestion() {
    _api.get("random").then(result => {
      let question = result.data[0]
      console.log(result.data[0])
      console.log(result.data[0].question)
      console.log(result.data[0].answer)
      _store.commit('questions', new Question(question))
    }).catch(error => console.error(error))

  }

}

const service = new QuestionsService();
export default service;
