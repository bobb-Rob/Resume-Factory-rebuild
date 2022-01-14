import React from 'react';
import uniqid from "uniqid";

const Education = (props) => {
    const {allEducation, onChange, addEducation, deleteEducation, onEducationSubmit, editEducation } = props

    const alleducation = allEducation.map((education) => {
        return (          
         <div className='educationInputs' key={education.id} >        
                                             
                     <input type='text'  placeholder='University name' 
                     className='universityName education' name='universityName' 
                     value={education.universityName} onChange={ (e) => onChange(e, education.id) }
                     id={uniqid()} required />

                     <input type='text'  placeholder='City' 
                     className='city education' name={'city'} 
                     value={education.city} onChange={ (e) => onChange(e, education.id)}
                     id={uniqid()} required/>

                     <input type='text' placeholder='Degree' 
                     className='degree education' name={'degree'} 
                     value={education.degree} onChange={(e) => onChange(e, education.id)}
                     id={uniqid()} required />   

                     <input type='text'  placeholder='Subject' 
                     className='subject education' name={'subject'} 
                     value={education.subject} onChange={(e) => onChange(e, education.id)}
                     id={uniqid()} required />  

                     <input type='date' placeholder='From' 
                     className='fromDate education' name={'fromDate'} 
                     value={education.from} onChange={(e) => onChange(e, education.id)}
                     id={uniqid()}  />  

                     <input type='date' placeholder='To' 
                     className='toDate education' name={'toDate'} 
                     value={education.to} onChange={(e) => onChange(e, education.id)}
                     id={uniqid()} />    

                      <button type='button' className='btn' id='delete-btn'
                      onClick = {() => { return deleteEducation(education.id); } }
                      >Delete</button>     
                 </div>
         )
     })

     const notEmpty = () => allEducation.length > 0 ? true: false;

     const notSubmitted = function(){
         let getStatus = allEducation.some((education) =>
         education.submitted === false);
         if(getStatus){
             return true
         }else{
             return false
         }           
     }        

     console.log(alleducation)
     console.log(notEmpty())
     console.log('not Submitted is ' + notSubmitted())              


    return (
        <div id='section-div' >  
                <h2 className='section-header' >Education</h2> 
                <form id='cvForm' onSubmit={(e) => onEducationSubmit(e)} >                   
                                                      
                {notSubmitted() && alleducation}
                                     
                <div className='education_submit_edit_btn' >
                    { (notEmpty() && notSubmitted())  &&                       
                            <div>                               
                                <button type='submit' 
                                form='cvForm'  className='submit_btn btn'                        
                                >Submit this Section</button>                               

                                <button type='button' className='add-btn btn' 
                                onClick={(e) => addEducation(e) }>
                                Add</button>
                            </div>                               
                            }                                       
                       
                        { (!notEmpty() && !notSubmitted())   && 
                         <button type='button' className='add-btn btn' 
                         onClick={(e) => addEducation(e) }>
                         Add</button>
                        }

                        { (!notSubmitted() &&  notEmpty())   &&
                                <button type='button' className='edit_btn btn' 
                                onClick={ (e) => editEducation(e)  }
                                >
                                    Edit</button>
                            }                     
                  
                </div>                                   
                   
                </form>
            
        </div>
    )
}

export default Education
