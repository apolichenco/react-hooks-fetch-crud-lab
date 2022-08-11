import React from "react";

function QuestionItem({ question, onDeleteQuestion,  onUpdateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteQuestion(question))
  }

  function handleChangeAnswerClick(e) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "correctIndex": parseInt(e.target.value, 10) 
      }),
    })
    .then((r) => r.json())
    .then((updatedQuestion) => onUpdateAnswer(updatedQuestion))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChangeAnswerClick}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
