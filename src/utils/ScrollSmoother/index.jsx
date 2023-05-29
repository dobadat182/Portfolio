import { useEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const SmoothScroll = (props) => {
  useEffect(() => {
    ScrollSmoother.create();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {{props}}
      </div>
    </div>
  );
};

export default SmoothScroll;
