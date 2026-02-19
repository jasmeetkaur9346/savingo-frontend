import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroLogo from "../images/Logo.png";


const CSS_FILES = [
  "/applock/css/bootstrap.min.css",
  "/applock/css/magnific-popup.css",
  "/applock/css/materialdesignicons.min.css",
  "/applock/css/pe-icon-7-stroke.css",
  "/applock/css/owl.carousel.min.css",
  "/applock/css/owl.theme.css",
  "/applock/css/owl.transitions.css",
  "/applock/css/swiper.min.css",
  "/applock/css/aos.css",
  "/applock/css/style.css",
];

const imageContext = require.context("../assets/images", true);
const getImage = (assetPath) => imageContext(`./${assetPath}`);

const JS_FILES = [
  "/applock/js/jquery.min.js",
  "/applock/js/bootstrap.bundle.min.js",
  "/applock/js/jquery.easing.min.js",
  "/applock/js/scrollspy.min.js",
  "/applock/js/owl.carousel.min.js",
  "/applock/js/jquery.magnific-popup.min.js",
  "/applock/js/contact.js",
  "/applock/js/counter.init.js",
  "/applock/js/swiper.min.js",
  "/applock/js/aos.js",
  "/applock/js/plugin.init.js",
  "/applock/js/app.js",
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.applock = "true";
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Failed to load script: " + src));
    document.body.appendChild(script);
  });
}

export default function Home() {
  useEffect(() => {
    const links = CSS_FILES.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.applock = "true";
      document.head.appendChild(link);
      return link;
    });

    let active = true;

    (async () => {
      for (const src of JS_FILES) {
        if (!active) break;
        try {
          await loadScript(src);
        } catch (error) {
          // Keep rendering even if one optional script fails.
        }
      }
    })();

    return () => {
      active = false;
      document.querySelectorAll('script[data-applock="true"]').forEach((el) => el.remove());
      links.forEach((el) => el.remove());
    };
  }, []);

  return (
<div>
  {/* Loader */}
  <div id="preloader">
    <div id="status">
      <div className="sk-circle">
        <div className="sk-circle1 sk-child" />
        <div className="sk-circle2 sk-child" />
        <div className="sk-circle3 sk-child" />
        <div className="sk-circle4 sk-child" />
        <div className="sk-circle5 sk-child" />
        <div className="sk-circle6 sk-child" />
        <div className="sk-circle7 sk-child" />
        <div className="sk-circle8 sk-child" />
        <div className="sk-circle9 sk-child" />
        <div className="sk-circle10 sk-child" />
        <div className="sk-circle11 sk-child" />
        <div className="sk-circle12 sk-child" />
      </div>
    </div>
  </div>
  {/* Loader */}
    {/* Navbar Start */}
  <Header />
  {/* Navbar End */}
  {/* HOME START*/}
  <section className="bg-home" style={{ backgroundImage: `url(${getImage("bg-2.jpg")})` }} id="home">
    <div className="bg-overlay" style={{ backgroundColor: "rgba(148, 163, 184, 0.45)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }} />
    <div className="home-center">
      <div className="home-desc-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="title-heading">
                <div className="d-flex align-items-center mb-1" style={{ gap: 0, justifyContent: "flex-start", marginLeft: "0", width: "350px", height: "46px", padding: "0 14px", borderRadius: "999px", overflow: "hidden", background: "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.12) 80%, rgba(255,255,255,0) 92%)" }}>
                  <img src={heroLogo} alt="Savingo" style={{ height: "56px", width: "auto" }} />
                  <span style={{ fontSize: "24px", fontWeight: 700, lineHeight: 1, marginLeft: 0, color: "#059669" }}>Savingo</span>
                </div>
                <h1 className="heading mb-4" style={{ maxWidth: "760px", lineHeight: 1.15, fontSize: "52px", color: "#ffffff", textShadow: "0 1px 2px rgba(15, 23, 42, 0.95), 0 0 1px rgba(15, 23, 42, 0.95)" }}>Built for daily money control and real savings</h1>
                <div className="mb-4">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "32px", width: "fit-content", maxWidth: "100%", padding: "8px 18px" , color: "#ecfdf5", fontSize: "20px", fontWeight: 700, letterSpacing: "0.2px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><span style={{ width: "7px", height: "7px", borderRadius: "999px", backgroundColor: "#34d399", boxShadow: "0 0 0 3px rgba(16,185,129,0.20)" }} />100% free</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><span style={{ width: "7px", height: "7px", borderRadius: "999px", backgroundColor: "#34d399", boxShadow: "0 0 0 3px rgba(16,185,129,0.20)" }} />No Ads</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><span style={{ width: "7px", height: "7px", borderRadius: "999px", backgroundColor: "#34d399", boxShadow: "0 0 0 3px rgba(16,185,129,0.20)" }} />No subscriptions</span>
                  </span>
                </div>
                <div className="mt-2 pt-1 d-flex align-items-center flex-wrap" style={{ gap: "16px" }}>
                  <a href="#services" className="btn" style={{ backgroundColor: "#059669", borderColor: "#059669", color: "#fff", height: "58px", padding: "0 24px", fontSize: "16px", fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>App Training Guide</a>
                  <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="d-inline-flex align-items-center" aria-label="Get it on Google Play"><img src={getImage("google.png")} alt="Get it on Google Play" style={{ width: "210px", height: "auto", display: "block" }} /></a>
                </div>
              </div>
            </div>{/*end col*/}
            <div className="col-lg-5 col-md-6 mt-4 pt-2">
              <div className="home-img text-md-end">
                <img src={getImage("home/mobile04.png")} className="img-fluid mover-img" alt="" />
              </div>
            </div>{/*end col*/}
          </div>{/*end row*/}
        </div>{/*end container*/}
        <div className="container-fluid">
          <div className="row">
            <div className="home-shape px-0">
              <img src={getImage("shp01.png")} alt="" className="img-fluid mx-auto d-block" />
            </div>
          </div>{/*end row*/}
        </div>{/*end container fluid*/}
      </div>{/*end home desc center*/}
    </div>{/*end home center*/}
  </section>{/*end section*/}
  {/* HOME END*/}
  {/* About Start */}
  <section className="section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <img src={getImage("ab01.png")} className="img-fluid" data-aos="fade-right" alt="" />
        </div>{/*end col*/}
        <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div className="about-app ms-lg-4">
            <i className="mdi mdi-material-design text-custom h2" />
            <h4 className="title text-uppercase mt-2 mb-3">Manage your expenses within your earnings</h4>
            <p className="text-muted">Every expense is managed within the earning you add, so your money always stays balanced. The app tracks withdrawals only from the selected income source, leaving no room for miscalculation. With a precise timeline based entry system, every transaction is recorded accurately, giving you complete financial clarity and confidence in your numbers.</p>
            <a href="#services" className="btn btn-custom mt-2" style={{ backgroundColor: "#059669", borderColor: "#059669", color: "#ffffff" }}>Learn More</a>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/} 
      <div className="row mt-5 align-items-center">
        <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
          <div className="about-app me-lg-4">
            <i className="mdi mdi-arch text-custom h2" />
            <h4 className="title text-uppercase mt-2 mb-3">Introducing Ledger Talk</h4>
            <p className="text-muted">Now whenever you give credit or record a payment, entries sync in real time between users. Both sides stay informed about who added the entry and why, removing confusion and misunderstandings.

With built in chat and ledger combined in one system, you can share updates, add notes, and maintain clear communication along with every transaction. A smarter way to manage credit, records, and conversations together in one place.</p>
            <a href="#services" className="btn btn-custom mt-2" style={{ backgroundColor: "#059669", borderColor: "#059669", color: "#ffffff" }}>Learn More</a>
          </div>
        </div>{/*end col*/}
        <div className="col-md-5 order-1 order-md-2">
          <img src={getImage("ab02.png")} className="img-fluid" data-aos="fade-left" alt="" />
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* About End */}
  {/* Feature Start */}
  <section className="section bg-light" id="services">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <i className="mdi mdi-trophy-outline text-custom h2" />
            <h4 className="title text-uppercase mt-3 mb-5">App's Features</h4>
            <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priotity to offer flexible services to accomodate your needs</p>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
      <div className="row services align-items-center">
        <div className="col-lg-4 col-md-6">
          <div className="core-service">
            <div className="core-service-content mt-4 pt-2 fea-right text-end">
              <div className="icon ms-4 mt-4">
                <i className="mdi mdi-account-multiple" />
              </div>
              <div className="content">
                <h4 className="title mb-2">Income Based Expense Management</h4>
                <p className="text-muted mb-0">Add income to your earning account and manage multiple expense accounts while tracking exactly where your money is spent.</p>
              </div>
            </div>
            <div className="core-service-content mt-4 pt-2 fea-right text-end">
              <div className="icon ms-4 mt-4">
                <i className="mdi mdi-image-multiple" />
              </div>
              <div className="content">
                <h4 className="title mb-2">Timeline Based Balance System</h4>
                <p className="text-muted mb-0">Add backdated entries with full timeline accuracy where withdrawals only happen if balance existed, keeping accounts always correct and never negative.</p>
              </div>
            </div>
            <div className="core-service-content mt-4 pt-2 fea-right text-end">
              <div className="icon ms-4 mt-4">
                <i className="mdi mdi-apps" />
              </div>
              <div className="content">
                <h4 className="title mb-2">Smart Savings Account Control</h4>
                <p className="text-muted mb-0">Manually add savings and transfer them to other accounts anytime to grow and manage your savings with full control.</p>
              </div>
            </div>
          </div>
        </div>{/*end col*/}
        <div className="col-lg-4 mt-4 pt-2 core-service-img">
          <div className="ms-lg-4 me-lg-4">
            <img src={getImage("features.png")} className="img-fluid mx-auto" alt="" />
          </div>
        </div>{/*end col*/}
        <div className="col-lg-4 col-md-6">
          <div className="core-service">
            <div className="core-service-content mt-4 pt-2 fea-left">
              <div className="icon me-4 mt-4">
                <i className="mdi mdi-cellphone-link" />
              </div>
              <div className="content">
                <h4 className="title mb-2">Quick Period Financial Insights</h4>
                <p className="text-muted mb-0">View month wise or date specific earnings and expenses instantly to understand your complete financial activity.</p>
              </div>
            </div>
            <div className="core-service-content mt-4 pt-2 fea-left">
              <div className="icon me-4 mt-4">
                <i className="mdi mdi-format-list-bulleted" />
              </div>
              <div className="content">
                <h4 className="title mb-2">Ledger Talk With Chat And Credit Entries</h4>
                <p className="text-muted mb-0">Record credit and debit entries while chatting with contacts inside the app with real time synced updates.</p>
              </div>
            </div>
            <div className="core-service-content mt-4 pt-2 fea-left">
              <div className="icon me-4 mt-4">
                <i className="mdi mdi-content-cut" />
              </div>
              <div className="content">
                <h4 className="title mb-2">Powerful Backup And Restore</h4>
                <p className="text-muted mb-0">Automatic and manual Google backup keeps your data secure, private, and accessible across multiple devices anytime.</p>
              </div>
            </div>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* Feature End */}
  {/* CTA Start */}
  <section className="section bg-video bg-cta" style={{ background: `url(${getImage("cta.jpg")}) fixed center center` }} id="video">
    <div className="bg-overlay" />
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <h5 className="text-light text-uppercase">How We do it. Play And Watch !</h5>
          <a href="http://vimeo.com/42828845" className="play-btn video-play-icon">
            <img src={getImage("icon/play-button-light.png")} className="img-fluid mt-4 pt-2" alt="" />
          </a>
          <h6 className="text-white text-uppercase mt-3">View App Promo</h6>
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* CTA End */}
  {/* Available Feature Start */}
  <section className="section d-none">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <i className="mdi mdi-settings-outline text-custom h2" />
            <h4 className="title text-uppercase mt-3 mb-5">The App Is Available For</h4>
            <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priotity to offer flexible services to accomodate your needs</p>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
      <div className="row">
        <div className="col-md-4 mt-4 pt-2">
          <div className="device-feature device-border text-center">
            <div className="icon mb-4 position-relative d-inline-block">
              <img src={getImage("icon/pc.png")} className="img-fluid" alt="" />
            </div>
            <div className="content">
              <h4 className="title mb-3">PC / Laptop</h4>
              <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>{/*end col*/}
        <div className="col-md-4 mt-4 pt-2">
          <div className="device-feature device-border text-center">
            <div className="icon mb-4 position-relative d-inline-block">
              <img src={getImage("icon/ipad.png")} className="img-fluid" alt="" />
            </div>
            <div className="content">
              <h4 className="title mb-3">Tablet / Ipad</h4>
              <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>{/*end col*/}
        <div className="col-md-4 mt-4 pt-2">
          <div className="device-feature text-center">
            <div className="icon mb-4 position-relative d-inline-block">
              <img src={getImage("icon/app.png")} className="img-fluid" alt="" />
            </div>
            <div className="content">
              <h4 className="title mb-3">Cell Phone</h4>
              <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
      <div className="row justify-content-center mt-5 pt-2">
        <div className="col-9">
          <img src={getImage("mobile-hori.png")} className="img-fluid mover-img" alt="" />
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* Available Feature Start */}
  {/* START COUNTER */}
  <section className="bg-counter d-none" style={{ background: `url(${getImage("counter.jpg")}) fixed center center` }}>
    <div className="bg-overlay" />
    <div className="container">
      <div className="row" id="counter">
        <div className="col-lg-3 col-md-6 p-4">
          <div className="counter-box text-center">
            <div className="counter-icon">
              <i className="mdi mdi-code-tags text-white" />
            </div>
            <h2 className="counter-value mt-3 text-white" data-count={1251}>95</h2>
            <h5 className="counter-head text-white">Lines of code</h5>
          </div>{/*end counter box*/}
        </div>{/*end col*/}
        <div className="col-lg-3 col-md-6 p-4">
          <div className="counter-box text-center">
            <div className="counter-icon">
              <i className="mdi mdi-heart-outline text-white" />
            </div>
            <h2 className="counter-value mt-3 text-white" data-count={1853}>1</h2>
            <h5 className="counter-head text-white">Social Sharings</h5>
          </div>{/*end counter box*/}
        </div>{/*end col*/}
        <div className="col-lg-3 col-md-6 p-4">
          <div className="counter-box text-center">
            <div className="counter-icon">
              <i className="mdi mdi-progress-download text-white" />
            </div>
            <h2 className="counter-value mt-3 text-white" data-count={3467}>11</h2>
            <h5 className="counter-head text-white">Total Download</h5>
          </div>{/*end counter box*/}
        </div>{/*end col*/}
        <div className="col-lg-3 col-md-6 p-4">
          <div className="counter-box text-center">
            <div className="counter-icon">
              <i className="mdi mdi-star-outline text-white" />
            </div>
            <h2 className="counter-value mt-3 text-white" data-count={854}>15</h2>
            <h5 className="counter-head text-white">Positive ratings</h5>
          </div>{/*end counter box*/}
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* END COUTER */}
  {/* START SCREENSHORT*/}
  <section className="section" id="work">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <i className="mdi mdi-image-filter-vintage text-custom h2" />
            <h4 className="title text-uppercase mt-3 mb-5">User Oriented Interface</h4>
            <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priotity to offer flexible services to accomodate your needs</p>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
      {/* Swiper */}
      <div className="row justify-content-center mt-4 pt-2">
        <div className="col-12 swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src={getImage("sc/1.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/2.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/3.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/4.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/5.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/6.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/7.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/8.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/9.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/10.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/11.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/12.png")} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={getImage("sc/13.png")} className="img-fluid" alt="" /></div>
          </div>
          {/* Add Arrows  */}
          <div className="swiper-button-next">
            <i className="mdi mdi-chevron-right" />
          </div>
          <div className="swiper-button-prev ">
            <i className="mdi mdi-chevron-left" />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-12 mb-0 mb-md-5 mb-4 mb-sm-0">
          <div className="screenshot-cell">
            <img src={getImage("sc/mo-sc.png")} className="img-fluid" alt="" />
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* END SCREENSHORT */}
  {/* Testimonail Start */}
  <section className="section" id="review" style={{ background: `url(${getImage("testi.jpg")}) fixed center center` }}>
    <div className="bg-overlay" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center testi-icon">
            <i className="mdi mdi-comment-outline text-custom" />
          </div>
          <div id="twitter-testi" className="owl-carousel testi-review">
            <div className="testimonial text-center ms-3 me-3">
              <div className="content-review">
                <p className="review font-italic text-white-50 mt-3">" It has roots in a piece of classical Latin literature from 45 BC, making sure there isn't years old. Richard McClintock, a Latin professor atliterature from 45 BC, making sure there isn't years old Hampden-Sydney College in Virginia "</p>
                <h5 className="name mb-1 mt-3 text-light">Bert Duharty</h5>
                <img src={getImage("client/01.jpg")} className="img-fluid rounded-pill img-thumbnail mt-3" alt="" />
              </div>
            </div>{/*end content*/}
            <div className="testimonial text-center ms-3 me-3">
              <div className="content-review">
                <p className="review font-italic text-white-50 mt-3">" Literature from 45 BC, making sure there making sure there isn't years old in a piece of classical Latin literature from 45 BC, making sure there isn't years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia "</p>
                <h5 className="name mb-1 mt-3 text-light">Jeson Roy</h5>
                <img src={getImage("client/02.jpg")} className="img-fluid rounded-pill img-thumbnail mt-3" alt="" />
              </div>
            </div>{/*end content*/}
            <div className="testimonial text-center ms-3 me-3">
              <div className="content-review">
                <p className="review font-italic text-white-50 mt-3">" Classical Latin literature from 45 BC, making literature from literature from 45 BC, making sure there making sure there isn't years old sure there isn't years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia "</p>
                <h5 className="name mb-1 mt-3 text-light">Kevin Peterson</h5>
                <img src={getImage("client/03.jpg")} className="img-fluid rounded-pill img-thumbnail mt-3" alt="" />
              </div>
            </div>{/*end content*/}
          </div>
        </div> {/* end col */}
      </div> {/* end row */}
      <div className="row mt-5 text-center d-none">
        <div className="col-lg-2 col-md-4 col-6"><img src={getImage("client/1.png")} className="img-fluid" alt="" /></div>
        <div className="col-lg-2 col-md-4 col-6"><img src={getImage("client/2.png")} className="img-fluid" alt="" /></div>
        <div className="col-lg-2 col-md-4 col-6"><img src={getImage("client/3.png")} className="img-fluid" alt="" /></div>
        <div className="col-lg-2 col-md-4 col-6"><img src={getImage("client/4.png")} className="img-fluid" alt="" /></div>
        <div className="col-lg-2 col-md-4 col-6"><img src={getImage("client/5.png")} className="img-fluid" alt="" /></div>
        <div className="col-lg-2 col-md-4 col-6"><img src={getImage("client/6.png")} className="img-fluid" alt="" /></div>
      </div>
    </div>{/*end container fluid*/}
  </section>{/*end section*/}
  {/* Testimonail End */}
  {/* Team Start */}
  <section className="section bg-light" id="team">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <i className="mdi mdi-account-multiple text-custom h2" />
            <h4 className="title text-uppercase mt-3 mb-5">Creative Minds</h4>
            <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priotity to offer flexible services to accomodate your needs</p>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12 mt-4">
          <div className="team-layout text-center p-2 pl-3 pr-3">
            <img src={getImage("team/01.jpg")} className="img-fluid mx-auto d-block rounded-pill" alt="" />
            <div className="content">
              <h4 className="name mt-4 mb-0">Elise Festa</h4>
              <h6 className="designation font-italic text-muted">CEO of Company</h6>
              <ul className="list-unstyled mt-3 social-icon mb-0">
                <li className="list-inline-item"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="mdi mdi-instagram" /></a></li>
                <li className="list-inline-item"><a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)"><i className="mdi mdi-twitter" /></a></li>
                <li className="list-inline-item"><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="mdi mdi-facebook" /></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="mdi mdi-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>{/*end col*/}
        <div className="col-lg-3 col-md-6 col-12 mt-4">
          <div className="team-layout text-center p-2 pl-3 pr-3">
            <img src={getImage("team/02.jpg")} className="img-fluid mx-auto d-block rounded-pill" alt="" />
            <div className="content">
              <h4 className="name mt-4 mb-0">John McClane</h4>
              <h6 className="designation font-italic text-muted">Co-founder</h6>
              <ul className="list-unstyled mt-3 social-icon mb-0">
                <li className="list-inline-item"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="mdi mdi-instagram" /></a></li>
                <li className="list-inline-item"><a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)"><i className="mdi mdi-twitter" /></a></li>
                <li className="list-inline-item"><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="mdi mdi-facebook" /></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="mdi mdi-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>{/*end col*/}
        <div className="col-lg-3 col-md-6 col-12 mt-4">
          <div className="team-layout text-center p-2 pl-3 pr-3">
            <img src={getImage("team/03.jpg")} className="img-fluid mx-auto d-block rounded-pill" alt="" />
            <div className="content">
              <h4 className="name mt-4 mb-0">Paula Mitchell</h4>
              <h6 className="designation font-italic text-muted">Lead Designer</h6>
              <ul className="list-unstyled mt-3 social-icon mb-0">
                <li className="list-inline-item"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="mdi mdi-instagram" /></a></li>
                <li className="list-inline-item"><a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)"><i className="mdi mdi-twitter" /></a></li>
                <li className="list-inline-item"><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="mdi mdi-facebook" /></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="mdi mdi-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>{/*end col*/}
        <div className="col-lg-3 col-md-6 col-12 mt-4">
          <div className="team-layout text-center p-2 pl-3 pr-3">
            <img src={getImage("team/04.jpg")} className="img-fluid mx-auto d-block rounded-pill" alt="" />
            <div className="content">
              <h4 className="name mt-4 mb-0">Mark Robinson</h4>
              <h6 className="designation font-italic text-muted">Creative Developer</h6>
              <ul className="list-unstyled mt-3 social-icon mb-0">
                <li className="list-inline-item"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="mdi mdi-instagram" /></a></li>
                <li className="list-inline-item"><a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)"><i className="mdi mdi-twitter" /></a></li>
                <li className="list-inline-item"><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="mdi mdi-facebook" /></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="mdi mdi-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* Team End */}

  {/* CTA Download Start */}
  <section className="section" style={{ background: `url(${getImage("download.jpg")}) fixed center center` }} id="download">
    <div className="bg-overlay" />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <i className="mdi mdi-download text-custom h2" />
            <h4 className="title text-uppercase text-light mt-3 mb-5">App Download</h4>
            <p className="text-white-50 mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priotity to offer flexible services to accomodate your needs</p>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ul className="list-unstyled mb-0 app-download text-center">
            <li className="list-inline-item"><a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" aria-label="Download on App Store"><img src={getImage("apple.png")} className="img-fluid mt-2" alt="Download on App Store" /></a></li>
            <li className="list-inline-item"><a href="https://play.google.com/store" target="_blank" rel="noreferrer" aria-label="Get it on Google Play"><img src={getImage("google.png")} className="img-fluid mt-2" alt="Get it on Google Play" /></a></li>
          </ul>
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* CTA Download End */}
  {/* Contact Start */}
  <section className="section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <i className="mdi mdi-phone text-custom h2" />
            <h4 className="title text-uppercase mt-3 mb-5">Contact us</h4>
            <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priotity to offer flexible services to accomodate your needs</p>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
      <div className="row justify-content-center mt-4 pt-2">
        <div className="col-lg-12">
          <div className="custom-form mb-sm-30">
            <div id="message" />
            <form method="post" action="https://themesdesign.in/applock/layouts/php/contact.php" name="contact-form" id="contact-form">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="form-group position-relative mb-4">
                    <input name="name" id="name" type="text" className="form-control" placeholder="Your Name :" />
                  </div>
                </div>{/*end col*/}
                <div className="col-lg-4 col-md-6">
                  <div className="form-group position-relative mb-4">
                    <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                  </div>
                </div>{/*end col*/}
                <div className="col-lg-4 col-md-12">
                  <div className="form-group position-relative mb-4">
                    <input name="subject" id="subject" className="form-control" placeholder="Your subject :" />
                  </div>
                </div>{/*end col*/}
                <div className="col-md-12">
                  <div className="form-group position-relative mb-4">
                    <textarea name="comments" id="comments" rows={4} className="form-control" placeholder="Your Message :" defaultValue={""} />
                  </div>
                </div>{/*end col*/}
              </div>{/*end row*/}
              <div className="row">
                <div className="col-sm-12 text-center">
                  <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom w-100" style={{ backgroundColor: "#059669", borderColor: "#059669", color: "#ffffff" }} defaultValue="Submit Message" />
                  <div id="simple-msg" />
                </div>{/*end col*/}
              </div>{/*end row*/}
            </form>{/*end form*/}
          </div>{/*end custom-form*/}
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* Contact End */}
  {/* Google Map Start */}
  <section className="bg-dark d-none">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92181.08836756031!2d11.170756608169997!3d43.779936659948945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a541847050f9d%3A0xb662ac3eb7b58c6b!2sPiazza+Della+Libert%C3%A0!5e0!3m2!1sen!2sin!4v1562932112256!5m2!1sen!2sin" style={{border: 0}} title="Savingo office location map" allowFullScreen />
          </div>{/*end map*/}
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>{/*end section*/}
  {/* Google Map End */}
    {/* Footer Start */}
  <Footer />
  {/* Footer End */}

  {/* javascript */}
  {/* SLIDER */}
  {/* Magnific Popup */}
  {/* Contact */}
  {/* Counter */}
  {/* Swiper JS */}
  {/* Animation JS */}
  {/* Plugin init */}
  {/* Main Js */}
</div>
  );
}

