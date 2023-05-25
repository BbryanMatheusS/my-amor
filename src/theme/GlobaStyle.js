function GlobalStyle(){
    return(
      <style global jsx>{`
      
      @import url('https://fonts.googleapis.com/css2?family=Playfair:opsz,wght@5..1200,400;5..1200,500;5..1200,700&display=swap');

      @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      :root{
        /* Color Theme Swatches in RGBA */
        --cor1 : #A3000020; 
        --cor2 : #780000; 
        --cor3 : #4A0000; 
        --cor4 : #000000; 
        --cor5 : #B80000; 
      }
     

      

      
      body{
        background-color:var(--cor1) ;
        font-size:18px;
        font-family: 'Barlow', sans-serif;
      }

      h1{
        font-size:4rem;
      }

      header{
        background-color:;
        max-width:1024px;
        margin: auto;
        padding: 10px 0px;
        display: flex;
        flex-direction:column;
        align-items:center;       
      }

      section{
        max-width:1024px;
        margin: auto;        
      }


      footer{
      }

      @media(min-width:1024px){
        header{
          padding: 10px 2rem;
          flex-direction:column;
        }
      }


      @media(min-width:1440px){
        header{
          max-width:1440px;
          flex-direction:column;
        }
        section{
          max-width:1440px;            
        }
      }
  
  
  
      `}</style>
    )
  }
  export default GlobalStyle