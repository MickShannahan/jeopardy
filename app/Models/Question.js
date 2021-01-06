export default class Question {
    constructor(data) {
        this.question = data.question
        this.answer = data.answer
        this.category = data.category.title
        this.value = data.value
    }

    get QuestionTemplate() {
        return `
        <div class="col-10 btn btn-info p-5 text-center" onclick="app.questionsController.revealAnswer()">
        <h4 class="m-2 mb-1 text-warning">${this.category}</h4> <h4 class="bg-warning text-info rounded shadow-sm mb-3">${this.value}</h4>
                <h3> ${this.question}
                </h3>
            </div>
        `
    }

    get AnswerTemplate() {
        return `
        <div class="col-10 btn btn-info border-light m-5 text-center" onclick="app.questionsController.getQuestion()">
        <h4 class="m-2 mb-1 text-warning">${this.category}</h4> <h4 class="bg-warning text-info rounded shadow-sm mb-3">${this.value}</h4>
        <h3> ${this.answer}
                </h3>
            </div>
        `
    }
}