import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import images
import fieldyImg from "../assets/fieldy.png";
import prostrategyImg from "../assets/prostrategy.png";
import legaltypeImg from "../assets/legaltype.png";
import leadcircleImg from "../assets/leadcircle.png";
import buildchatbotImg from "../assets/buildchatbot.png";
import zippyformImg from "../assets/zippyform.png";

gsap.registerPlugin(useGSAP);

const contributions = [
  {
    title: "Fieldy",
    category: "FSM Software",
    tools: "Next.js, Tailwind CSS, React Query",
    image: fieldyImg,
    link: "https://getfieldy.com/",
    video: "fieldy-action.gif",
  },
  {
    title: "ProStrategy",
    category: "SPM Software",
    tools: "React, Tailwind CSS, SWR",
    image: prostrategyImg,
    link: "https://qa-prostrategy.zaiportal.com/login",
    // video: "fieldy-action.gif",
  },
  {
    title: "LegalType",
    category: "Legal Writing Software",
    tools: "Next.js, Tailwind CSS",
    image: legaltypeImg,
    link: "https://app.legaltype.com/",
    // video: "fieldy-action.gif",
  },
  {
    title: "Lead Circle",
    category: "Lead Management Software",
    tools: "JavaScript, CSS, HTML",
    image: leadcircleImg,
    link: "https://leadcircle.ai/",
    // video: "fieldy-action.gif",
  },
  {
    title: "BuildChatbot",
    category: "Chatbot Software",
    tools: "JavaScript, CSS, HTML",
    image: buildchatbotImg,
    link: "https://buildchatbot.ai/",
    // video: "fieldy-action.gif",
  },
  {
    title: "Zippy Form",
    category: "Form Builder Software",
    tools: "JavaScript, CSS, HTML",
    image: zippyformImg,
    link: "https://zippyform.io/",
    // video: "fieldy-action.gif",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Contributions</span>
        </h2>
        <div className="work-flex">
          {contributions?.map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{_value.title}</h4>
                    <p>{_value.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{_value.tools}</p>
              </div>
              <WorkImage
                image={_value.image}
                alt={_value.title}
                link={_value.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
