import Title from "../Title";

export interface SkillsAndExpertiseProps {
  list: string[];
}

export default function SkillsAndExpertise({ list }: SkillsAndExpertiseProps) {
  return (
    <div id="skills-and-expertise">
      <Title variant="h2">skills and expertise</Title>

      <div className="flex flex-wrap gap-2 xl:max-w-2/3">
        {list.map((item) => (
          <div key={item}>✔️ {item}</div>
        ))}
      </div>
    </div>
  );
}
