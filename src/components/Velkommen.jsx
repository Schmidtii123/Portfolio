export default function Velkommen() {
  return (
    <div className="velkommen" id="velkommen">

      <div className="velkommen_text">
        <h1>Hej og velkommen til min portefølje!</h1>
        <p>Jeg er Emil Schmidt, men de fleste kalder mig bare Schmidt eller Schmidtii. Her har du mulighed for at udforske mine projekter. Jeg håber, du vil finde inspiration og nyde din tid her. Tak fordi du kigger forbi!</p>
        <h2>Mine færdigheder</h2>
        <div className="logos">
          <div className="logo-container">
            <img src="./html_logo.png" alt="HTML5 logo" />
          </div>
          <div className="logo-container">
            <img src="./css3_logo.png" alt="CSS3" />
          </div>
          <div className="logo-container">
            <img src="./javascript-logo.png" alt="JavaScript Logo" />
          </div>
          <div className="logo-container">
            <img src="./react-logo.webp" alt="React Logo" />
          </div>
          <div className="logo-container">
            <img src="/MySQL.svg" alt="MySQL Logo" />
          </div>
          <div className="logo-container">
            <img src="/git-logo.png" alt="Git Logo" />
          </div>
          <div className="logo-container">
            <img src="/vue.png" alt="Vue.js Logo" />
          </div>
          <div className="logo-container">
            <img src="/mongodb.png" alt="Mongodb Logo" />
          </div>
          <div className="logo-container">
            <img src="/php.png" alt="PHP Logo" />
          </div>
          <div className="logo-container">
            <img src="/next-js.png" alt="next.js Logo" />
          </div>
          <div className="logo-container">
            <img src="/react-router.png" alt="react router Logo" />
          </div>
          <div className="logo-container">
            <img src="/typescript.png" alt="typescript Logo" />
          </div>
          <div className="logo-container">
            <img src="/node-js.png" alt="node.js Logo" />
          </div>
          <div className="logo-container">
            <img src="/github.png" alt="github Logo" />
          </div>
        </div>
      </div>

      <div className="img_container">
        <img className="velkommen_img" src="./velkommen_forside.png" alt="Billede af mig(Emil Schmidt)" />
      </div>
    </div>
  )
}