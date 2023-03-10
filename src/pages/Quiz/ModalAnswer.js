import { ModalComponent } from '~/components/ModalComponent'

function ModalAnswer({ show, setShow, data, handleShowAnswer }) {
  return (
    <ModalComponent
      heading={'Your Result'}
      footer={'Show Answer'}
      show={show}
      onClose={() => setShow(false)}
      onSubmit={handleShowAnswer}
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
