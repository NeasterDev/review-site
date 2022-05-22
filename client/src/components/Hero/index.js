import React from "react";
import image from "../../img/hero-img.jpg";
import w_200 from "../../img/w_200.jpg";
import w_471 from "../../img/w_471.jpg";
import w_663 from "../../img/w_663.jpg";
import w_835 from "../../img/w_835.jpg";
import w_953 from "../../img/w_953.jpg";
import w_1055 from "../../img/w_1055.jpg";
import w_1169 from "../../img/w_1169.jpg";
import w_1279 from "../../img/w_1279.jpg";
import w_1368 from "../../img/w_1368.jpg";
import w_1400 from "../../img/w_1400.jpg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="is-relative">
        <div className="hero-title">
          <div className="font-size-8rem">Nelp</div>
          <div className="font-size-4rem">National Park Reviews</div>
        </div>

        <img
          className=""
          src={image}
          srcSet={`${w_200} 200w, ${w_471} 471w, ${w_663} 663w, ${w_835} 835w, ${w_953} 935w,, ${w_1055} 1055w, ${w_1169} 1169w, ${w_1279} 1279w,  ${w_1368} 1368w, ${image} 1400w`}
          alt="Nature"
        />
      </div>
    </section>
  );
};
