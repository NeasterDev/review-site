import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer class="footer main-bg-color o-5">
      <div>
        
        <ul className="is-flex is-align-items-end ">
          <li className="is-size-2">Nelp By,</li>
          <li className="is-size-4 mb-1 ml-3 mr-2"><a target="_blank" href="https://github.com/crazypants300">Nicholas Easter,</a></li>
          <li className="is-size-4 mb-1 mr-2"><a target="_blank" href="https://github.com/CoderJ01">Joshua Jones, and</a></li>
          <li className="is-size-4 mb-1 "><a target="_blank" href="https://github.com/Evidal19">Elisa Vidal</a></li>
        </ul>
      </div>
    </footer>
  );
}
