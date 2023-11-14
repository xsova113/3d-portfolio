import { Link } from "react-router-dom";
import { projects } from "../../constants";
import { cn } from "../../lib/utils";
import { arrow } from "../../assets/icons";
import CTA from "../../components/CTA";

const Project = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Project
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I&apos;ve embarked on numerous projects throughout the years, but
          these are the ones I hold closest to my heart. Many of them are
          open-source, so if you come across something that piques your
          interest, feel free to explore the codebase and contribute your ideas
          for further enhancements. your collaboration is highly valued!
        </p>
      </div>

      <div className="my-20 flex flex-wrap gap-16">
        {projects.map((project) => (
          <div key={project.name} className="w-full lg:w-[400px]">
            <div className="block-container h-12 w-12">
              <div className={cn("btn-back rounded-xl", project.theme)} />
              <div className="btn-front flex items-center justify-center rounded-xl">
                <img
                  src={project.iconUrl}
                  alt="Project-Icon"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="font-poppins text-2xl font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="h-4 w-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Project;
