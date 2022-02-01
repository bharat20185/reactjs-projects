import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useAppContext} from './context'
import Modal from './Modal'
import ModalContent from './ModalContent'

const Home = () => {
  const {
    openSidebar,
    closeSidebar, 
    siderbarOpen,
    setModalOpen,
    closeModal,
    modalOpen
  } = useAppContext();

  const handleBars = () => {
    siderbarOpen ? closeSidebar() : openSidebar()
  }

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }

  return <main>
    <button onClick={handleBars} className="sidebar-toggle"><FaBars /></button>
    <button onClick={handleModal} className="btn">Show Modal</button>
    <Modal open={modalOpen} onClose={closeModal}>
      <ModalContent />
    </Modal>
  </main>
}

export default Home
