
function PricesUnbeatable(){
    return(
       
        <div className="price-Main-div">
        <h1 className='price-h1'>Our Prices Are Unbeatable</h1>
        <p className='price-p'>with a few cents a day, you can be informed in a simple way.quality,<br/>
             without chatter.</p>
             <div className='monthly-div'>
                 <h1 className="monthly-h">Monthly</h1><br/>
                 <hr/>
                 <p>Try Free for 30 days.then,if you choose to subscribe 299 per month</p>
                 <button className="btn1">Free Trial</button>
             </div>
             <div className='annual-div'>
             <h1 className="annual-h">Annual</h1>
             <button className="save-btn">Save 17%</button><hr/>
             
             <p>Try Free for 30 days.then,if you choose to subscribe 29,99 per year (save 5.89 per year)</p>
             <button className="btn2">Free Trial</button>
             </div>
             <div className="lifeTime-div">
             <h1 className="lifeTime-h">LifeTime</h1><br/><hr/>
             <p>99,99 one-off forever</p>
             <button className="btn3">Free Trial</button>
             </div>
        </div>
        
    );
}
export default PricesUnbeatable;


