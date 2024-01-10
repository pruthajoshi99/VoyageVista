import React, { useState } from 'react';
import "../assets/css/Enquiry.css"
import Header from './Header';
import Footer from './Footer';

function Enquiry({onNav, theme, toggleTheme }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: '',
    destination: '',
  });

  const [showDestinationField, setShowDestinationField] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const handleDestinationField = (e)=>{
    const { name, value } = e.target;
    if (name === 'package' && value === 'other') {
        setShowDestinationField(true);
      } else {
        setShowDestinationField(false);
      }
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if(name==='name' && (value!=null || value!=undefined)){
        setNameError('');
    }

    if(name==='email' && value.includes('@')){
        setEmailError('')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let submittedValue=true;;

    
    if(!e.target.name.value.trim()){
        setNameError('Please enter name.');
        submittedValue = false;
    }
    else{
        setNameError('');
    }
        
    if (!e.target.email.value.includes('@') &&!e.target.email.value.trim()) {
        setEmailError('Please enter a valid email address with @.');
        submittedValue = false;
    } 
    else {
        setEmailError('');
    }
    
    setSubmitted(submittedValue);
  };

  return (
    <>
      <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme}/>
      <div className="enquiry-form-container">
        {!submitted ? (
            <>
                <h2 className='form-title'>Contact Form</h2>
                <div className='img-form-container'>
                    <div className="image-section">
                        <img className='img'
                        src="/Images/enquiry.jpg"
                        alt="Enquiry"
                        />
                    </div>
                    
                    <div className="form-content">  
                        <h3>Required Elements are marked by *</h3>
                        <form className='form' onSubmit={handleSubmit}>
                            
                            <label className='name-label' htmlFor="name">Name: *</label>
                            <input className='name-input'
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {nameError && <p className='error-message'>{nameError}</p>}
                            
                        
                                <label className='email-label'  htmlFor="email">Email: *</label>
                                <input className='email'
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    
                                />
                            
                                {emailError && <p className='error-message'>{emailError}</p>}
                            
                            
                            
                            <label className='package-label'  htmlFor="package">Package:</label>
                            <select className='package'
                                id="package"
                                name="package"
                                //value={formData.package}
                                onChange={handleDestinationField}
                                
                            >
                                <option value="">Select a package</option>
                                <option value="package1">Grand Canyon, USA</option>
                                <option value="package2">Banff National Park, Canada</option>
                                <option value="package2">Taj Mahal, India</option>
                                <option value="package2">Swiss Alps, Switzerland</option>
                                <option value="package2">Eiffel Tower, France"</option>
                                <option value="package2">Rocky Mountains, Canada</option>
                                <option value="other">Other</option>
                            </select>
                            
                            {showDestinationField && (
                            <>
                                <label className='destination-label'  htmlFor="destination">Destination:</label>
                                <input className='destination'
                                type="text"
                                id="destination"
                                name="destination"
                                />
                            </>
                            )}
                            <button className='submit-button' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        ) : (
            <div className="thank-you-message">
                <h2>Thank You!</h2>
                <p>Your form has been submitted successfully.</p>
                <img
                    src="/Images/thankyou.jpg"
                    alt="Thank You"
                    className='thankyou-img'
                />
            </div>
        )}
    </div>
    <Footer />
    </>
    
  );
};

export default Enquiry;
