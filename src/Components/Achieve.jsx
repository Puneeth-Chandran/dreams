import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image_1 from "./Achieve Images/1.png";
import Image_2 from "./Achieve Images/2.png";
import Image_3 from "./Achieve Images/3.png";
import "./Achieve.css";

const Achieve = () => {
  return (
    <div className="achieve mt-5 mb-5">
      
    <h3 class="fw-bold text-center mb-5 Achieve_with_h2 px-4" style={{color:'black'}}>What You'll Achieve with this Program?</h3>
    <div class="container-fluid mb-5 px-4 px-lg-0 Achieve-pro-main py-5">
        <div class="container">
            <div class="row">

               
                <div class="col-lg-5 p-2">
                    <div class="left-pro-box p-3 p-lg-4">
                        <img src={Image_1} class="achive-pro-left-img" alt=""/>
                        <h3 class="mt-4 fw-bold achieve_h3" style={{color:'black'}}>Certification :</h3>
                        <p class="mb-3 lh-base achieve_p fs-3" style={{color:'black'}}>
                            Attain official certification from DesignDreamz, marking your accomplishment 
                            as a certified UI/UX designer.
                        </p>
                    </div>
                </div>

             
                <div class="col-lg-7 p-2 ">
                    <div class="row justify-content-lg-end  align-items-center h-100">

                        <div class="col-lg-11 mb-4 ">
                            <div class="right-pto-box p-3 p-lg-4">
                                <div class="row">
                                    <div class="col-lg-7 order-2 order-lg-1">
                                        <h3 class="mb-2  achieve_h3" style={{color:'black'}} >Career Support:</h3>
                                        <p class="mb-0 achieve_p  fs-4" style={{color:'black'}}>
                                            Receive dedicated career guidance and mentoring from our experts, ensuring you 
                                            are well-prepared for placement opportunities.
                                        </p>
                                    </div>
                                    <div class="col-lg-5 d-flex align-items-center order-1 order-lg-2 mb-4 mb-lg-0">
                                        <img src={Image_2}  class="achive-pro-right-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-11 mt-4">
                            <div class="right-pto-box p-3 p-lg-4">
                                <div class="row">
                                    <div class="col-lg-7 order-2 order-lg-1">
                                        <h3 class="mb-2  achieve_h3" style={{color:'black'}}>Portfolio Enhancement:</h3>
                                        <p class="mb-0 achieve_p  fs-4" style={{color:'black'}}>
                                        Build a compelling portfolio showcasing your real-world projects and achievements throughout the program.
                                        </p>
                                    </div>
                                    <div class="col-lg-5 d-flex align-items-center order-1 order-lg-2 mb-4 mb-lg-0">
                                        <img src={Image_3}  class="achive-pro-right-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Achieve;
