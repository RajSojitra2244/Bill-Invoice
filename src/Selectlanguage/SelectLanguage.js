import React,{useState} from 'react'
import I18n from './i18n'

function SelectLanguage() {
    const[language,setLanguage] =useState('en')
    const languages = (e) => {
        setLanguage(e.target.value)
    }
   
    localStorage.setItem('language',language)
    return (
        <div>
       
        </div>
    )
}

export default SelectLanguage


