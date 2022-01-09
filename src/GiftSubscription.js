import image3 from './images/image-3.png';
function GiftSubscription(){
    return(
        <div className="whoWeAre-main-div">
        <div className="div-1">
        <h3>ABBONAMENTO REGALO</h3>
        <h1>Regalo Good Morning Italia</h1>
        <p>I Nostri Abbonamento sono un ottimo
            regalo per essere informati e ricordare
            ogni giorno che volete beme alle persone
            piu care.
        </p>
        <button className="btn">Scopri di piu</button>
        </div>
        <div className="div-2">
        <img className='img-1' src={image3}/>
        </div>
        </div>
    );
}
export default GiftSubscription;