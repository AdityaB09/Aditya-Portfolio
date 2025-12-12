import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FadeIn from "./FadeIn";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <FadeIn>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2024 - Present"
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<WorkOutlineIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Graduate Student – MS Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of Illinois Chicago
              </h4>
              <p>
                Advanced IR, NLP, and RAG-driven project work with end-to-end
                systems and research.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - 2024"
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<WorkOutlineIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                CPulser Pvt. Ltd. – Mumbai
              </h4>
              <p>
                Built Django and MERN applications, integrated payments, and set
                up Dockerized deployments.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2023"
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<WorkOutlineIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Technical Team Member & DevOps Mentor
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Quest IT VESIT
              </h4>
              <p>
                Organized DevOps workshops (Docker, Kubernetes, Jenkins, AWS,
                GCP) and mentored junior students.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 - 2023"
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<WorkOutlineIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Undergraduate Projects & Teaching Volunteer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Mumbai</h4>
              <p>
                Built ML/security/healthcare projects while volunteering as a
                tutor and leading technical sessions.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </FadeIn>
      </div>
    </div>
  );
}

export default Timeline;
