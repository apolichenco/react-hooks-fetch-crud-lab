import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function handleAddItem(newQuestion) {
    setQuestions([...questions, newQuestion]);  
  }

  function handleDeleteItem(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  function handleChangeAnswer(updatedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((data) => setQuestions(data));
  }, []);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddItem={handleAddItem}/> : <QuestionList questions={questions} onDeleting={handleDeleteItem} answerUpdate={handleChangeAnswer}/>}
    </main>
  );
}

export default App;
