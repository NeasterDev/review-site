import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <div className="is-flex is-justify-content-space-between">
          <div><strong>Nelp</strong> by{" "}</div>
          <div><a className="title" href="?">Nicholas Easter </a></div>
          <div><a className="title" href="?">Joshua Jones </a></div>
          <div><a className="title" href="?">Elisa Vidal</a></div>
        </div>
      </div>
    </footer>
  );
}
