import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "37336214-3c55-4b09-a4f2-1e506ada8f91");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out to us through our contact form or find our contact information below. Your feedback, 
                questions and suggestions are valuable to us as we strive to provide exceptional service to our customers.</p>
            <ul>
                <li><img src={mail_icon} alt="" />anjanipurveyorspvtltd@gmail.com</li>
                <li><img src={phone_icon} alt="" />Amit Solanki : 9712149076</li>
                <li><img src={phone_icon} alt="" />Rakesh Parmar : 8866764161</li>
                <li><img src={location_icon} alt="" />Shop No. 4, Anmol Appt, Opp. Virmaya Nagar, <br /> Behrampura, Ahmedabad-380022</li>

            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label>Address</label>
                <textarea name='address' rows="3" placeholder='Enter your address' required/>
                <label>Message</label>
                <textarea name="message" rows="3" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
