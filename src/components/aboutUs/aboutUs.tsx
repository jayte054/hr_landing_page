import { useState } from "react";
import { GenericButton } from "../button.tsx/button";
import "./aboutUs.css"

export const AboutUs = () => {
    const [showMore, setShowMore] = useState(false)

    const toggle = () => setShowMore((prev) => !prev)

    return (
      <div className="aboutus-container">
        <h2>About US</h2>
        <div>
          <span>
            Our journey began with a simple yet ambitious goal: to provide
            service beyond compare. <br />
            Over the years, we have evolved and grown, expanding our offerings
            to meet the diverse needs of our clients.
            <br /> From tailored solutions to comprehensive consultations, we
            leverage our <br />
            extensive knowledge and experience to drive transformative change
            and help our clients succeed <br />
            in today's dynamic business environment.
          </span>
        </div>
        <br />
        <div>
          {showMore && (
            <span>
              What sets us apart is our commitment to understanding our clients'
              unique challenges and goals.
              <br /> We take a collaborative approach, working closely with each
              client to develop customized strategies <br />
              that address their specific needs and objectives.
              <br /> Our team of seasoned professionals brings together a wealth
              of expertise from various industries, <br /> ensuring that we can
              provide insights and solutions that are both innovative and
              effective.
            </span>
          )}{" "}
        </div>

        <br />
        <GenericButton
          label={showMore ? "Show Less" : "Show More"}
          onClick={toggle}
          variant="secondary"
          type="button"
        />
        <div>
          <h2>Our Vision and Mission</h2>
          <span>
            Redefining industry standards through consultation, our innovative
            approach <br /> integrates cutting-edge technology with expert
            insights,
            <br />
            driving transformative change and setting new benchmarks for
            excellence.
          </span>
          <div className="statement">
            <div className="statement-vision">
              <h2>Our Vision</h2>
              <span>
                To become a premier organization dedicated <br />
                to enhancing both personal and professional capacities of <br />
                individuals and businesses, fostering efficiency, <br />
                heightened productivity, and innovation.
              </span>
            </div>
            <div className="statement-mission">
              <h2>Our Mission</h2>
              <span>
                Our mission is to cultivate an empowering atmosphere <br />
                for skill acquisition and capacity enhancement <br />
                that heralds a holistic growth and developent for <br />
                individuals and organizations
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}