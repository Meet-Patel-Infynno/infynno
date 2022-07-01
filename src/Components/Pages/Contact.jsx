import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="mb-3 py-4">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
            <button type="button" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
