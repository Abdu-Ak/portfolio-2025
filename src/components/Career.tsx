import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Zaigo Infotech</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              With 2+ years of experience at Zaigo Infotech, I’ve worked on
              multiple frontend projects where I developed new features,
              optimized UI performance, and improved overall usability. I
              specialize in creating modern, user-friendly interfaces using the
              latest frontend technologies. My contributions focus on elevating
              the user experience, maintaining code quality, and ensuring
              reliable, efficient, and visually consistent UI development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>Brototype</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              During my internship at Brototype, I embarked on a self-taught
              journey to master the MERN stack. This transformative experience
              allowed me to build a strong foundation in MongoDB, Express.js,
              React, and Node.js through hands-on projects and real-world
              problem-solving. As a self-taught developer, I learned to embrace
              challenges, debug independently, and continuously improve my
              coding skills while developing full-stack applications from
              scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
