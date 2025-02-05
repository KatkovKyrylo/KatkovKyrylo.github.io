import Title from "../Title";
import { TEmploymentHistory } from "../../types/TEmploymentHistory";

export interface EmploymentHistoryProps {
  data: TEmploymentHistory;
}

export default function EmploymentHistory({ data }: EmploymentHistoryProps) {
  return (
    <div id="employment-history">
      <Title variant="h2">Employment History</Title>
      <ul className="flex flex-col gap-3 list-disc ml-5">
        {data.map(({ company, position, duration }) => (
          <li className="" key={`employment-history-${company}`}>
            <span>
              {position} | {position}
            </span>
            <br />
            <span className="text-sm text-gray-400">{duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
