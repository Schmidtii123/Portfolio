export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_indhold">

            <div className="footer_sections"> 
            <h3>Kontakt</h3>
            <p>schmidtii2000@gmail.com</p>
            <p>Telefon nr: 29886411</p>
            </div>
            <div className="footer_sections">
                <h3>Adresse</h3>
                <p>Dalgas Avenue</p>
                <p>Aarhus C 8000</p>
            </div>
            <div className="footer_sections">
                <h3>Sociale Medier</h3>
                <div className="some">
      <a href="https://www.instagram.com/schmidtii00">
        <img className="some_img" src="./instagram.png" alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/in/emil-schmidt-7656a9215/">
        <img className="some_img" src="./linkedin.png" alt="Linkedin" />
      </a>
      <a href="https://www.facebook.com/emil.schmidt.90/">
        <img className="some_img" src="./facebook.png" alt="Facebook" />
      </a>
    </div>
       </div>
            </div>
        
        </footer>
    );

}