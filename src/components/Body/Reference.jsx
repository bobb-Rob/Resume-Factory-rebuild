import react, { useState } from "react"

const Reference = ({ allData, addData, deleteData, editData, submitForm, onChange, sectionHeading }) => {

    const [ provided, setProvided] = useState('');

    const onRadioChange = (e) => {
       setProvided(e.target.value)
    }

    const notEmpty = () => allData.length > 0 ? true: false;

    const notSubmitted = () => {
        let getStatus = allData.some((reference) =>
        reference.submitted === false); 
        if(getStatus){
            return true;
        }else{
            return false;
        }           
    }      
            

        return (
            <section className='educationSection' >
            <form id='skillForm' onSubmit={(e) => submitForm(e)} >
                <h2>{sectionHeading}</h2> 

                <div>
                    <p>Do you wish to supply your reference now</p>
                    <label  htmlFor="yes">
                        Yes
                        {"    "}
                        <input type='radio' name="provided" id="yes" value='yes' 
                        checked={provided === 'yes'} 
                        onChange={onRadioChange}
                        />
                    </label>
                    {"    "}
                    <label htmlFor="no">
                        No
                        {"    "}
                        <input type='radio' name="provided" id="no" value='no' 
                        checked={provided === 'no' }
                        onChange={onRadioChange}
                         />
                    </label>                
                </div>            
            
            
            { (provided === 'yes')  &&  <div>

                {notSubmitted() && allData.map((reference) => {
                    return (
                        <div className='educationInputs' key={reference.id} >   

                            <input type='text' id={reference.id} placeholder='Name of reference' 
                            className='skill1 education' name='refName'
                            value={reference.refName} onChange={(e) => onChange(e, reference.id)}   
                            />

                            <input type='text' id={reference.id} placeholder='Place of employment' 
                            className='reference' name='employment'
                            value={reference.employment} onChange={(e) => onChange(e, reference.id)}  
                            /> 

                            <input type='tel' id={reference.id} placeholder='Phone number' 
                            className='reference' name='phoneNumber'
                            value={reference.phoneNumber} onChange={(e) => onChange(e, reference.id)}  
                            /> 
                            
                            <input type='email' id={reference.id} placeholder='Place of employment' 
                            className='reference' name='email'
                            value={reference.email} onChange={(e) => onChange(e, reference.id)}  
                            /> 

                            <button className='delete_btn btn' type='button'
                        onClick={() => deleteData(reference.id)}
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

                        <button type='button' className='edit_btn btn'
                         onClick={(e) => addData(e) }
                        >Add</button>                       
                    </div>
                }
                 {(!notEmpty() && !notSubmitted())   && 
                         <button type='button' className='edit_btn btn' 
                         onClick={(e) => addData(e) }>
                         Add</button>
                 }

                { (!notSubmitted() &&  notEmpty())   &&
                        <button type='button' className='edit_btn btn' 
                        onClick={ (e) => editData(e)  }
                        >Edit</button>
                }                         
                       
                </div>
            </div> 
            }
            </form>
            
        </section>
        )
    }


export {Reference}