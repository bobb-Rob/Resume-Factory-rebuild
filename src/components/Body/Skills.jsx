import React from 'react'

const Skills = (props) => {
    const { allSkills, addSkill, deleteSkill, editSkill, submitSkillForm, 
        onChange, sectionHeading, placeHolder } = props

    const notEmpty = () => allSkills.length > 0 ? true: false;

        const notSubmitted = () => {
            let getStatus = allSkills.some((skill) =>
            skill.submitted === false); 
            if(getStatus){
                return true;
            }else{
                return false;
            }           
        }      



    return (
        <div id='section-div' >
              <h2 className='section-header'  >{sectionHeading}</h2> 

            <form id='skillForm' onSubmit={(e) => submitSkillForm(e)} >              

                {notSubmitted() && allSkills.map((skill) => {
                    return (
                        <div className='educationInputs' key={skill.id} >                           
                            <input type='text' id={skill.id} placeholder= {placeHolder} 
                            className='skill1 education' name='skill'
                            value={skill.skill} onChange={(e) => onChange(e, skill.id)}   /> 

                            <button className='delete_btn btn' id='delete-btn'  type='button'
                            onClick={() => deleteSkill(skill.id)}
                            >Delete</button>                            
                            </div>
                            )  
                        })
                }
                                
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

export default Skills
