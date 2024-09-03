export default function ContactForm() {
  const handleSubmit = (e) => {
    // e.preventDefault();
    // post(route("submit.form"), data);
    console.log(e);
  };

  return (
    <div className="contact__form-container">
      <form className="contact__form" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="form 1" />
        <div className="contact__form-field">
          <label className="contact__form-label" htmlFor="name">
            Name
          </label>
          <input required placeholder="Enter Your Name" type="text" className="contact__form-input" name="name" id="name" />
        </div>
        <div className="contact__form-field">
          <label className="contact__form-label" htmlFor="email">
            Email
          </label>
          <input required placeholder="Enter Your Email" type="email" className="contact__form-input" name="email" id="email" />
        </div>
        <div className="contact__form-field">
          <label className="contact__form-label" htmlFor="message">
            Message
          </label>
          <textarea required cols="30" rows="10" className="contact__form-input" placeholder="Enter Your Message" name="message" id="message"></textarea>
        </div>
        <button
          type="submit"
          className="btn btn--theme contact__btn"
          // disabled={processing}
        >
          {/* {processing ? "Submitting..." : "SUBMIT"} */}
        </button>
      </form>
    </div>
  );
}
