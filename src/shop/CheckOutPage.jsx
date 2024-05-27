import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../components/modal.css'
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const[show,setShow] = useState(false);
    const[activeTab,setactiveTab] = useState("visa");

    //handle tab change
    const handleTabchange = (tabId) => {
        setactiveTab(tabId)
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //direct to homepage
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleOrderConfirm = () => {
        alert("Your Order is Placed Successfully!")
        localStorage.removeItem("cart");
        navigate(from,{replace:true})
    }
  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered>
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a href="#Visa"
                      className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                      role='tab'
                      id="visa-tab"
                      data-toggle="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabchange("visa")}>
                      <img src="https://th.bing.com/th/id/OIP.3YgEWAS2jSqIMFbL14rWGgHaDE?w=860&h=357&rs=1&pid=ImgDetMain" alt="" width="80"/>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                  <a href="#Paypal"
                    className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                    id="paypal-tab"
                    data-toggle="tab"
                    role='tab'
                    aria-controls="paypal"
                    aria-selected={activeTab === "paypal"}
                    onClick={() => handleTabchange("paypal")}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/440px-PayPal.svg.png" alt="" width="80"/>
                  </a>
                </li>

                </ul>
                {/*content*/}
                <div className="tab-content" id="myTabContent">
                    {/*visa content*/}
                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active":""}`}
                        id="visa"
                        role='tabpanel'
                        aria-labelledby='visa-tab'>
                    {/*visa tab content*/}    
                    <div className='mt-4 mx-4'>
                        <div className='text-center'>
                            <h5>Credit card</h5>
                        </div>
                        <div className='form mt-3'>
                            <div className='inputbox'>
                                <input type='text' name='name' id='name' className='form-control' required />
                                <span>Cardholder Name</span>
                            </div>
                            <div className='inputbox'>
                                <input type='text' name='number' id='number' className='form-control' required  min='1' max='999'/>
                                <span>Card Number</span>
                                <i className='fa fa-eye'></i>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='inputbox'>
                                <input type='text' name='number' id='number' className='form-control' required min='1' max='999' />
                                <span>Expiraton Date</span>
                                </div>
                                <div className='inputbox'>
                                <input type='text' name='number' id='number' className='form-control' required min='1' max='999' />
                                    <span>CVV</span>
                                </div>
                            </div>
                            <div className='px-5 pay'>
                            <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>
                                Order Now
                            </button>
                            </div>
                        </div>
                    </div>    
                        
                        </div>
                    {/*paypal content */}
                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active":""}`}
                    id="paypal"
                    role='tabpanel'
                    aria-labelledby='paypal-tab'>
                     {/*paypal tab content*/}    
                     <div className='mt-4 mx-4'>
                     <div className='text-center'>
                         <h5>Paypal Account Info</h5>
                     </div>
                     <div className='form mt-3'>
                         <div className='inputbox'>
                             <input type='text' name='name' id='name' className='form-control' required />
                             <span>Enter Your Email</span>
                         </div>
                         <div className='inputbox'>
                             <input type='text' name='number' id='number' className='form-control' required  min='1' max='999'/>
                             <span>Your Name</span>
                             
                         </div>
                         <div className='d-flex flex-row'>
                         <div className='inputbox'>
                         <input type='text' name='number' id='number' className='form-control' required 
                            min='1' max='999' />
                         <span>Extra Info</span>
                         </div>
                         <div className='inputbox'>
                         <input type='text' name='number' id='number' className='form-control' required 
                            min='1' max='999' />
                         <span></span>
                         </div>
                         </div>
                         <div className='px-5 pay'>
                         <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>
                             Add Paypal
                         </button>
                         </div>
                     </div>
                 </div> 


                    </div>

                </div>
                  {/*payment disclaimer*/}
                  <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer:</em>
                    In no event Shall payment or partial payment by however for any material or service</p>


              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CheckOutPage
