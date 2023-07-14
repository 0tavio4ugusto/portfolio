import {Send} from 'lucide-react'
import { useState,useEffect } from "react"

const EmailCopy = () =>{
  const [copySuccessMessage, setCopySuccessMessage] = useState('')
  const [instructions, setInstructions] = useState('')
  const [background, setBackground] = useState('')
  const [animation, setAnimation] = useState('')
  const email = 'otavioaugustor17@gmail.com'


  useEffect(() =>{
    const timer = setTimeout(() => {
      setCopySuccessMessage('')
    }, 2000);
    return () => clearTimeout(timer)
  }, [copySuccessMessage], )

  useEffect(() =>{
    const timer = setTimeout(() => {
      setBackground('bg-yellow-100')      
    }, 2000);
    return () => clearTimeout(timer)
  }, [copySuccessMessage])

  useEffect(()=>{
    const timer = setTimeout(() => {
      setAnimation('animate-none')
    }, 2000);
    return () => clearTimeout(timer)
  })

  function copyEmail() {
    navigator.clipboard.writeText(email)
    setCopySuccessMessage(`EMAIL COPIED SUCCESSFULLY!`)
    setInstructions('')
    setBackground('bg-green-200')
    setAnimation('animate-none')
  }

  function showInstruction() {
    if (copySuccessMessage) {

      return
    }
    setInstructions('COPY MY EMAIL CLICKING HERE')
    setBackground('bg-yellow-200')
    setAnimation('animate-textAppear animate-fadeIn ')

  }

  function hideInstruction(){
    setInstructions('')
    setBackground('bg-yellow-100')
    setAnimation('animate-none')

  }

  return(
    <div className={`${background} h-full flex flex-row justify-center items-center transition-all cursor-pointer`}  
    onClick={copyEmail}
    onMouseOver={showInstruction}
    onMouseOut={hideInstruction}>
      <div className={`flex flex-row`}>
        <Send className={`w-24 h-24 text-purple-900 `} />
        <div className='inline-block overflow-hidden self-center'>
          <p className={`text-purple-900 font-black text-2xl self-center ${animation} `}>{copySuccessMessage} {instructions}</p>
        </div>
      </div>

    </div>
  )



}

export default EmailCopy