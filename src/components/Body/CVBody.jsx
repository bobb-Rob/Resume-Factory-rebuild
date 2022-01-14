import React, {useState} from 'react';
import PersonalInfo from './personalInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Hobby from './Hobbies';
import { Reference } from './Reference';
import uniqid from "uniqid";
import './body.css'

const CVBody = () => {

  const [ personalInfo, setPersonalInfo] = useState({
          title: '',      
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
          linkedIn: '',
          instagram: '',          
          personalSummary: '',
          submitted: false      
  })

    const [education, setEducation] = useState([{
        universityName: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',            
        id: uniqid(),
        submitted: false,
    },])

    const [experience, setExperience] = useState([{ 
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
            id: uniqid(),           
            submitted: false,
        },
    ])

    const [skills, setSkills] = useState([
        {   skill: '',
            id: uniqid(),
            submitted: false,
         },{
            skill: '',
            id: uniqid(),
            submitted: false,
         },
    ])

    const [hobbies, setHobbies] = useState([
        {   hobby: '',
            id: uniqid(),
            submitted: false,
         },{
            hobby: '',
            id: uniqid(),
            submitted: false,
         },
    ])


const [references, setReferences] = useState([{
    refName: '',
    employment: '',
    phoneNumber: '', 
    email: '',               
    id: uniqid(),
    submitted: false,
 },])



    const handleChange = (e) => {
        const {name, value} = e.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value,
        })
        console.log(personalInfo)
    }

    const onPersonalInfoSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        setPersonalInfo({
            ...personalInfo,               
            submitted: true,
            })
    }


    const editForm = () => {
        setPersonalInfo({
            ...personalInfo,               
            submitted: false,
            })
    }


   const onChangeEducation = (e, id) => {
    const {name, value } = e.target
    const newEducation = education.map((eduItem) => {
        if(eduItem.id === id){
            return {...eduItem, [name]: value }
        }
        return eduItem
    })
    setEducation([...newEducation])        
    }


    const addEducation = () => {
        setEducation([
            ...education, {
                universityName: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: '',            
                id: uniqid(),
                submitted: false,
            },
        ])
    }

    const deleteEducation = (id) => {
        const newEducation = education.filter((educationItem) => educationItem.id !== id);
        setEducation([...newEducation]);
    }


    const  onEducationSubmit = (e) => {
        e.preventDefault();
        setEducation(education.map((edu) => {
            return {...edu, submitted: true}
        })) 
        console.log('submitted clicked')         
    }

    const editEducation = (e) => {
        e.stopPropagation();
        setEducation(education.map((edu) => {
            return {...edu, submitted: false}
        }))
        console.log(education)
        console.log('edit-btn clicked') 
    }

    const onExperienceChange = (e, id) => {
        const {name, value } = e.target
        const newExperience = experience.map((expi) => {
        if(expi.id === id){
            return {...expi, [name]: value }
        }
        return expi
    })
    setExperience([...newExperience])
    }

    const addExperience = () => {
        setExperience([...experience,{ 
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
            id: uniqid(),           
            submitted: false,
        },])
    }

    const onDeleteExperience = (id) => {
        const newExperience = experience.filter((experience) => experience.id !== id);
        setExperience([...newExperience]);
    }

    const onExperienceSubmit = (e) => {
        e.preventDefault();
        setExperience(experience.map((expi) => {
            return {...expi, submitted: true}
        }))
    }

    const editExperience = () => {
        setExperience(experience.map((expi) => {
            return {...expi, submitted: false}
        }))
    }

    const addSkill = () => {
        setSkills([...skills,
            {   skill: '',
                id: uniqid(),
                submitted: false,             
        },])
    }


    const onSkillsChange = (e, id) => {
        const {name, value } = e.target
        const newSkill = skills.map((skill) => {
        if(skill.id === id){
            return {...skill, [name]: value }
        }
        return skill
    })
    setSkills([...newSkill])
    }

    const deleteSkill =  (id) => {
        const newSkills = skills.filter((s) => s.id !== id);
        setSkills([...newSkills]);    
    }

    const submitSkillForm = (e) => {
        e.preventDefault();
        setSkills(skills.map((skill) => {
            return {...skill, submitted: true}
        }))
    }
    const editSkill = (e) => {       
        setSkills(skills.map((skill) => {
            return {...skill, submitted: false}
        }))
    }


    const addHobby = () => {
        setHobbies([...hobbies,
            {   hobby: '',
                id: uniqid(),
                submitted: false,             
        },])
    }


    const onHobbiesChange = (e, id) => {
        const {name, value } = e.target
        const newHobbies = hobbies.map((hobby) => {
        if(hobby.id === id){
            return {...hobby, [name]: value }
        }
        return hobby
    })
    setHobbies([...newHobbies])
    }

    const deleteHobby =  (id) => {
        const newHobbies = hobbies.filter((s) => s.id !== id);
        setHobbies([...newHobbies]);    
    }

    const submitHobbyForm = (e) => {
        e.preventDefault();
        setHobbies(hobbies.map((hobby) => {
            return {...hobby, submitted: true}
        }))
    }
    const editHobbies = (e) => {       
        setHobbies(hobbies.map((hobby) => {
            return {...hobby, submitted: false}
        }))
    }

    const onReferenceChange = (e, id) => {
        const { name, value } = e.target;
        const newReferences = references.map((reference) => {
            if(reference.id === id){
                return {...reference, [name]: value}
            }
            return reference;
        })
        console.log(references)
        return setReferences([...newReferences])
    }

    const addReferences = () => {
        setReferences([...references,{
            refName: '',
            employment: '',
            phoneNumber: '', 
            email: '',               
            id: uniqid(),
            submitted: false,
         }])
    }
    
    const handleRefDelete = (id) => {
        const newRefs = references.filter((reference) => reference.id !== id)
        setReferences([...newRefs])
    }
   
    const editRefs = () => {       
        setReferences(references.map((ref) => {
            return {...ref, submitted: false}
        }))
    }
    
    const submitRefs = (e) => {    
        e.preventDefault()   
        setReferences(references.map((ref) => {
            return {...ref, submitted: true}
        }))
    }



    return (
        <div className='CV-container'  >
            <PersonalInfo data={personalInfo}
            handleChange = {handleChange} sectionHeading = 'Personal Information'
            onSubmit = {onPersonalInfoSubmit} editForm = {editForm}
            />

            <Education  allEducation = {education}
            onChange = {onChangeEducation} addEducation = {addEducation}
            deleteEducation = {deleteEducation}  onEducationSubmit = { onEducationSubmit}
            editEducation = {editEducation}
            />

            <Experience experience = {experience} onChange = {onExperienceChange}
            addExperience = {addExperience} onDeleteExperience = {onDeleteExperience}
            onExperienceSubmit = {onExperienceSubmit} editExperience = {editExperience}
                        
            />

            <Skills allSkills = {skills} addSkill = {addSkill}
            onChange = {onSkillsChange} deleteSkill = {deleteSkill}
            submitSkillForm = {submitSkillForm} editSkill = {editSkill}
            sectionHeading = 'Skills' placeHolder = 'Skill'
            />

            <Hobby allHobbies = {hobbies} addHobby = {addHobby}
            onChange = {onHobbiesChange} deleteHobby = {deleteHobby}
            submitHobbyForm = {submitHobbyForm} editHobbies = {editHobbies}
            sectionHeading = "Hobbies" placeHolder = 'Hobby'
            />

            <Reference
            sectionHeading = 'Reference(s)'
            allData = {references} onChange={onReferenceChange}
            addData = { addReferences } deleteData={handleRefDelete}
            editData={editRefs} submitForm={submitRefs}
            />

            <button id='preview-btn' className='btn'  >Preview Resume</button>


            
        </div>
    )
}

export default CVBody
