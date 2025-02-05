//import { TExperienceWork } from "../../types/TExperienceWork";
import { TPreviousProjects } from "../../types/TPreviousProjects";
import LinkWithBrackets from "../LinkWithBrackets";
import Title from "../Title";

interface PreviousProjectsProps {
  projects: TPreviousProjects;
}

export default function PreviousProjects({ projects }: PreviousProjectsProps) {
  return (
    <div id="previous-projects">
      <Title variant="h2">Previous projects</Title>
      <div className="flex flex-col gap-16">
        {projects.map(({ title, duration, href, position, previewSrc, results, technologies }) => (
          <div key={`previous-projects-${title}`} className="flex flex-col items-start gap-3">
            <Title variant="h3" className="text-2xl text-white">
              {title}
            </Title>
            <a className="w-full" target="_blank" href={href}>
              <img
                className="w-full block h-48 bg-slate-600 rounded-md object-cover object-top sm:h-58 xl:h-64 2xl:h-72"
                src={previewSrc}
                alt={title + " preview"}
              />
            </a>
            <div>
              <div>
                <span className="font-bold">Result: </span>
                {results}
              </div>
              <div className="flex gap-1 mt-3">
                <span>
                  <span className="font-bold">Technologies -</span> {technologies}
                </span>
              </div>
              <div>
                <span className="font-bold">Duration -</span> {duration}
              </div>
              <div>
                <span className="font-bold">Position -</span> {position}
              </div>
            </div>
            <LinkWithBrackets href={href}>See work</LinkWithBrackets>
          </div>
        ))}
      </div>
    </div>
  );
}
