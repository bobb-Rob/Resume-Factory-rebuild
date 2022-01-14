import React from 'react'

const Experience = (props) => {
    const { experience, onChange, addExperience, editExperience, onExperienceSubmit, onDeleteExperience  } = props;

    const allExperience = experience.map((experience) => {
        return (
            <div className='experienceInputs' key={experience.id} > 
                <input type='text' id={experience.id} placeholder='position' 
                className='position experience' name='position' 
                value={experience.position} onChange={(e) => onChange(e, experience.id)}
                required />

                <input type='text' id='company' placeholder='Company' 
                className='company experience' name='company' 
                value={experience.company}onChange={(e) => onChange(e, experience.id)}
                required /> 

                <input type='text' id='city' placeholder='City' 
                className='city experience' name='city' 
                value={experience.city} onChange={(e) => onChange(e, experience.id)}
                required/>  

               
                <input type='date' id='fromDate' placeholder='From' 
                className='fromDate experience' name='fromDate' 
                value={experience.from} onChange={(e) => onChange(e, experience.id)}
                />  

                <input type='date' id='toDate' placeholder='To' 
                className='toDate experience' name='toDate' 
                value={experience.to} onChange={(e) => onChange(e, experience.id)}
                />

                 <button className='delete_btn btn' type='button' id='delete-btn'
                 onClick={() => onDeleteExperience(experience.id)}
                 >Delete</button>
            </div>
        )
     })
    
     const notEmpty = () => experience.length > 0 ? true: false;


     const notSubmitted = () => {
         let getStatus = experience.some((exp) =>
         exp.submitted === false); 
         if(getStatus){
             return true;
         }else{
             return false;
         }           
     }      

     console.log(experience)
     console.log(notEmpty())
     console.log(notSubmitted())

    return (
        <div id='section-div' >
             <h2 className='section-header' >Experience {!notSubmitted && <span>Submitted</span> }  </h2> 
             <form  id='experienceForm' onSubmit={(e) => onExperienceSubmit(e)}  >
               

                { notSubmitted() && allExperience}

                <div className='experience_submit_edit_btn' >
                {(notEmpty() && notSubmitted())  &&
                    <div>
                        <button form='experienceForm' type='submit' className='submit_btn btn'                        
                        >Submit this Section</button>

                        <button type='button' className='add-btn btn'
                         onClick={(e) => addExperience(e) }
                        >Add</button>                       
                    </div>
                }
                 {(!notEmpty() && !notSubmitted())   && 
                         <button type='button' className='add-btn btn' 
                         onClick={(e) => addExperience(e) }>
                         Add</button>
                 }

                { (!notSubmitted() &&  notEmpty())   &&
                        <button type='button' className='edit_btn btn' 
                        onClick={ (e) => editExperience(e)  }
                        >Edit</button>
                }  
                
                </div>
            </form>
            
        </div>
    )
}

export default Experience
