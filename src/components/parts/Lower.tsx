import Projectx from "../Projectx"
import projeto1 from "../../assets/projeto1.png"
import projeto2 from "../../assets/projeto2.png"
import projeto3 from "../../assets/projeto3.png"

const Lower = () => {
  return(
    <div className="h-auto bg-purple-200">
      <div className="h-full flex flex- flex-wrap justify-evenly">
        <Projectx Repo="https://github.com/0tavio4ugusto/PLURALSIGHT" Link='https://648a555334a1a41b3dabe242--zippy-gingersnap-a3d813.netlify.app' path={projeto1} UpperText='CASE STUDY' LowerText='Login screen designed to work seamlessly on both desktop/tablets and mobile platforms.'/>
        <Projectx Repo="https://github.com/0tavio4ugusto/explorer-lab-CC" Link='https://explorer-qw99rfgjn-0tavio4ugusto.vercel.app' path={projeto2} UpperText='REACT AND NODE STUDY' LowerText="Project developed during an NLW event by RocketSeat, focused on studying React and Node. Additionally, I included a study on the Luhn algorithm used to verify the authenticity of the user's card." />
        <Projectx Repo="https://github.com/0tavio4ugusto/twitch-clone" Link='https://64a04bda6243bb42c140afa7--lovely-taffy-076bef.netlify.app' path={projeto3} UpperText='LAYOUT STUDY' LowerText='Recreation of the streaming page from the twitch.tv website, just a practice to put my Tailwind knowledge to the test.'/>
      </div>
      <div>
        
      </div>
    </div>

  )
}

export default Lower