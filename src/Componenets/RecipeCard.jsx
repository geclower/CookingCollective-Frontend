import React from 'react'
import './RecipeCard.css'
import { useState } from 'react'
import Modal from "react-modal"
import { Link } from 'react-router-dom'

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
            <img className="recipe-modal-image" src={recipe.image} alt="image of recipe"></img>
            <h1 className='recipe-modal-title'>{recipe.name}</h1>
            <h3>Ingredients</h3>
            <ul className='recipe-modal-ingredients'>
                {recipe.ingredients.map((ingredient)=>(
                    <li className='recipe-ingredient'>{ingredient}</li>
                ))}
            </ul>
            <p className='recipe-instructions'>{recipe.instructions}</p>
            {recipe.video &&
               <button className="recipe-modal-video-button" onClick= {()=> window.open(recipe.video, '_blank')}>Video Walkthrough</button>
            }
                        {recipe.source &&
               <button className="recipe-modal-source-button" onClick= {()=> window.open(recipe.source, '_blank')}>Source</button>
            }
            <button onClick={closeModal}>X</button>
            
        </Modal>

        <div className='recipe-info'>
            <h1 className='recipe-name'>{recipe.name}</h1>
            
        </div>
    </div>
  )
}

export default RecipeCard