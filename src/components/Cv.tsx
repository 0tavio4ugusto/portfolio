import PdfCv from "../assets/Currículo-Otavio-Augusto.pdf"  

const Cv = () =>{
  return(
    <a className='fill-yellow-200 px-5 hover:animate-pulse cursor-pointer hover:scale-125 transition' href={PdfCv} target='#'>
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm.256 11h-8v-1h8v1zm4-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/></svg>
    </a>
  )
}

export default Cv