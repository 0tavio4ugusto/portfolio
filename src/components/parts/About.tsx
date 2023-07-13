import eu from "../../assets/eu.png"


const About = () => {
  return(
    <div className="h-screen bg-gradient-radial from-purple-700 via-purple-950 to-gray-950 flex flex-col justify-evenly">
      <div className="flex flex-row justify-evenly">
      <img className=" scale-105 " src={eu} alt="" />
      <div className="w-1/4 text-justify self-center scale-125">
        <p className=" text-purple-300 text-5xl font-black text-center"> - SOBRE MIM - </p>
        <p className="font-black text-gray-200 mt-12">
          Olá, me chamo Otavio Augusto, tenho 21 anos atualmente estou dedicando 100% do meu tempo em melhorar minhas habilidades em desenvolvimento, Com foco em Web usando <span className="text-teal-300">Tailwind </span>,
          <span className="text-blue-400">TypeScript </span> /
          <span className="text-yellow-300"> JavaScript</span> e
          <span className="text-cyan-300"> React</span>.    
        </p>
        <p className="font-black text-gray-200">
          Busco constante evolução em minhas habilidades e conhecimentos, tanto em diferentes areas da tecnologia quanto dentro da esfera de front-end!
        </p>
      </div>
      </div>

    </div>
  )
}

export default About