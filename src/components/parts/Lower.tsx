import Projectx from "../Projectx"

const Lower = () => {
  return(
    <div className="h-auto bg-purple-200">
      <div className="h-full flex flex- flex-wrap justify-evenly">
        <Projectx Link='https://648a555334a1a41b3dabe242--zippy-gingersnap-a3d813.netlify.app' path='src\assets\projeto1.png' UpperText='ESTUDO DE CASO' LowerText='Tela de login feita para funcionar tanto em desktop/tablets quanto em plataformas mobile'/>
        <Projectx Link='https://explorer-qw99rfgjn-0tavio4ugusto.vercel.app' path='src\assets\projeto2.png' UpperText='ESTUDO DE NODE E REACT' LowerText='Projeto feito em uma NLW evento da RocketSeat o qual era voltado para estudo de REACT e NODE. (com uma adição minha, um estudo sobre o algoritimo de LUHM usado para fazer a verificação da autenticidade do cartão do usuario)' />
        <Projectx Link='https://64a04bda6243bb42c140afa7--lovely-taffy-076bef.netlify.app' path='src\assets\projeto3.png' UpperText='ESTUDO DE LAYOUT' LowerText='Recriação da pagina de streaming do site twitch.tv, apenas uma pratica para colocar meus conhecimentos com Tailwind a prova'/>
      </div>
      <div>
        
      </div>
    </div>

  )
}

export default Lower