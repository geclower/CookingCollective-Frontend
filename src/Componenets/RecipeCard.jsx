import React from 'react'
import './RecipeCard.css'
import { useState } from 'react'
import Modal from "react-modal"

function RecipeCard({recipe}) {
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal(){
        setIsOpen(true)
    }
    function closeModal(){
        setIsOpen(false)
      }
    
    const backgroundImage = {
        backgroundImage: `url(${recipe.image})`
    }

  return (
    <div 
    className='recipe-card'
    onClick={modalIsOpen ? closeModal : openModal}
    style={backgroundImage}>
        <Modal
        isOpen={modalIsOpen}
        className="recipe-modal-popup">
            <h1 className='recipe-modal-title'>{recipe.name}</h1>
        </Modal>
        <div className='recipe-info'>
            <h1 className='recipe-name'>{recipe.name}</h1>
        </div>
    </div>
  )
}

export default RecipeCard