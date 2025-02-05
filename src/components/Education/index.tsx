import Title from "../Title";
import { TEducation } from "../../types/TEducation";

export interface EducationProps {
  data: TEducation;
}

export default function Education({ data }: EducationProps) {
  return (
    <div id="education">
      <Title variant="h2">Education</Title>
      <div className="flex flex-col gap-3">
        {data.map(({ duration, list }, i) => (
          <div key={`education-${duration}-${i}`}>
            <p className="text-lg mb-2 tracking-wider font-bold">{duration}</p>
            <ul className="flex flex-col gap-2 list-disc ml-5">
              {list.map((item) => (
                <li key={`education-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
