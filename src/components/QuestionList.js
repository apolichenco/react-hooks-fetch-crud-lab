import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDeleting, answerUpdate}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((questionData) => 
        <QuestionItem key={questionData.id} question={questionData} onDeleteQuestion={onDeleting}  onUpdateAnswer={answerUpdate}/>
      )}
      </ul>
    </section>
  );
}

export default QuestionList;
