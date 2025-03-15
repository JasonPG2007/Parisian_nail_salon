export default function Home() {
  return (
    <>
      <section
        className="hero-wrap home js-fullheight"
        style={{ backgroundImage: "url(/images/bg_1.jpg)", height: "444px" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-10 text-center">
              <div className="icon">
                <span className="flaticon-lotus"></span>
              </div>
              <h1>Spa &amp; Beauty Center</h1>
              <div className="row justify-content-center">
                <div className="col-md-7 mb-3">
                  <p>
                    Relax and rejuvenate at our Spa & Beauty Center with
                    refreshing treatments in a serene setting.
                  </p>
                </div>
              </div>
              <p>
                <a
                  href="https://book.daysmart.com/booking/service?DSID=DC-1387398"
                  className="btn btn-primary p-3 px-5 py-4 mr-md-2"
                  target="_blank"
                >
                  Book now
                </a>
                <a
                  href="contact"
                  className="btn btn-outline-primary p-3 px-5 py-4 ml-md-2"
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section ftco-intro"
        style={{ backgroundImage: "url(/images/intro.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6">
              <div className="heading-section ">
                <h2 className="mb-4">Benefits of Doing Nail &amp; Spa</h2>
              </div>
              <p className="">
                Getting a nail & spa treatment not only enhances your nails'
                beauty but also provides relaxation, reduces stress, and
                improves the health of your hands and feet. Treat yourself to a
                moment of self-care and confidence.
              </p>
              <ul className="mt-5 do-list">
                <li className="">
                  <a href="#treatment">
                    <span className="ion-ios-checkmark-circle mr-3"></span>
                    Nail &amp; Spa promotes relaxation
                  </a>
                </li>
                <li className="">
                  <a href="#treatment">
                    <span className="ion-ios-checkmark-circle mr-3"></span>
                    Nail &amp; Spa helps you improve circulation
                  </a>
                </li>
                <li className="">
                  <a href="#treatment">
                    <span className="ion-ios-checkmark-circle mr-3"></span>
                    Nail &amp; Spa enhances skin health
                  </a>
                </li>
                <li className="">
                  <a href="#treatment">
                    <span className="ion-ios-checkmark-circle mr-3"></span>
                    Nail &amp; Spa helps you boost confidence
                  </a>
                </li>
                <li className="">
                  <a href="#treatment">
                    <span className="ion-ios-checkmark-circle mr-3"></span>
                    Nail &amp; Spa helps support mental clarity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/toenail.webp)" }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Pedicure</h3>
                  <p className="mb-5">
                    Relax and unwind with a professional foot care service.
                    Enjoy a soothing treatment that leaves your toenails
                    polished and your spirit refreshed.
                  </p>
                  <p>
                    <a
                      href="https://book.daysmart.com/booking/service?DSID=DC-1387398"
                      className="btn btn-white px-4 py-3"
                      target="_blank"
                    >
                      {" "}
                      Book A Treatment{" "}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{
                    backgroundImage: "url(images/natural_nail_manicure.jpg)",
                  }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Natural Nail Manicure</h3>
                  <p className="mb-5">
                    Enhance your nails with a gentle touch, bringing out their
                    natural beauty. A perfect blend of care and elegance for
                    healthy, polished hands.
                  </p>
                  <p>
                    <a
                      href="https://book.daysmart.com/booking/service?DSID=DC-1387398"
                      className="btn btn-white px-4 py-3"
                      target="_blank"
                    >
                      {" "}
                      Book A Treatment{" "}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{
                    backgroundImage: "url(images/nail_enhancement.jpg)",
                  }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Nail Enhancement</h3>
                  <p className="mb-5">
                    Transform your nails with stunning enhancements, adding
                    strength and beauty. Perfect for a flawless, long-lasting
                    look.
                  </p>
                  <p>
                    <a
                      href="https://book.daysmart.com/booking/service?DSID=DC-1387398"
                      className="btn btn-white px-4 py-3"
                      target="_blank"
                    >
                      {" "}
                      Book A Treatment{" "}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/men_services.jpg)" }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Men Services</h3>
                  <p className="mb-5">
                    Tailored grooming and nail care designed for men. Clean,
                    stylish, and refreshing treatments for a polished look.
                  </p>
                  <p>
                    <a
                      href="https://book.daysmart.com/booking/service?DSID=DC-1387398"
                      className="btn btn-white px-4 py-3"
                      target="_blank"
                    >
                      {" "}
                      Book A Treatment{" "}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal  text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/kid_services.jpg)" }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Kid Services</h3>
                  <p className="mb-5">
                    Fun and gentle nail care for little ones. Safe, colorful,
                    and designed to make every child feel special.
                  </p>
                  <p>
                    <a
                      href="https://book.daysmart.com/booking/service?DSID=DC-1387398"
                      className="btn btn-white px-4 py-3"
                      target="_blank"
                    >
                      {" "}
                      Book A Treatment{" "}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/offer-deal-3.jpg)" }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">A La Carte</h3>
                  <p className="mb-5">
                    Customize your nail care with exclusive add-ons. Select the
                    perfect extras for a personalized pampering experience.
                  </p>
                  <p>
                    <a
                      href="https://book.daysmart.com/booking/service?DSID=DC-1387398"
                      className="btn btn-white px-4 py-3"
                      target="_blank"
                    >
                      {" "}
                      Book A Treatment{" "}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-section-services bg-light">
        <div className="container-fluid px-md-5">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="services text-center ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-candle"></span>
                </div>
                <div className="text mt-3">
                  <h3>Aromatherapy</h3>
                  <p>
                    Indulge in soothing aromas that relax your mind and body,
                    leaving you refreshed and deeply rejuvenated
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="services text-center ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-beauty-treatment"></span>
                </div>
                <div className="text mt-3">
                  <h3>Skin Care</h3>
                  <p>
                    Revitalize your skin with luxurious treatments designed to
                    nourish, hydrate, and restore its natural glow
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="services text-center ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-stone"></span>
                </div>
                <div className="text mt-3">
                  <h3>Nail Art Design</h3>
                  <p>
                    Express your style with creative nail art, designed to
                    enhance your look with vibrant colors and unique patterns
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="services text-center ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-relax"></span>
                </div>
                <div className="text mt-3">
                  <h3>Relaxing Treatments</h3>
                  <p>
                    Unwind with soothing treatments that refresh and rejuvenate
                    your body and mind
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section" id="treatment">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section  text-center">
              <h3 className="subheading">Services</h3>
              <h2 className="mb-1">Treatments</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="row no-gutters">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center  border border-right-0 border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-candle"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Salt &amp; Aroma</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center  border border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-spa-1"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Hydro</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center  border border-right-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-stone"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Hot Stone</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center  border p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-lotus"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Aroma</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex align-items-stretch">
              <div
                id="accordion"
                className="myaccordion w-100 text-center py-5 px-1 px-md-4"
              >
                <div>
                  <h3>Prices</h3>
                  <p>
                    Discover our affordable and transparent pricing, ensuring
                    the best value for your premium nail and spa treatments
                  </p>
                </div>

                {/* CARD 1 */}
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="d-flex align-items-center justify-content-between btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Pedicure
                        <i className="fa" aria-hidden="true"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body text-left">
                      <ul>
                        <li className="d-flex">
                          <span>Express Pedicure</span>
                          <span></span>
                          <span>$27</span>
                        </li>
                        <li className="d-flex">
                          <span>Classic Pedicure</span>
                          <span></span>
                          <span>$37</span>
                        </li>
                        <li className="d-flex">
                          <span>Signature Pedicure</span>
                          <span></span>
                          <span>$44</span>
                        </li>
                        <li className="d-flex">
                          <span>Tour De Eiffel Pedicure</span>
                          <span></span>
                          <span>$52</span>
                        </li>
                        <li className="d-flex">
                          <span>Jewel of Paris Pedicure</span>
                          <span></span>
                          <span>$65</span>
                        </li>
                        <li className="d-flex">
                          <span>
                            Add-On Baby Sole
                            <br />
                            <h6 style={{ fontSize: "12px" }}>
                              <i>
                                This is an ADD-ON ONLY to any of our pedicures,
                                and not a single service by itself
                              </i>
                            </h6>
                          </span>
                          <span></span>
                          <span>$16</span>
                        </li>
                        <li className="d-flex">
                          <span>
                            Add-On Gel Polish Toes
                            <br />
                            <h6 style={{ fontSize: "12px" }}>
                              <i>
                                This is an ADD-ON ONLY to any of our pedicures,
                                and not a single service by itself
                              </i>
                            </h6>
                          </span>
                          <span></span>
                          <span>$16</span>
                        </li>
                        <li className="d-flex">
                          <span>
                            Add-On Hot Stone Foot Relexology
                            <br />
                            <h6 style={{ fontSize: "12px" }}>
                              <i>
                                This is an ADD-ON ONLY to any of our pedicures,
                                and not a single service by itself
                              </i>
                            </h6>
                          </span>
                          <span></span>
                          <span>$16</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Natural Nail Manicure
                        <i className="fa" aria-hidden="true"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body text-left">
                      <ul>
                        <li className="d-flex">
                          <span>Express Manicure</span>
                          <span></span>
                          <span>$20</span>
                        </li>
                        <li className="d-flex">
                          <span>Classic Manicure</span>
                          <span></span>
                          <span>$24</span>
                        </li>
                        <li className="d-flex">
                          <span>Signature Manicure</span>
                          <span></span>
                          <span>$31</span>
                        </li>
                        <li className="d-flex">
                          <span>Jewel of Paris Manicure</span>
                          <span></span>
                          <span>$36</span>
                        </li>
                        <li className="d-flex">
                          <span>Gel Manicure</span>
                          <span></span>
                          <span>$40</span>
                        </li>
                        <li className="d-flex">
                          <span>SNS Dip Powder</span>
                          <span></span>
                          <span>$42</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        Nail Enhancement
                        <i className="fa" aria-hidden="true"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body text-left">
                      <ul>
                        <li className="d-flex">
                          <span>Acrylic Fill Gel Polish</span>
                          <span></span>
                          <span>$40</span>
                        </li>
                        <li className="d-flex">
                          <span>Full Set Acrylics Gel Polish</span>
                          <span></span>
                          <span>$50</span>
                        </li>
                        <li className="d-flex">
                          <span>Gel X (The New Gel)</span>
                          <span></span>
                          <span>$49</span>
                        </li>
                        <li className="d-flex">
                          <span>Gel Builder</span>
                          <span></span>
                          <span>$48</span>
                        </li>
                        <li className="d-flex">
                          <span>Pink & White Fill</span>
                          <span></span>
                          <span>$44</span>
                        </li>
                        <li className="d-flex">
                          <span>Pink and White</span>
                          <span></span>
                          <span>$54</span>
                        </li>
                        <li className="d-flex">
                          <span>Full Set Acrylics Regular Polish</span>
                          <span></span>
                          <span>$40</span>
                        </li>
                        <li className="d-flex">
                          <span>Liquid Gel Fill</span>
                          <span></span>
                          <span>$45</span>
                        </li>
                        <li className="d-flex">
                          <span>Liquid Gel Fullset</span>
                          <span></span>
                          <span>$55</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CARD 4 */}
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Men Services
                        <i className="fa" aria-hidden="true"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div className="card-body text-left">
                      <ul>
                        <li className="d-flex">
                          <span>Men Express Pedicure</span>
                          <span></span>
                          <span>$27</span>
                        </li>
                        <li className="d-flex">
                          <span>Men Classic Pedicure</span>
                          <span></span>
                          <span>$37</span>
                        </li>
                        <li className="d-flex">
                          <span>Men Signature Pedicure</span>
                          <span></span>
                          <span>$44</span>
                        </li>
                        <li className="d-flex">
                          <span>Men Tour De Eiffel Pedicure</span>
                          <span></span>
                          <span>$52</span>
                        </li>
                        <li className="d-flex">
                          <span>Men Jewel Of Paris Pedicure</span>
                          <span></span>
                          <span>$65</span>
                        </li>
                        <li className="d-flex">
                          <span>Men Express Manicure</span>
                          <span></span>
                          <span>$20</span>
                        </li>
                        <li className="d-flex">
                          <span>Men Classic Manicure</span>
                          <span></span>
                          <span>$24</span>
                        </li>
                        <li className="d-flex">
                          <span>Men Signature Manicure</span>
                          <span></span>
                          <span>$31</span>
                        </li>
                        <li className="d-flex">
                          <span>Men Jewel Of Paris Manicure</span>
                          <span></span>
                          <span>$36</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CARD 5 */}
                <div className="card">
                  <div className="card-header" id="headingFive">
                    <h2 className="mb-0">
                      <button
                        className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        Kid Services
                        <i className="fa" aria-hidden="true"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div className="card-body text-left">
                      <ul>
                        <li className="d-flex">
                          <span>Mini Mademoiselle</span>
                          <span></span>
                          <span>$30</span>
                        </li>
                        <li className="d-flex">
                          <span>Fairy Princess</span>
                          <span></span>
                          <span>$20</span>
                        </li>
                        <li className="d-flex">
                          <span>Kid Gel Polish Change</span>
                          <span></span>
                          <span>$20</span>
                        </li>
                        <li className="d-flex">
                          <span>Kid's Manicure</span>
                          <span></span>
                          <span>$14</span>
                        </li>
                        <li className="d-flex">
                          <span>Kids Pedicure</span>
                          <span></span>
                          <span>$20</span>
                        </li>
                        <li className="d-flex">
                          <span>Kids Gel Mani</span>
                          <span></span>
                          <span>$28</span>
                        </li>
                        <li className="d-flex">
                          <span>Kids Gel Pedicure</span>
                          <span></span>
                          <span>$34</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CARD 6 */}
                <div className="card">
                  <div className="card-header" id="headingSix">
                    <h2 className="mb-0">
                      <button
                        className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        A La Carte
                        <i className="fa" aria-hidden="true"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordion"
                  >
                    <div className="card-body text-left">
                      <ul>
                        <li className="d-flex">
                          <span>French or American</span>
                          <span></span>
                          <span>$6</span>
                        </li>
                        <li className="d-flex">
                          <span>Gel Polish Change Hands</span>
                          <span></span>
                          <span>$24</span>
                        </li>
                        <li className="d-flex">
                          <span>Gel Polish Change Toes</span>
                          <span></span>
                          <span>$24</span>
                        </li>
                        <li className="d-flex">
                          <span>Nail Art</span>
                          <span></span>
                          <span>$3</span>
                        </li>
                        <li className="d-flex">
                          <span>Nail Take Off</span>
                          <span></span>
                          <span>$10</span>
                        </li>
                        <li className="d-flex">
                          <span>Regular Polish Change Hands</span>
                          <span></span>
                          <span>$10</span>
                        </li>
                        <li className="d-flex">
                          <span>Regular Polish Change Toes</span>
                          <span></span>
                          <span>$12</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CARD 7 */}
                <div className="card">
                  <div className="card-header" id="headingSeven">
                    <h2 className="mb-0">
                      <button
                        className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="true"
                        aria-controls="collapseSeven"
                        style={{ cursor: "auto" }}
                      >
                        Toe Nail add On
                        <span style={{ color: "black" }}>$0</span>
                      </button>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row no-gutters">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center  border border-right-0 border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-beauty-treatment"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Relaxation</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center  border border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-relax"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Athlete</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center  border border-right-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-massage"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Thai</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center  border p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-rose"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Rose</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section  text-center">
              <h3 className="subheading">Pricing Tables</h3>
              <h2 className="mb-1">Pricing Treatments</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Year Card</h2>
                  <span className="price">
                    <sup>$</sup> <span className="number">449</span>
                  </span>
                  <span className="excerpt d-block">For 1 Year</span>

                  <h3 className="heading-2 my-4">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-5">
                    <li>Face Treatments</li>
                    <li>Nail Treatments</li>
                    <li>Medical Treatments</li>
                    <li>Hair Removal</li>
                  </ul>

                  <a href="#" className="btn btn-primary d-block px-2 py-4">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Monthly Card</h2>
                  <span className="price">
                    <sup>$</sup> <span className="number">200</span>
                  </span>
                  <span className="excerpt d-block">For 1 Month</span>

                  <h3 className="heading-2 my-4">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-5">
                    <li>Face Treatments</li>
                    <li>Nail Treatments</li>
                    <li>Medical Treatments</li>
                    <li>Hair Removal</li>
                  </ul>

                  <a href="#" className="btn btn-primary d-block px-2 py-4">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Weekly Card</h2>
                  <span className="price">
                    <sup>$</sup> <span className="number">85</span>
                  </span>
                  <span className="excerpt d-block">For 1 Week</span>

                  <h3 className="heading-2 my-4">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-5">
                    <li>Face Treatments</li>
                    <li>Nail Treatments</li>
                    <li>Medical Treatments</li>
                    <li>Hair Removal</li>
                  </ul>

                  <a href="#" className="btn btn-primary d-block px-2 py-4">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-10 heading-section  text-center">
              <h3 className="subheading">Feedback</h3>
              <h2 className="mb-1">Successful Stories</h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel">
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">Great customer service</p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_1.jpg)",
                          }}
                        ></div>
                        <div className="ml-4">
                          <p className="name">Gabby Smith</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">
                          Friendly professional and respectful
                        </p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(/images/person_2.jpg)",
                          }}
                        ></div>
                        <div className="ml-4">
                          <p className="name">Marilyn C</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">
                          Nails look amazing. So perfect for the holidays
                        </p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(/images/person_3.jpg)",
                          }}
                        ></div>
                        <div className="ml-4">
                          <p className="name">James Dee</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(/images/person_4.jpg)",
                          }}
                        ></div>
                        <div className="ml-4">
                          <p className="name">Lance Roger</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(/images/person_2.jpg)",
                          }}
                        ></div>
                        <div className="ml-4">
                          <p className="name">Kenny Bufer</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-counter img"
        id="section-counter"
        style={{
          backgroundImage: "url(/images/bg_3.jpg)",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="2560">
                        2,560
                      </strong>
                      <span>Happy Customers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="60">
                        60
                      </strong>
                      <span>Treatments</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="50">
                        50
                      </strong>
                      <span>Years of Experience</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="100">
                        100
                      </strong>
                      <span>Lesson Conducted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section  text-center">
              <h3 className="subheading">Blog</h3>
              <h2 className="mb-1">Recent Posts</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ">
              <div className="blog-entry justify-content-end">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: "url(/images/image_1.jpg)" }}
                ></a>
                <div className="text p-4 float-right d-block">
                  <div className="d-flex align-items-center pt-2 mb-4">
                    <div className="one">
                      <span className="day">25</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <a href="#">Is wellness the new luxury</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <div className="blog-entry justify-content-end">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: "url(/images/image_2.jpg)" }}
                ></a>
                <div className="text p-4 float-right d-block">
                  <div className="d-flex align-items-center pt-2 mb-4">
                    <div className="one">
                      <span className="day">25</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <a href="#">Is wellness the new luxury</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: "url(/images/image_3.jpg)" }}
                ></a>
                <div className="text p-4 float-right d-block">
                  <div className="d-flex align-items-center pt-2 mb-4">
                    <div className="one">
                      <span className="day">25</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <a href="#">Is wellness the new luxury</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-gallery ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section  text-center">
              <h3 className="subheading">Gallery</h3>
              <h2 className="mb-1">See the latest photos</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 ">
              <a
                href="images/gallery-1.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(/images/gallery-1.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3 ">
              <a
                href="images/gallery-2.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(/images/gallery-2.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3 ">
              <a
                href="images/gallery-3.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(/images/gallery-3.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3 ">
              <a
                href="images/gallery-4.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(/images/gallery-4.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
