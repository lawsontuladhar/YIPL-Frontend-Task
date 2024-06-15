import React from "react";

function ContactUs() {
  return (
    <form>
      <header>Contact Us</header>
      <p>
        If you have any further inquires, please let us know by filling the form
        below
      </p>
      <input type="text" name="firstName" />
      <input type="text" name="lastName" />
      <input type="email" name="email" />
      <textarea name="message" id=""></textarea>

      <button>Submit</button>
    </form>
  );
}

export default ContactUs;
