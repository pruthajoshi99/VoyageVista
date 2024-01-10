import React, { useRef, useState } from 'react';
import '../assets/css/Modal.css';

function Modal({handlePayment}) {
  const modalRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [travelDate, setTravelDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [travelDateError, setTravelDateError] = useState('');
  const [globalError, setGlobalError] = useState('');

 


  const handleName = (e) => {
    if(!e.target.value.trim()){
      setNameError('Please enter name.');
    
    }else{
      setName(e.target.value);
      setNameError('');
    }
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    if (!e.target.value.includes('@') || !e.target.value.trim()) {
      setEmailError('Please enter a valid email address with @.');
      setEmail(e.target.value);
    } else {
      setEmail(e.target.value);
      setEmailError('');
    }
    setSubmitted(false);
  };

  const handleTravelers = (e) => {
    setTravelers(parseInt(e.target.value, 10));
    setSubmitted(false);
  };

  const handleTravelDate = (e) => {
    if(!e.target.value){
      setTravelDateError('Please select Travel Date');
    }else{
      setTravelDate(e.target.value);
      setTravelDateError('');
    }
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
     
      if(!e.target.username.value && !e.target.useremail.value && !e.target.usertraveldate.value){
        setGlobalError('Fill in all the fields');
        setSubmitted(false);
      }

      else if(!e.target.username.value ){
        setNameError('Please enter name.');
      }

      else if(!e.target.useremail.value){
        setEmailError('Please enter a valid email address with @.');
      }

      else if(!e.target.usertraveldate.value){
        setTravelDateError('Please select Travel Date');
      }
      
      else{
        setSubmitted(true);
        setGlobalError('');
        handlePayment(50+2000 * travelers);
        //setCurrentPayment
        modalRef.current.close();
      }
  };



  return (
    <div className="iternary-modal-container">
      <dialog className="iternary-modal" ref={modalRef}>

        <h3 className="heading-modal">To Know more about discounts and Iternary!</h3>
        <span>Required Elements are marked by *</span>

        <form className="formbox" action="/Confirm" onSubmit={handleSubmit}>  
          
          <div className="information">
          {globalError && <p className='error-message'>{globalError}</p>}
            
            <label className="modal-name" htmlFor='user-name'>Name: *</label>
            <input onChange={handleName} id='user-name' className="inputname" name='username' value={name} type="text" />
            {nameError && <p className='error-message'>{nameError}</p>}

            <label htmlFor='user-email' className="modal-email">Email: *</label>
            <input onChange={handleEmail} className="inputemail" name='useremail' value={email} id='user-email' type="text" />
            {emailError && <p className='error-message'>{emailError}</p>}

            <label htmlFor='no-travelers' className="modal-travelers">Number of Travelers</label>
            <input
              onChange={handleTravelers}
              className="inputtravelers"
              name='unotravelers'
              value={travelers}
              id='no-travelers'
              type="number"
              min="1"
            />

            <label htmlFor='user-traveldate' className="modal-travelDate">Travel Date: *</label>
            <input onChange={handleTravelDate} className="inputtravelDate" name='usertraveldate' value={travelDate} id='user-traveldate' type="date" />
            {travelDateError && <p className='error-message'>{travelDateError}</p>}

            <div className='reservation-card'>
                <div className="pricing">
                    <span>
                    ${2000} x {travelers}{" "}
                    {travelers === 1 ? "guest" : "guests"}
                    </span>
                    <span>
                    ${2000 * travelers}
                    </span>
                </div>
                
                <div className="pricing">
                    <span>Service Fee</span>
                    <span>$ 50</span>
                </div>
                <hr className="solid" />
                <div className="total-pricing">
                    <h3>Total</h3>
                    <h3>
                    $
                    {50 +
                        2000 * travelers}
                    </h3>
                </div>
            </div>
          </div>

          <div className="modal-buttons">
            <button type="submit" className="confirm">
              Confirm
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                handlePayment(0);
                modalRef.current.close();
              }}
              className="cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>

      <button
        className="open-modal"
        onClick={() => {
            modalRef.current.showModal();
        }}
      >
        More Details
      </button>
    </div>
  );
}

export default Modal;
