import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import copy from '../images/copy.png'
import textbox from '../images/Textbox.png'
import result from '../images/Result.png'
import amazon from '../images/amazon_logo.png'
import product1 from '../images/Product_1.png'
import product2 from '../images/Product_2.png'
import product3 from '../images/Product_3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import '../components/style.css'

export default function First() {
    return (
        <>
            <div className="container-fluid" id="bg2">
                <div className="container py-5">
                    <div className="row gap-4 d-flex flex-row justify-content-center">
                        <div className="text-center heroTitle"><h2>How to try demo?</h2></div>
                        <div className="col-lg-3 rounded-2 p-2">
                            <div className="d-flex justify-content-center mb-4"> <img src={copy} alt="copyicon" />
                            </div>
                            <div className="d-flex flex-row justify-content-center gap-3 smallCard p-3">

                                <div className="numCount"> <h2>1</h2>
                                </div>
                                <div className="countContent">Copy ingredients of a product from an ecommerce store
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  rounded-2 p-2">
                            <div className="d-flex justify-content-center mb-4"> <img src={textbox} alt="copyicon" />
                            </div>
                            <div className="d-flex flex-row justify-content-center gap-3 smallCard p-3">
                                <div className="numCount"> <h2>2</h2>
                                </div>
                                <div className="countContent">Paste it in the Demo input field
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 rounded-2 p-2">
                            <div className="d-flex justify-content-center mb-4"> <img src={result} alt="copyicon" />
                            </div>
                            <div className="d-flex flex-row justify-content-center gap-3 smallCard p-3">
                                <div className="numCount"> <h2>3</h2>
                                </div>
                                <div className="countContent">Hit “Analyze” & See results
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export function Second() {
    return (<>
        <div className="container-fluid">
            <div className="container py-5">

                <div className="row d-flex flex-row justify-content-center">
                    <div className="text-center heroTitle"><h2>Ingredient extraction demo</h2>
                        <h4 className="subTitle">Enter Your Own Text or Pick a real product in Our Examples</h4>
                    </div>
                    <div className="col-lg-4 rounded-2 p-4 productCardSelect">
                        <div >
                            <div className="d-flex gap-3">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={product1} alt="product1" className="productDisplay" />
                                </div>
                                <div>
                                    <h5 className="cardTitle">Nature Made Multivitamin Tablets</h5>
                                    <div className="d-flex justify-content-between">

                                        <div className="d-flex flex-column">
                                            <span>From</span>
                                            <img src={amazon} alt="amzlogo" />
                                        </div>

                                        <div className="d-flex  align-items-end">
                                            <button className="buttonStyle"><FontAwesomeIcon icon={faCopy} /> Use String</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bg-white rounded-2 p-4 productCard ">
                        <div className="d-flex gap-3">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={product2} alt="product1" className="productDisplay" />
                            </div>
                            <div>
                                <h5 className="cardTitle">Bronson Biotin 10,000 MCG Tablets</h5>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="d-flex flex-column">
                                            <span>From</span>
                                            <img src={amazon} alt="amzlogo" />
                                        </div>
                                    </div>
                                    <div className="d-flex  align-items-end">
                                        <button className="buttonStyle"><FontAwesomeIcon icon={faCopy} /> Use String</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bg-white rounded-2 p-4 productCard ">
                        <div className="d-flex gap-3">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={product3} alt="product1" className="productDisplay" />
                            </div>
                            <div>
                                <h5 className="cardTitle">Whole Food Multivitamin for Women</h5>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="d-flex flex-column">
                                            <span>From</span>
                                            <img src={amazon} alt="amzlogo" />
                                        </div>
                                    </div>
                                    <div className="d-flex  align-items-end">
                                        <button className="buttonStyle"><FontAwesomeIcon icon={faCopy} /> Use String</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center gap-4">
                        <textarea rows="4" cols="120" id="textArea">
                            "Cellulose Gel, Corn Starch, Maltodextrin, Croscarmellose Sodium, Hypromellose, Silicon Dioxide, Magnesium Stearate, Gelatin, and Polyethylene Glycol. Niacin, Vitamin B6, Folic Acid, Vitamin B12, Biotin (B7), Pantothenic Acid, Vitamin A, Vitamin C, Vitamin D3, Vitamin E"
                        </textarea>
                        <div className="d-flex flex-column align-items-start gap-2">
                            <button className="buttonStyle1 "><FontAwesomeIcon icon={faClose} /> Clear</button>
                            <button className="buttonPrimary">Analyze</button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </>)
}