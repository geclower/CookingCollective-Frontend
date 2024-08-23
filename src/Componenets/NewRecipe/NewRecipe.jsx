import React from 'react'
import './NewRecipe.css'
import { useState } from "react"
import Modal from 'react-modal'

function NewRecipe() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div>
        <button className='add-recipe-btn' onClick={modalIsOpen ? closeModal : openModal}> + Recipe </button>
        <Modal isOpen={modalIsOpen} className="recipe-modal-popup">
        <button className="recipe-modal-close-button" onClick={closeModal}>X</button>
            <h1> Coming Soon! </h1>
            <img className='agatha-gif' src="https://media.tenor.com/Cef0yhgSjEEAAAAM/abell46s-reface.gif" alt="gif of wink"></img>
        </Modal>
    </div>
  )
}

export default NewRecipe