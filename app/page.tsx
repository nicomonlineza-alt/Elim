"use client";

import { useState } from "react";
import {
  ArrowRight, HeartHandshake, Home, Utensils, Users, BriefcaseBusiness,
  HandHeart, BookOpenCheck, ShieldCheck, MapPin, Phone, Mail, Menu, X,
  Sprout, Wallet, House, Heart, CalendarDays
} from "lucide-react";

const journey = [
  { number: "01", period: "About one month", title: "Initial assessment", text: "Every person is met as an individual. Elim assesses their circumstances, needs and readiness for change, then works towards a personal development plan.", icon: ShieldCheck },
  { number: "02", period: "Three to six months", title: "Rehabilitation and development", text: "Residents receive structured support, social services, practical skills development and help with CVs and job seeking. The focus is physical, emotional and spiritual wellbeing.", icon: BookOpenCheck },
  { number: "03", period: "A bridge to independence", title: "Reintegration and next steps", text: "The focus shifts to sustainable income, future accommodation and the practical confidence needed to live independently and reconnect with society.", icon: Sprout },
];

const support = [
  { icon: Home, title: "Safe accommodation", text: "A place to rest, regain stability and begin planning a way forward." },
  { icon: Utensils, title: "Three daily meals", text: "Balanced meals and the reassurance of having basic needs cared for." },
  { icon: HeartHandshake, title: "Holistic support", text: "Assessment, social services and physical, emotional and spiritual care." },
  { icon: BriefcaseBusiness, title: "Employment pathways", text: "CV assistance, job-seeking support, skills development and business connections." },
  { icon: Users, title: "Community and belonging", text: "Partnerships with churches, clinics, rehabilitation organisations and local businesses." },
  { icon: House, title: "Independent living skills", text: "Support with budgeting, housekeeping, responsibility and preparing for accommodation." },
];

const waysToHelp = [
  { icon: Wallet, title: "Give financially", text: "Help cover the everyday costs of accommodation, meals and resident support." },
  { icon: HandHeart, title: "Donate essentials", text: "Food, clothing and useful household items can make a practical difference." },
  { icon: BriefcaseBusiness, title: "Open an employment door", text: "Offer work opportunities, workplace exposure, training or mentorship." },
  { icon: Users, title: "Volunteer or partner", text: "Share your time, skills, professional services or community connections." },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [{ label: "Our story", href: "#story" }, { label: "Our approach", href: "#journey" }, { label: "How we help", href: "#support" }, { label: "Get involved", href: "#involved" }, { label: "Contact", href: "#contact" }];
  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <a href="#home" className="brand" aria-label="Elim Night Shelter home">
            <span className="brand-mark"><Home size={21} /></span>
            <span><strong>Elim Night Shelter</strong><small>A place of refuge. A pathway forward.</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
          <a className="nav-cta" href="#involved">Make a difference <ArrowRight size={16} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<a href="#involved" onClick={() => setMenuOpen(false)}>Make a difference</a></nav>}
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="kicker"><span /> ELSIES RIVER · CAPE TOWN</p>
            <h1>More than a bed.<br /><em>A chance to begin again.</em></h1>
            <p className="hero-lead">Elim Night Shelter walks alongside adults experiencing homelessness — offering safe accommodation, practical support and a pathway towards lasting reintegration into society.</p>
            <div className="hero-actions"><a className="button button-gold" href="#journey">Discover our approach <ArrowRight size={17} /></a><a className="button button-outline" href="#involved">Stand with Elim</a></div>
            <div className="hero-values"><span><ShieldCheck size={16} /> Dignity</span><span><Heart size={16} /> Compassion</span><span><Sprout size={16} /> Independence</span></div>
          </div>
          <div className="hero-photo">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-15%20at%2011.37.13-jHRj5w5rNVSbzesLWh62L5Ud7TLuiV.jpeg" alt="People connected with Elim Night Shelter" />
            <div className="photo-note"><span className="note-icon"><HeartHandshake size={20} /></span><span><strong>Every person matters.</strong><small>Every next step counts.</small></span></div>
          </div>
        </div>
        <div className="hero-bottom"><div><strong>Since 1997</strong><span>Serving people in need</span></div><div><strong>Three stages</strong><span>A considered journey of support</span></div><div><strong>One purpose</strong><span>Lasting reintegration</span></div></div>
      </section>

      <section className="intro section-shell" id="story">
        <div className="section-label">OUR STORY</div>
        <div className="intro-grid">
          <h2>A place of refuge<br />in the wilderness.</h2>
          <div className="intro-copy"><p className="lead">Elim takes its name from the biblical oasis — a place of rest and refreshment in the wilderness. Since opening on 2 September 1997, that idea has shaped our work.</p><p>We are a Christian-based centre serving homeless and destitute adults. Our purpose is not simply to provide temporary accommodation, but to care for the whole person and help each resident move towards a more stable, self-supporting future.</p><p>We work alongside churches, clinics, rehabilitation centres, neighbouring businesses, other shelters and community organisations because lasting change is built together.</p></div>
        </div>
        <div className="mission-cards">
          <article><span className="mini-icon"><Sprout /></span><p>OUR VISION</p><h3>A positive and lasting impact on every life that comes through our gates.</h3></article>
          <article><span className="mini-icon"><HeartHandshake /></span><p>OUR MISSION</p><h3>Assessment, rehabilitation and successful reintegration into society.</h3></article>
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="section-shell">
          <div className="section-heading"><div><div className="section-label">THE ELIM APPROACH</div><h2>Support for the <em>whole journey.</em></h2></div><p>Each resident's circumstances are different. Our three-stage approach creates space to understand, rebuild and plan for a sustainable future.</p></div>
          <div className="journey-grid">{journey.map(({ number, period, title, text, icon: Icon }) => <article className="journey-card" key={number}><div className="journey-top"><span>{number}</span><Icon size={25} /></div><p className="period">{period}</p><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="support-section section-shell" id="support">
        <div className="section-heading"><div><div className="section-label">PRACTICAL CARE</div><h2>Care that creates <em>possibility.</em></h2></div><p>Elim combines immediate care with the guidance and practical opportunities residents need to take their next steps.</p></div>
        <div className="support-grid">{support.map(({ icon: Icon, title, text }, index) => <article className="support-card" key={title}><span className="support-icon"><Icon size={23} /></span><span className="card-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="phase-section">
        <div className="phase-image"><img src="https://i.ibb.co/LXwqmfJd/outside.jpg" alt="Community members supporting one another" /></div>
        <div className="phase-copy"><div className="section-label">THE NEXT STEP</div><h2>From rehabilitation<br />to <em>independent living.</em></h2><p>Finding a job is a major achievement. Finding a place to live — and affording deposits and moving costs — can still stand in the way of independence.</p><p>Elim's second-phase accommodation was developed to bridge that gap. It gives residents who have made progress through rehabilitation more time to secure suitable accommodation, strengthen their financial footing and practise the responsibilities of independent living.</p><ul><li><House size={17} /> Transitional accommodation while seeking a home</li><li><Wallet size={17} /> Practical budgeting and money-management skills</li><li><Sprout size={17} /> Housekeeping, self-reliance and personal responsibility</li><li><Users size={17} /> Accommodation options that recognise couples' needs</li></ul></div>
      </section>

      <section className="involved-section" id="involved">
        <div className="section-shell">
          <div className="involved-heading"><div className="section-label">BE PART OF THE STORY</div><h2>Lasting change takes<br /><em>a community.</em></h2><p>Elim depends on the generosity and commitment of people, businesses and organisations. Your contribution can help someone take a practical step towards a different future.</p></div>
          <div className="ways-grid">{waysToHelp.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p><a href="#contact">Talk to Elim <ArrowRight size={15} /></a></article>)}</div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-copy"><div className="section-label">LET'S CONNECT</div><h2>There is a place<br />for <em>you</em> in this work.</h2><p>Whether you are looking to volunteer, donate, explore an employment partnership or learn more about Elim, we would love to hear from you.</p><div className="contact-details"><a href="tel:+27215912824"><Phone size={19} /><span><small>LANDLINE</small>021 591 2824</span></a><a href="tel:+27614148993"><Phone size={19} /><span><small>CALL</small>061 414 8993</span></a><a href="mailto:elimnightshelter@telkomsa.net"><Mail size={19} /><span><small>EMAIL</small>elimnightshelter@telkomsa.net</span></a><div><MapPin size={19} /><span><small>LOCATION</small>Elsies River, Cape Town</span></div></div></div>
        <div className="contact-panel"><span className="panel-icon"><CalendarDays size={24} /></span><h3>Start a conversation.</h3><p>Tell us how you would like to get involved. Our team can help direct your enquiry to the right person.</p><a className="button button-gold full-button" href="mailto:elimnightshelter@telkomsa.net?subject=Enquiry%20for%20Elim%20Night%20Shelter">Email Elim <ArrowRight size={17} /></a><p className="panel-note">For donations, please contact Elim directly for current needs and verified payment details.</p></div>
      </section>

      <footer className="footer"><div className="footer-main"><a href="#home" className="brand footer-brand"><span className="brand-mark"><Home size={20} /></span><span><strong>Elim Night Shelter</strong><small>A place of refuge. A pathway forward.</small></span></a><p>Restoring dignity. Supporting change. Rebuilding lives.</p><a href="https://www.facebook.com/elimnightshelter" target="_blank" rel="noreferrer">Follow our community updates <ArrowRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Elim Night Shelter</span><span>NPO 004862 · Fundraising No. 08 801 043 0008</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
