import React, { useState } from "react";
import '../components/style.css'

export default function FruitCounter() {
    const [Ban,setBan] =useState(0) ;
    const [Man,setMan] =useState(0) ;
     return (
        <div className="fluid-container backgroundYellow vh-100">
            <div className="container">
                <div className="bg-white row">
                    <div className="d-flex">Bob Ate {Ban}Bananas and {Man} Mangoes</div>
                    <div className="col-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/2560px-Bananas.svg.png" className="col-6" />
                    <button className="buttonStyle" onClick={()=>setBan(Ban+1)}>Eat Banana</button>
                    </div>
                    <div className="col-6">
                    <img src="https://i.pinimg.com/474x/ee/74/b2/ee74b299cf5ff6883c1a328263832833.jpg" className="col-6" />
                    <button className="buttonStyle" onClick={()=>setMan(Man+1)}>Eat Mango</button>                   
                    </div>
                </div>
            </div>
        </div>

    )
}