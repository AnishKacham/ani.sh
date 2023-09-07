import { getExperienceItems } from "../(api)/experience";
import { ExperienceToggle } from "./experience-toggle";

export default async function WorkHistory() {
  const workExperiences = await getExperienceItems();

  return (
    <div className="mt-10 w-full flex flex-col gap-8">
      <div className="md:grid flex flex-col grid-cols-4 gap-x-2 gap-y-8">
        <div className="col-span-3 flex flex-row items-center">
          <div className="w-full dark:border-slate-700 border-slate-200 border-t"></div>
        </div>
        <div className="col-span-1">
          <div className="text-4xl font-extrabold text-black dark:text-slate-400 text-gray-900">
            Exp.
          </div>
        </div>
        <ExperienceToggle workExperiences={workExperiences} />
      </div>
    </div>
  );
}
