
import React from 'react'

const TextInput = ({notSubmitted, arrayData, }) => {


    const mapOver = (arrayData, data, id) => {
        arrayData.map((item) => {
            return (
             <div className='educationInputs' key={item.id} >                           
                 <input type='text' id={item.id} placeholder='Skill' 
                 className='skill1 education' name='skill'
                 value={item.skill} onChange={(e) => onChange(e, id)}   /> 

                 <button className='delete_btn btn' id='delete-btn'  type='button'
                 onClick={() => deleteSkill(id)}
                 >Delete</button>                            
             </div>
             )  
         })



    }


    return (
        <div>
            {notSubmitted && 'ghh'
}
        </div>
    )
}

export default TextInput
