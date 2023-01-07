import { toast } from 'react-toastify'
import { ModalComponent } from '~/components/ModalComponent'
import { deleteQuiz } from '~/services/quiz'

function ModalDeleteQuiz({ show, setShow, data, reRender }) {
  const deleteApi = async () => {
    const res = await deleteQuiz(data.id)
    if (res && res.EC === 0) {
      toast.success(res.EM)
      setShow(false)
      reRender()
    } else {
      toast.error(res.EM)
    }
  }

  return (
    <>
      <ModalComponent
        onSubmit={() => deleteApi()}
        onClose={() => setShow(false)}
        show={show}
        heading='Delete Quiz'
        footer='Delete Quiz'
      >
        <b>{`Are you sure to delete Quiz ${data.name}`}</b>
      </ModalComponent>
    </>
  )
}

export default ModalDeleteQuiz
