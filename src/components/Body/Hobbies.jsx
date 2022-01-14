import React from 'react'

const Hobby = (props) => {
    const { allHobbies, addHobby, deleteHobby, editHobbies, submitHobbyForm, 
        onChange, sectionHeading, placeHolder } = props

    const notEmpty = () => allHobbies.length > 0 ? true: false;

        const notSubmitted = () => {
            let getStatus = allHobbies.some((hobby) =>
            hobby.submitted === false); 
            if(getStatus){
                return true;
            }else{
                return false;
            }           
        }      



    return (
        <div id='section-div' >
              <h2 className='section-header'  >{sectionHeading}</h2> 

            <form id='hobbyForm' onSubmit={(e) => submitHobbyForm(e)} >              

                {notSubmitted() && allHobbies.map((hobby) => {
                    return (
                        <div className='educationInputs' key={hobby.id} >                           
                            <input type='text' id={hobby.id} placeholder= {placeHolder} 
                            className='Hobby1 education' name='hobby'
                            value={hobby.hobby} onChange={(e) => onChange(e, hobby.id)}   /> 

                            <button className='delete_btn btn' id='delete-btn'  type='button'
                            onClick={() => deleteHobby(hobby.id)}
                            >Delete</button>                            
                            </div>
                            )  
                        })
                }
                                
                <div className='experience_submit_edit_btn' >
                {(notEmpty() && notSubmitted())  &&
                    <div>
                        <button form='hobbyForm' type='submit' className='submit_btn btn'                        
                        >Submit this Section</button>

                        <button type='button' className='add-btn btn'
                         onClick={(e) => addHobby(e) }
                        >Add</button>                       
                    </div>
                }
                 {(!notEmpty() && !notSubmitted())   && 
                         <button type='button' className='add-btn btn' 
                         onClick={(e) => addHobby(e) }>
                         Add</button>
                 }

                { (!notSubmitted() &&  notEmpty())   &&
                        <button type='button' className='edit_btn btn' 
                        onClick={ (e) => editHobbies(e)  }
                        >Edit</button>
                }                          
                       
                </div>
            </form>
            
        </div>
    )
}

export default Hobby
