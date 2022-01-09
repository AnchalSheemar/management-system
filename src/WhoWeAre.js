import image1 from './images/image-1.png';
function WhoWeAre(){
    return(
        <div className="whoWeAre-main-div">
        <div className="div-1">
        <h3>WHO WE ARE</h3>
        <h1>At work for You</h1>
        <p>Good Morning Italia Arivva Ogni giorno
            nella tua Emailgragie allavoro de oltre 20
            talented giornolistiin tutta Italia.Siamo
            nati nel 2013 da un esperimento e da 
            allora siamo cresciuti properio gragie agli
             abbonati.
        </p>
        <button className="btn">Scopri di piu</button>
        </div>
        <div className="div-2">
        <img className='img-1' src={image1}/>
        </div>
        </div>
    );
}
export default WhoWeAre;