import Projectx from "../Projectx"
import projeto1 from "../../assets/projeto1.png"
import projeto2 from "../../assets/projeto2.png"
import projeto3 from "../../assets/projeto3.png"

const Lower = () => {
  return(
    <div className="h-auto bg-purple-200">
      <div className="h-full flex flex- flex-wrap justify-evenly">
        <Projectx Repo="https://github.com/0tavio4ugusto/PLURALSIGHT" Link='https://648a555334a1a41b3dabe242--zippy-gingersnap-a3d813.netlify.app' path={projeto1} UpperText='ESTUDO DE CASO' LowerText='Tela de login feita para funcionar tanto em desktop/tablets quanto em plataformas mobile'/>
        <Projectx Repo="https://github.com/0tavio4ugusto/explorer-lab-CC" Link='https://explorer-qw99rfgjn-0tavio4ugusto.vercel.app' path={projeto2} UpperText='ESTUDO DE NODE E REACT' LowerText='Projeto feito em uma NLW evento da RocketSeat o qual era voltado para estudo de REACT e NODE. (com uma adição minha, um estudo sobre o algoritimo de LUHM usado para fazer a verificação da autenticidade do cartão do usuario)' />
        <Projectx Repo="https://github.com/0tavio4ugusto/twitch-clone" Link='https://64a04bda6243bb42c140afa7--lovely-taffy-076bef.netlify.app' path={projeto3} UpperText='ESTUDO DE LAYOUT' LowerText='Recriação da pagina de streaming do site twitch.tv, apenas uma pratica para colocar meus conhecimentos com Tailwind a prova'/>
      </div>
      <div>
        
      </div>
    </div>

  )
}

export default Lower