import { ModalComponent } from '~/components/ModalComponent'

function ModalAnswer({ show, setShow, data }) {
  const handleSubmit = () => {
    const result = data.quizData.map((quiz) => ({
      quiz: quiz.questionId,
      correctAnswer: quiz.systemAnswers[0].description,
    }))
    console.log(result.map((res) => console.log(res)))
  }
  return (
    <ModalComponent
      heading={'Your Result'}
      footer={'Show Answer'}
      show={show}
      onClose={() => setShow(false)}
      onSubmit={handleSubmit}
    >
      <h4>
        {data.countCorrect} / {data.countTotal}
      </h4>
      <p>Total Correct Answer: {data.countCorrect}</p>
      <p>Total Question: {data.countTotal}</p>
    </ModalComponent>
  )
}

export default ModalAnswer
