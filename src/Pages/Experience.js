import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
         
        >
          <h3 className="vertical-timeline-element-title">
          University of Information Technology and Management in Rzeszow
          </h3>
          <p>Engineering diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          iconStyle={{ background: "#006633", color: "#fff" }}
          
        >
          <h3 className="vertical-timeline-element-title">
          Bury Sp. z o.o.
          </h3>
          <p>Junior forwarding specialist</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2017"
          iconStyle={{ background: "#006633", color: "#fff" }}
          
        >
          <h3 className="vertical-timeline-element-title">
          Bury Sp. z o.o.
          </h3>
          <p>forwarding specialist</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: "#006633", color: "#fff" }}
          
        >
          <h3 className="vertical-timeline-element-title">
          Bury Sp. z o.o.
          </h3>
          <p>forwarding specialist - leader</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#006633", color: "#fff" }}
         
        >
          <h3 className="vertical-timeline-element-title">
          Bury Sp. z o.o.
          </h3>
          <p>junior logistics specialist</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 "
          iconStyle={{ background: "#006633", color: "#fff" }}
         
        >
          <h3 className="vertical-timeline-element-title">
          Bury Sp. z o.o.
          </h3>
          <p>Junior Project Launch Manager</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;