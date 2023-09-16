import { getExperienceItems } from "../(api)/experience";
import { ExperienceToggle } from "./experience-toggle";

export default async function WorkHistory() {
  const workExperiences = await getExperienceItems();

  return (
    <div className="mt-32 w-full flex flex-col">
      <div className="md:grid flex flex-col grid-cols-[1fr_max-content] gap-8">
        <div className="flex flex-row items-center">
          <div className="w-full dark:border-slate-700 border-slate-200 border-t"></div>
        </div>
        <div className="w-full">
          <div className="text-4xl font-extrabold w-full text-center dark:text-slate-200">
            Work Experience
          </div>
        </div>
        <ExperienceToggle workExperiences={workExperiences} />
      </div>
    </div>
  );
}
