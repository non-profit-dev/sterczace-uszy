import { useState } from "react"

import Modal from "./Modal"

export default {
  title: "Patterns/Modal",
  component: Modal,
  render: () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
      <div>
        <button type="button" onClick={() => setIsModalOpen(true)}>
          open modal
        </button>
        <Modal
          title="Example Modal"
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          velit recusandae harum. Eius nam at iste consectetur aperiam ex
          consequatur repellat autem aliquam veniam. Tempore soluta minus
          deserunt magnam est?
        </Modal>
      </div>
    )
  },
}

export const Controls = {
  args: {},
}
