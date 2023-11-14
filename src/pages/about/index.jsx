import { experiences, skills } from "../../constants/index";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          George
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Canada, specializing in web development
          through hands-on learning and building application.
        </p>
      </div>

      <div className="flex flex-col py-10">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container h-20 w-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front flex items-center justify-center rounded-xl">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I worked with all sorts of clients and projects, leveling up my
            skills and knowledge. Here&apos;s the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.company_name}
                date={exp.date}
                icon={
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      src={exp.icon}
                      alt={exp.company_name}
                      className="h-[60%] w-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: exp.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: exp.iconBg,
                  boxShadow: "none",
                }}
              >
                <h3 className="font-poppins text-xl font-semibold text-black">
                  {exp.title}
                </h3>
                <p
                  className="font-base font-medium text-black-500"
                  style={{ margin: 0 }}
                >
                  {exp.company_name}
                </p>

                <ul className="my-5 ml-5 list-disc space-y-2">
                  {exp.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="pl-1 text-sm font-normal text-black-500/50"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      
      <CTA />
    </section>
  );
};

export default About;
