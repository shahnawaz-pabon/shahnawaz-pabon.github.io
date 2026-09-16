import React from "react";

import LottieAnimation from "../components/LottieAnimation";
import Seo from "../components/Seo";
import SocialLinks from "../components/SocialLinks";
import config from "../data/config";
import telegramAnimation from "../../static/assets/lottie/telegram.json";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="container container--narrow">
      <header className="contact__header">
        <LottieAnimation
          animationData={telegramAnimation}
          className="contact__animation"
          label="An animated paper plane"
        />

        <h1>Get in touch</h1>
        <p className="contact__lede">
          Whether it is a question about something I wrote, a bug you spotted,
          or an opportunity you want to talk about — my inbox is open.
        </p>
      </header>

      <a className="contact__email" href={`mailto:${config.email}`}>
        <span className="contact__email-label">Email</span>
        <span className="contact__email-value">{config.email}</span>
      </a>

      <section className="contact__socials" aria-labelledby="elsewhere-heading">
        <h2 id="elsewhere-heading">Elsewhere</h2>
        <SocialLinks socials={config.socials} withLabels />
      </section>
    </div>
  );
}

export const Head = () => (
  <Seo
    title="Contact"
    pathname="/contact/"
    description={`Contact ${config.author}, ${config.authorRole}.`}
  />
);
