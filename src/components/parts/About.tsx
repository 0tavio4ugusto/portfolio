import eu from "../../assets/eu.png"


const About = () => {
  return(
    <div className="h-screen bg-gradient-radial from-purple-700 via-purple-950 to-gray-950 flex flex-col justify-evenly">
      <div className="flex flex-row justify-evenly">
      <img className=" scale-105 " src={eu} alt="" />
      <div className="w-1/4 text-justify self-center scale-125">
        <p className=" text-purple-300 text-5xl font-black text-center self-center"> - ABOUT ME - </p>
        <p className="font-black text-gray-200 mt-12 w-11/12">
        Hello, my name is Otavio Augusto, I'm brazilian, I'm currently 21 years old and I'm spending 100% of my time trying to enhance my skills in development, mainly focusing in Web using <span className="text-teal-300">Tailwind </span>,
          <span className="text-blue-400">TypeScript </span> /
          <span className="text-yellow-300"> JavaScript</span> and
          <span className="text-cyan-300"> React</span>.
          I constantly seek to evolve my skills and knowledge, both in different areas of technology and within the realm of front-end development! Last but not least, I have a professional desire to work in the field with a team so that I can learn not only through practice but also from the diverse knowledge and experiences of my professional colleagues!  
        </p>
      </div>
      </div>

    </div>
  )
}

export default About