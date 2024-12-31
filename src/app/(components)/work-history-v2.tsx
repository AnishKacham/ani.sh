import TimeLine from "./timeline";
import { getExperienceItems } from "../(api)/experience";

export default async function WorkHistoryV2() {
  const workExperiences = await getExperienceItems();

  return (
    <>
      <div className="gap-14 flex flex-col w-full">
        <div className="text-3xl font-extrabold dark:text-slate-200 text-black w-full flex flex-row items-center gap-8">
          {/* <div className="border-t dark:border-gray-700 border-gray-200 h-0 grow" /> */}
          <div className="text-center w-64 dark:text-white">
            Work Experience
          </div>
          <div className="border-t dark:border-gray-700 border-gray-200 h-0 grow" />
        </div>
        <div>
          <TimeLine workExperiences={workExperiences}/>
        </div>
      </div>
    </>
  );
}
