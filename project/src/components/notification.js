import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import '../components/style1.css'

export default function Notification() {
    return (
        <>
            <div className="container ">
                <h1 className="text-center">Notifications</h1>
                <div>
                    <div className="row bg-primary rounded-2 mb-2">
                        <div className="d-flex  bannerText">
                            <div className="d-flex gap-2 justify-content-start align-items-center py-3 px-4"><FontAwesomeIcon icon={faCheckCircle} />Information Message</div>
                        </div>
                    </div>
                    <div className="row bg-success rounded-2 mb-2">
                        <div className="d-flex  bannerText">
                            <div className="d-flex gap-2 justify-content-start align-items-center py-3 px-4"><FontAwesomeIcon icon={faCheckCircle} />Success Message</div>
                        </div>
                    </div>
                    <div className="row bg-warning rounded-2 mb-2">
                        <div className="d-flex  bannerText">
                            <div className="d-flex gap-2 justify-content-start align-items-center py-3 px-4"><FontAwesomeIcon icon={faCheckCircle} />Warning Message</div>
                        </div>
                    </div>
                    <div className="row bg-danger rounded-2 mb-2">
                        <div className="d-flex  bannerText">
                            <div className="d-flex gap-2 justify-content-start align-items-center py-3 px-4"><FontAwesomeIcon icon={faCheckCircle} />Error Message</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}