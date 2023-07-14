import Cv from "../Cv"
import Github from "../GitHub"
import Linkedin from "../Linkedin"

const Upper = () =>{
  return(
    <div className='h-screen bg-gradient-radial from-purple-700 via-purple-950 to-gray-950 flex flex-col justify-center font-black'>
    <div className='flex'>
      <div className='flex-[1_0_0%]' ></div>
      <div className='flex-[1_0_0%] text-2xl text-purple-400'> HI 👋 I'M OTÁVIO... </div>
      <div className='flex-[2_0_0%]'></div>
    </div>
    <div className='flex'>
      <div className='flex-[4_0_0%]'></div>
      <div className='flex-[5_0_0%] flex flex-row'>
        <p className='flex-[1_0_0%] text-gray-100 text-9xl tracking-normal scale-125 mr-24'>REACT</p>
        <div className='flex-[1_0_0%] flex flex-row self-center'>
          <Cv/>
          <Github/>
          <Linkedin/>
        </div>
      </div>      
      <div className='flex-[5_0_0%]'></div>
    </div>
    <div className='flex flex-row'>
      <div className='flex-[3_2_0%]'></div>
      <div className='flex-[2_2_0%] text-gray-100 text-9xl tracking-normal scale-125 mr-1'>DEVELOPER</div>
      <div className='flex-[3.7_2_0%]'></div>
    </div>
    <div className='flex flex-row self-end'>
      <div className='flex-[0_0_0%]'></div>
      <div className='flex-[6_0_0%]'>
        <p className='text-purple-400 text-lg mt-5'> ...I'M 21 YEARS OLD, I'M A <span className=" text-gray-100">FRONTEND DEV</span>  WITH 7 MONTHS OF EXPERIENCE WITH FREELANCING</p>
      </div>
      <div className='flex-[4_0_0%]'></div>
    </div>
    
   </div>
  )
}

export default Upper