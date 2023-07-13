const Projectx = (props:any) => {
  return(

      <div className="m-5 mx-20 bg-black rounded-full bg-opacity-5 flex flex-row justify-around min-w-min"> 
        <a className="w-3/5 h-auto cursor-pointer hover:scale-110 transition-all flex-[1_1_0%] " href={props.Link} target="_blank">
        <img className="" src={props.path} alt="" />
        </a>

        <div className="flex flex-col justify-evenly text-purple-900 text-2xl font-black flex-[1_1_0%] ">
          <div className="self-center leading-10">
            {props.UpperText}
          </div>
          <div className="flex-wrap self-center w-4/5 text-justify text-lg mt-4 font-black text-purple-700 ">
            {props.LowerText}
          </div> 

          <a  target="_blank" className="w-1/6 h-12 bg-purple-900 text-yellow-100 flex justify-center rounded-xl self-center cursor-pointer hover:bg-purple-800 hover:scale-110 transition-all" href={props.Git}>
            <p className="self-center text-xl font-black">GITHUB</p>
          </a>

          </div>
        </div>  
            
  )
}

export default Projectx