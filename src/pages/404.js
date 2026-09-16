import React from "react";
import { Link } from "gatsby";

import LottieAnimation from "../components/LottieAnimation";
import Seo from "../components/Seo";
import animationData from "../../static/assets/lottie/404.json";
import "../styles/404.css";

export default function NotFound() {
  return (
    <div className="container not-found">
      <LottieAnimation
        animationData={animationData}
        className="not-found__animation"
        label="An animated illustration of a lost explorer"
      />

      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__lede">
        That URL does not exist — it may have been moved, or the link that
        brought you here was wrong.
      </p>

      <div className="not-found__actions">
        <Link className="button button--primary" to="/">
          Go home
        </Link>
        <Link className="button button--ghost" to="/posts/">
          Browse posts
        </Link>
      </div>
    </div>
  );
}

export const Head = () => (
  <>
    <Seo title="Page not found" pathname="/404/" />
    <meta name="robots" content="noindex" />
  </>
);
