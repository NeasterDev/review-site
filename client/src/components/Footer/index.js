import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer class="footer main-bg-color o-5 is-flex is-justify-content-center">
      <div className="">Created by,</div>
      <div className="ml-2 has-text-weight-bold"><a target="_blank" href="https://github.com/crazypants300">Nicholas Easter,</a></div>
      <div className="ml-2 has-text-weight-bold"><a target="_blank" href="https://github.com/CoderJ01">Joshua Jones, </a>and</div>
      <div className="ml-2 has-text-weight-bold"><a target="_blank" href="https://github.com/Evidal19">Elisa Vidal</a></div>
    </footer>
  );
}
