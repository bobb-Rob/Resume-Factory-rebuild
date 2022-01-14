

import React from 'react'

const SAEbutton = (props) => {
    return (
        <div>
            <form id='skillForm' onSubmit={(e) => submitSkillForm(e)} >              


                
<div className='experience_submit_edit_btn' >
{(notEmpty() && notSubmitted())  &&
    <div>
        <button form='skillForm' type='submit' className='submit_btn btn'                        
        >Submit this Section</button>

        <button type='button' className='add-btn btn'
         onClick={(e) => addSkill(e) }
        >Add</button>                       
    </div>
}
 {(!notEmpty() && !notSubmitted())   && 
         <button type='button' className='add-btn btn' 
         onClick={(e) => addSkill(e) }>
         Add</button>
 }

{ (!notSubmitted() &&  notEmpty())   &&
        <button type='button' className='edit_btn btn' 
        onClick={ (e) => editSkill(e)  }
        >Edit</button>
}                          
       
</div>
</form>
        </div>
    )
}

export default SAEbutton
