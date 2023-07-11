const Projectx = (props:any) => {
  return(

      <div className="m-5 mx-20 bg-black rounded-full bg-opacity-5 flex flex-row justify-around min-w-min"> 
        <a className="w-3/5 h-auto cursor-pointer hover:scale-110 transition-all flex-[1_1_0%] " href={props.Link} target="_blank">
        <img className="" src={props.path} alt="" />
        </a>

        <div className="flex flex-col justify-center text-purple-900 text-2xl font-black flex-[1_1_0%]">
          <div className="self-center leading-10">
            {props.UpperText}
          </div>
          <div className="flex-wrap self-center w-4/5 text-center text-lg mt-4 text-purple-700">
            {props.LowerText}
          </div> 
        </div>  
            
      </div>
      

  )
}

export default Projectx