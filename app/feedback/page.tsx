export default function FeedbackPage() {
  const A = "/assets/";

  const Icon = ({ children, size = 24, stroke = 2 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">{children}</svg>
  );

  const Star = () => (
    <Icon size={27} stroke={1.5}>
      <path d="m12 3 2.78 5.63 6.22.9-4.5 4.38 1.06 6.19L12 17.18 6.44 20.1 7.5 13.91 3 9.53l6.22-.9L12 3Z" />
    </Icon>
  );

  const Arrow = () => (
    <Icon size={17}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </Icon>
  );

  const Step = ({ n, children }) => (
    <div className="step-title"><span>{n}</span><strong>{children}</strong></div>
  );

  const Role = ({ icon, label, active }) => (
    <button type="button" className={`role-card ${active ? "active" : ""}`}>
      <div className="role-icon">{icon}</div>
      <div>{label}</div>
    </button>
  );

  return (
    <div className="feedback-page">
      <style>{`
        *{box-sizing:border-box}
        .feedback-page{min-height:100vh;background:#f7fbf6;color:#102b3b;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
        .topbar{height:36px;background:#005331;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 4.1%;font-size:11px}
        .top-left,.top-right{display:flex;align-items:center;gap:22px}
        .top-item{display:flex;align-items:center;gap:7px;white-space:nowrap}
        .navbar{height:58px;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 4.1%;border-bottom:1px solid #e8eee8}
        .brand{display:flex;align-items:center}.brand img{width:235px;height:auto;display:block}
        .navlinks{display:flex;gap:24px;align-items:center;font-size:12px;font-weight:500}
        .navlinks a{color:#162c37;text-decoration:none}.book{background:#00663e;color:#fff;border-radius:5px;padding:10px 17px;text-decoration:none;font-weight:700}
        .hero{position:relative;min-height:205px;overflow:hidden;background:linear-gradient(90deg,#f4f8ef 0%,#eef5eb 45%,#fff 100%)}
        .hero-scene{position:absolute;right:0;top:0;height:100%;width:54%;object-fit:cover;object-position:center;opacity:.96}
        .hero:after{content:"";position:absolute;right:0;top:0;width:58%;height:100%;background:linear-gradient(90deg,#f4f8ef 0%,rgba(244,248,239,.18) 36%,transparent 70%);pointer-events:none}
        .hero-content{position:relative;z-index:2;width:min(875px,90%);margin:auto;padding:30px 0 22px}
        .eyebrow{font-size:12px;letter-spacing:1px;font-weight:800;color:#153c35;margin-bottom:10px}
        .hero h1{font-size:29px;line-height:1.15;margin:0 0 9px;color:#064b37;letter-spacing:-.7px}
        .hero p{font-size:15px;line-height:1.45;max-width:470px;margin:0;color:#243b49}
        .crumb{display:flex;gap:9px;margin-top:17px;font-size:11px;color:#4a5862}.crumb b{color:#164633}
        .main-card{position:relative;z-index:4;width:min(910px,90%);margin:-1px auto 0;background:rgba(255,255,255,.96);border:1px solid #e0e8e0;border-radius:9px;padding:22px 25px 23px;box-shadow:0 1px 8px rgba(20,50,35,.03)}
        .decor-left{position:absolute;left:-58px;top:20px;width:70px;opacity:.48;pointer-events:none}.decor-right{position:absolute;right:-58px;top:400px;width:72px;opacity:.45;pointer-events:none}
        .main-card h2{font-size:22px;margin:0 0 5px;color:#142b3b}.subtitle{margin:0 0 16px;color:#46525d;font-size:13px}
        .step-title{display:flex;align-items:center;gap:16px;margin:14px 0 10px;font-size:15px;color:#172938}
        .step-title span{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#087143;color:#fff;font-weight:800;font-size:13px}
        .step-title strong{font-size:15px}
        .required{color:#df2b20}
        .roles{display:grid;grid-template-columns:repeat(6,1fr);gap:9px}
        .role-card{min-height:91px;border:1px solid #d8dedf;background:#fff;border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;color:#132736;font-weight:700;font-size:12px;cursor:pointer}
        .role-card.active{background:#eef8f0;border-color:#4e9877;box-shadow:inset 0 0 0 1px rgba(0,103,63,.1)}
        .role-icon{height:30px;display:grid;place-items:center;color:#102734}
        .fields{display:grid;grid-template-columns:repeat(3,1fr);gap:14px 21px}
        label{display:block;font-size:12px;color:#172630}.field-label{display:block;margin-bottom:6px}
        input,select,textarea{width:100%;border:1px solid #d4dadd;border-radius:4px;background:#fff;color:#263b48;font:inherit;font-size:12px;outline:none}
        input,select{height:35px;padding:0 10px}textarea{height:73px;padding:10px;resize:vertical}
        input:focus,select:focus,textarea:focus{border-color:#087143;box-shadow:0 0 0 2px rgba(8,113,67,.08)}
        .phone{display:grid;grid-template-columns:78px 1fr}.phone select{border-radius:4px 0 0 4px;border-right:0}.phone input{border-radius:0 4px 4px 0}
        .ratings{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:4px}
        .rating label{margin-bottom:6px}.stars{display:flex;gap:5px;color:#8a9094}
        .textareas{display:grid;grid-template-columns:1fr 1fr;gap:28px}
        .consent{margin-top:16px}.radios{display:flex;gap:70px;margin-top:11px;font-size:12px}
        .radio{display:flex;align-items:center;gap:8px}.radio input{width:19px;height:19px;accent-color:#087143}
        .uploads{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:20px}
        .upload{height:64px;border:1px dashed #cbd3d6;border-radius:4px;display:flex;align-items:center;justify-content:center;gap:18px;color:#26343d;font-size:12px;text-align:center}
        .upload b{font-weight:700}.upload small{display:block;color:#737c82;margin-top:2px}
        .checkline{display:flex;align-items:center;gap:10px;margin-top:13px;font-size:12px}.checkline input{width:18px;height:18px;accent-color:#087143}
        .form-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:18px}
        .submit{border:0;background:#087143;color:#fff;border-radius:4px;height:44px;padding:0 58px;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:8px}
        .secure{display:flex;align-items:center;gap:8px;color:#89918e;font-size:11px}
        .footer{margin-top:28px;background:#fff;border-top:1px solid #e2e8e2}.footer-inner{width:min(940px,92%);margin:auto;padding:25px 0 20px;display:grid;grid-template-columns:1.45fr 1fr 1.25fr 1.1fr;gap:38px}
        .footer-logo{width:240px;max-width:100%;margin-bottom:13px}.footer p{font-size:11px;color:#647078;line-height:1.5;margin:0 0 14px}.footer h3{font-size:12px;margin:0 0 9px;color:#17363a}.footer a{display:block;text-decoration:none;color:#66717a;font-size:11px;line-height:1.8}
        .footer-info{display:flex;flex-direction:column;gap:11px;font-size:11px;color:#223b3e}.footer-info span{display:flex;align-items:center;gap:9px}.organizer{width:190px;max-width:100%}
        .copyright{height:52px;background:#005331;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 4.1%;font-size:10px}.policy{display:flex;gap:15px}.social{display:flex;gap:15px}
        @media(max-width:900px){.navlinks{display:none}.topbar{font-size:9px}.roles{grid-template-columns:repeat(3,1fr)}.fields,.ratings{grid-template-columns:1fr 1fr}.footer-inner{grid-template-columns:1fr 1fr}.hero-scene{width:60%;opacity:.45}}
        @media(max-width:620px){.topbar{display:none}.navbar{height:62px}.brand img{width:190px}.hero-content{padding:25px 0}.hero h1{font-size:25px}.main-card{width:94%;padding:18px 14px}.roles,.fields,.ratings,.textareas,.uploads{grid-template-columns:1fr}.radios{flex-direction:column;gap:10px}.form-bottom{align-items:flex-start;flex-direction:column}.footer-inner{grid-template-columns:1fr}.copyright{height:auto;padding:14px 5%;gap:10px;flex-direction:column;align-items:flex-start}}
      `}</style>

      <header>
        <div className="topbar">
          <div className="top-left">
            <span className="top-item"><Icon size={14}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></Icon>19 – 21 February 2027</span>
            <span className="top-item"><Icon size={14}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>Bharat Mandapam, New Delhi</span>
          </div>
          <div className="top-right"><span>Exhibitor Login</span><span>Visitor Registration</span><span>Media</span><span>Brochure</span><span>in</span><span>f</span><span>◎</span><span>▶</span></div>
        </div>
        <nav className="navbar">
          <div className="brand"><img src={A + "expo-logo.png"} alt="Bharat Organic Expo" /></div>
          <div className="navlinks">
            <a href="/">Home</a><a href="/about">About</a><a href="/exhibit">Exhibit</a><a href="/visit">Visit</a><a href="/conference">Conference</a><a href="/partners">Partners</a><a href="/media">Media</a><a href="/gallery">Gallery</a><a href="/contact">Contact</a>
            <a className="book" href="/exhibit">Book Your Stall&nbsp; →</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <img className="hero-scene" src={A + "hero-scene.png"} alt="" />
        <div className="hero-content">
          <div className="eyebrow">SHARE YOUR EXPERIENCE</div>
          <h1>Your Experience Helps Us Grow</h1>
          <p>Help us create better experiences and greater opportunities for the organic industry.</p>
          <div className="crumb"><span>Home</span><span>›</span><b>Share Your Experience</b></div>
        </div>
      </section>

      <main className="main-card">
        <img className="decor-left" src={A + "leaf-left.png"} alt="" />
        <img className="decor-right" src={A + "leaf-right.png"} alt="" />

        <h2>Share Your Feedback</h2>
        <p className="subtitle">Your insights are valuable and help us make Bharat Organic Expo better, stronger and more impactful.</p>

        <Step n="1">I participated as <span className="required">*</span></Step>
        <div className="roles">
          <Role active icon={<Icon><path d="M4 20V9h16v11M2 9l2-4h16l2 4M8 20v-5h8v5M7 12h.01M12 12h.01M17 12h.01" /></Icon>} label="Exhibitor" />
          <Role icon={<Icon><path d="M7 11 5 9a2.8 2.8 0 0 1 4-4l3 3 3-3a2.8 2.8 0 1 1 4 4l-2 2M8 10l3 3a2.8 2.8 0 0 0 4 0l4-4M4 12l4 7M20 12l-4 7" /></Icon>} label="Buyer" />
          <Role icon={<Icon><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6M15 15c3 0 5 2 5 5" /></Icon>} label="Visitor" />
          <Role icon={<Icon><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" /></Icon>} label="Speaker" />
          <Role icon={<Icon><circle cx="8" cy="8" r="3" /><circle cx="16" cy="8" r="3" /><path d="M2 20c0-3 2.5-5 6-5s6 2 6 5M12 20c0-3 2-5 6-5 2.5 0 4 2 4 5" /></Icon>} label={<>Partner /<br />Association</>} />
          <Role icon={<Icon><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7l2-3h4l2 3M12 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></Icon>} label="Media" />
        </div>

        <Step n="2">About You</Step>
        <div className="fields">
          <label><span className="field-label">Name <span className="required">*</span></span><input placeholder="Enter your full name" /></label>
          <label><span className="field-label">Company / Organisation <span className="required">*</span></span><input placeholder="Enter company name" /></label>
          <label><span className="field-label">Designation</span><input placeholder="Enter designation" /></label>
          <label><span className="field-label">Mobile Number <span className="required">*</span></span><span className="phone"><select defaultValue="+91"><option>🇮🇳 +91</option></select><input placeholder="Enter mobile number" /></span></label>
          <label><span className="field-label">Email</span><input type="email" placeholder="Enter your email" /></label>
          <label><span className="field-label">Which edition did you attend? <span className="required">*</span></span><select defaultValue="2027"><option value="2027">Bharat Organic Expo 2027</option></select></label>
        </div>

        <Step n="3">Rate Your Experience</Step>
        <div className="ratings">
          {["Overall Experience", "Business Networking", "Quality of Participants", "Event Management"].map(x => (
            <div className="rating" key={x}><label>{x} <span className="required">*</span></label><div className="stars">{[1, 2, 3, 4, 5].map(i => <button type="button" key={i} aria-label={`${x} ${i} stars`} style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}><Star /></button>)}</div></div>
          ))}
        </div>

        <Step n="4">Tell Us About Your Experience</Step>
        <div className="textareas">
          <label><span className="field-label">What was the most valuable part of your experience? <span className="required">*</span></span><textarea placeholder="Share what you liked the most..." /></label>
          <label><span className="field-label">What can we do better next time?</span><textarea placeholder="Your suggestions help us improve..." /></label>
        </div>

        <div className="consent">
          <Step n="5">Testimonial &amp; Media Consent</Step>
          <div style={{ fontSize: "12px", color: "#1d303a" }}>May we feature your experience on Bharat Organic Expo’s website and promotional channels?</div>
          <div className="radios">
            <label className="radio"><input type="radio" name="consent" defaultChecked />Yes, you may feature my experience</label>
            <label className="radio"><input type="radio" name="consent" />No, keep my feedback private</label>
          </div>
        </div>

        <div className="uploads">
          <label><span className="field-label">Upload Your Photo (optional)</span><div className="upload"><Icon size={24}><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="9" cy="9" r="1.5" /><path d="m5 17 4-4 3 3 2-2 5 5" /></Icon><span><b>Click to upload</b> or drag and drop<small>JPG, PNG (Max 5MB)</small></span></div></label>
          <label><span className="field-label">Company Logo (optional)</span><div className="upload"><Icon size={24}><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="9" cy="9" r="1.5" /><path d="m5 17 4-4 3 3 2-2 5 5" /></Icon><span><b>Click to upload</b> or drag and drop<small>JPG, PNG (Max 5MB)</small></span></div></label>
        </div>

        <label className="checkline"><input type="checkbox" />I would like the Bharat Organic Expo team to contact me.</label>

        <div className="form-bottom">
          <button className="submit" type="button">Submit Feedback <Arrow /></button>
          <div className="secure"><Icon size={19}><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></Icon>Your information is secure and will never be shared without your permission.</div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <img className="footer-logo" src={A + "expo-logo.png"} alt="Bharat Organic Expo" />
            <p>A leading platform for organic, natural and sustainable products, connecting industry, farmers, innovators and global buyers.</p>
            <div className="footer-info">
              <span><Icon size={17}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></Icon>19 – 21 February 2027</span>
              <span><Icon size={17}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>Bharat Mandapam, New Delhi</span>
            </div>
          </div>
          <div><h3>Quick Links</h3>{["Home", "About", "Exhibit", "Visit", "Conference", "Partners", "Media", "Gallery", "Contact"].map(x => <a key={x} href="#">{x}</a>)}</div>
          <div><h3>Our Initiatives</h3>{["Namo Gange Trust", "Namo Gange Wellness", "International Health & Wellness Expo", "The Yogshala Clinic", "Moksha Sewa"].map(x => <a key={x} href="#">{x}</a>)}</div>
          <div><h3>Organised by</h3><img className="organizer" src={A + "organizer-logo.png"} alt="Namo Gange Wellness and Namo Gange Trust" /></div>
        </div>
        <div className="copyright"><span>© 2026 Bharat Organic Expo. All Rights Reserved.</span><span className="policy">Privacy Policy <b>|</b> Terms &amp; Conditions <b>|</b> Sitemap</span><span className="social">in&nbsp;&nbsp; f&nbsp;&nbsp; ◎&nbsp;&nbsp; ▶</span></div>
      </footer>
    </div>
  );
}
