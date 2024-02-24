import React, { useEffect, useState } from "react";

function Contact() {

const [contactHook,setcontactHook]=useState([])
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    city: "",
    message: "",
  });
  const [con,setCon]=useState([])
  const [message, setMessage] = useState({
    success: false,
    data: "",
  });
useEffect(()=>
{
    setCon(JSON.parse(localStorage.getItem('contacts')))

},[contact])

  const handlesubmit = (e) => {
    e.preventDefault();
   const newArr=[...contactHook, contact];
   setcontactHook(newArr)
  
    localStorage.setItem("Contacts", JSON.stringify(newArr));
    setMessage({
        success:true,
        data:"Your message has been saved"
  });
    setContact({
      fullname: "",
      email: "",
      city: "",
      message: "",
    });
  };
  return (
    <div className="container">
      {
      message.success ? 
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Message</strong> {message.data}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      : null
}
      <form className="row g-3 py-5 w-50 " onSubmit={handlesubmit}>
        <div className="col-md-12">
          <label htmlFor="FullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            onChange={(e) =>
              setContact({ ...contact, fullname: e.target.value })
            }
            value={contact.fullname}
            className="form-control"
            id="FullName"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            value={contact.email}
            className="form-control"
            id="email"
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            onChange={(e) => setContact({ ...contact, city: e.target.value })}
            value={contact.city}
            className="form-control"
            id="city"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            message
          </label>
          <textarea
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
            value={contact.message}
            className="form-control"
            id="message"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
