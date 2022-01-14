import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'

const PersonalInfo = (props) => {
    const {data, sectionHeading, handleChange, onSubmit, editForm} = props

    return (
        <div id='section-div' >
            <h2 className='section-header'  >{sectionHeading}</h2>
            {!data.submitted && 
                <form onSubmit={ onSubmit } >
                    <div className='title_fname_lname'>              
                        <input type='text' id='title' placeholder='Title' 
                        className='inputs text_input' name='title' value={data.title}
                        onChange={handleChange}
                        />

                        <input type='text' id='first_name' placeholder='First Name' 
                        className='inputs text_input' name='firstName' value={data.firstName } 
                        onChange={handleChange}
                        required/>

                        <input type='text' id='last_name' placeholder='Last Name' 
                        className='inputs text_input' name='lastName' value={data.lastName} 
                        onChange={handleChange}
                        required />
                    </div>
                    <div className='email_phone_address' > 
                        <input type='email' id='email' placeholder='Email' 
                        className='inputs text_input' name='email' value={data.email} 
                        onChange={handleChange}
                        required />

                        <input type='tel' id='phone_number' placeholder='Phone Number' 
                        className='inputs text_input' name='phoneNumber' 
                         required value={data.phoneNumber}
                        onChange={handleChange}
                        />

                        <input type='text' id='address' placeholder='Address' 
                        className='inputs text_input' name='address' value={data.address} 
                        onChange={handleChange}
                        required />
                    </div>

                    <div className='social_media' >
                        <div>
                        <BsLinkedin  /> <input type='text' id='linkedIn' placeholder='Your LinkedIn handle' 
                        className='inputs text_input' name='linkedIn' value={data.linkedIn} 
                        onChange={handleChange}
                        />                                                        
                        </div>

                        <div>
                        <BsInstagram /> <input type='text' id='instagram' placeholder='Your Instagram handle' 
                        className='inputs text_input' name='instagram' value={data.instagram} 
                        onChange={handleChange}
                        />                            
                        </div>

                    </div>

                    <div  className="personal_summary">
                        <label htmlFor="personal_summary">
                            Personal Summary <br/>

                            <textarea id='personal_summary' name='personalSummary' 
                            value={data.personalSummary} 
                            onChange={handleChange}
                            required />

                        </label>                           
                    </div>


                    <div className='personal_info_submit_edit_btn' >
                        <button type='submit'  className='submit_btn btn' >Submit this Section</button>                       
                        <button type='button'  id='next-btn' className='next_btn btn' >next</button>                       
                    </div>
                </form>
                    }   
            { data.submitted ? <button className='edit_btn btn' onClick={editForm} >Edit</button> : null

}        
            
        </div>
    )
}

export default PersonalInfo
