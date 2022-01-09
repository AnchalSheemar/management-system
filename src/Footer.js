import image4 from './images/app-store-download.png';
function Footer(){
    return(
        <div className="footer-main-div">
        <div className="footer-div1">
            <div className="div-01">
                <h1 className='h11'>CONTATTI</h1>
                <h3>Email</h3>
                <h3>Facebook</h3>
                <h3>Twitter</h3>
            </div>
            <div className="div-02"><br/><br/><br/>
            <h3>mail@goodmorningitalia.it</h3>
                <h3>Facebook.com/goodmorningIT</h3>
                <h3>Twitter.com/goodmorningIT</h3>
            </div>
            

        </div>
        <div className="footer-div2">
            <div className="div-010"><h1 className="h11">GOOD MORNING ITALIA SRL</h1></div>
        <div className="div-001">
                
                <h3>Condizioni e Privacy</h3>
                <h3>(Riproduzione riservata)</h3>
                <h3>(ISSN 2532-1927)</h3>
            </div>
            <div className="div-002">
           <img src={image4}/>
            </div>
        </div>
        </div>
    )
}
export default Footer;