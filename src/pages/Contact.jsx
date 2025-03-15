export default function Contact() {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-custom hero-wrap-2"
        style={{
          backgroundImage: "url('images/bg_2.jpg')",
        }}
      >
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <h1 className="mb-3 bread">Contact us</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home / </a>
                </span>{" "}
                <span>Contact us</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row block-9">
            <div className="col-md-4 contact-info bg-light p-4">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <h2 className="h4">Contact Information</h2>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Address:</span> 3625 Dallas Hwy #715, Marietta, GA
                    30064
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel://+17704191200">+1 770 419 1200</a>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">
                      Westcobbparisian@gmail.com
                    </a>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Website:</span>{" "}
                    <a href="https://nailsalonparisian.vercel.app/">
                      nailsalonparisian.com
                    </a>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Business Hours:</span>{" "}
                    <ul className="list-unstyled">
                      <li>Monday - Saturday: 10:00 AM - 8:00 PM</li>
                      <li>Sunday: 12:00 PM - 6:00 PM</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <form action="" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.565196938557!2d-84.6621181158996!3d33.95230960407952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f53e83158a679b%3A0x33905fc1d745c16a!2sParisian%20Nail%20Salon!5e0!3m2!1sen!2sus!4v1741921363948!5m2!1sen!2sus"
        width="1520.8"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
