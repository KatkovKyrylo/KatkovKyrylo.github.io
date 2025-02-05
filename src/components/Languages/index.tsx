import Title from "../Title";
import { TLanguages } from "../../types/TLanguages";

export interface LanguagesProps {
  list: TLanguages;
}

export default function Languages({ list }: LanguagesProps) {
  return (
    <div id="languages">
      <Title variant="h2">Languages</Title>
      <div className="grid grid-cols-1 px-2 flex-wrap gap-x-3 gap-y-6 bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow sm:px-6 sm:grid-cols-2 xl:gap-x-16 2xl:grid-cols-3">
        {list.map(({ name, level, spoken, written }, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold text-gray-900 capitalize mb-4">{name}</h3>
            <div className="text-gray-900 font-bold text-base">
              <p>
                ⭐ <span>Level:</span> {level}
              </p>
              <p>
                🗣️ <span>Spoken:</span> {spoken}
              </p>
              <p>
                ✍️ <span>Written:</span> {written}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
