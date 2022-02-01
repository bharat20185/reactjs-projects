import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useAppContext} from './context'

const Home = () => {
  const {
    openSidebar,
    closeSidebar, 
    siderbarOpen,
    openModal,
    closeModal,
    modalOpen
  } = useAppContext();

  const handleBars = () => {
    siderbarOpen ? closeSidebar() : openSidebar()
  }

  const handleModal = () => {
    modalOpen ? closeModal() : openModal()
  }

  return <main>
    <button onClick={handleBars} className="sidebar-toggle"><FaBars /></button>
    <button onClick={handleModal} className="btn">Show Modal</button>
  </main>
}

export default Home
