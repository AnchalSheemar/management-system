import image2 from './images/image-2.png';
function CompanySubscription(){
    return(
        <div className="companySubscription-main-div">
   
        <div className="div-1">
        <img className='img-1' src={image2}/>
        </div>
        <div className="div-2">
        <h3>COMPANY SUBSCRIPTION</h3>
        <h1>L' informazione di qualita per la tua azienda</h1>
        <p>Good Morning Italia offre anche degli
            abbonamenti aziendali per tenere li tuo
            team di lavoro sempre informato in modo
            semplice.
        </p>
        <button className="btn">Scopri di piu</button>
        </div>
        </div>
    );

}
export default CompanySubscription;