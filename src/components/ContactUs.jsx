function ContactUs() {
  return (
    <form className="contactUs-container" id="ContactUs">
      <header className="contactUs-header">Contact Us</header>
      <p className="contactUs-description">
        If you have any further inquires, please let us know by filling the form
        below
      </p>
      <div className="input-forms">
        <div className="form-first-last-name">
          <div className="form-first-name">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" />
          </div>

          <div className="form-last-name">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" />
          </div>
        </div>

        <div className="form-email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className="form-text-area">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="text-area"
          ></textarea>
        </div>
      </div>

      <button className="form-submit-btn">Submit</button>
    </form>
  );
}

export default ContactUs;
