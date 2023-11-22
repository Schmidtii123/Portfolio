export default function Velkommen(){
    return(
        <div className="velkommen" id="velkommen">

        <div className="velkommen_text">
      <h1>Hej og velkommen til min portefølje!</h1>
      <p>Jeg er Emil Schmidt, men de fleste kalder mig bare Schmidt eller Schmidtii. Her har du mulighed for at udforske mine projekter. Jeg håber, du vil finde inspiration og nyde din tid her. Tak fordi du kigger forbi!</p>
         <h2>Mine færdigheder</h2> 
        <div className="logos">
          <img src="./html_logo.png" alt="HTML5 logo" />
          <img src="./css3_logo.png" alt="CSS3" />
          <img src="./javascript_logo.png" alt="JavaScript Logo" />
          <img src="./react_logo.png" alt="React Logo" />
        </div>
        </div>
  
        <div className="img_container">
        <img className="velkommen_img" src="./velkommen_forside.png" alt="Billede af mig(Emil Schmidt)"/>
        </div>
        </div>
    )
}