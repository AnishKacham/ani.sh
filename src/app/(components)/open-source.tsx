import Link from "next/link";
import { OSOURCEDATA } from "../constants";

export default function OpenSource() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-3xl font-extrabold dark:text-white flex flex-col mb-6">
        <div className="flex flex-row items-center gap-8">
          <div>Open Source Contributions</div>
          <div className="border-t dark:border-gray-700 border-black h-0 grow" />
        </div>
      </div>

      {OSOURCEDATA.map((osourceitem, index) => {
        return (
          <div key={index} className="w-full">
            <Link href={osourceitem.repo_link} className="text-md text-white">
              <span className="underline dark:text-red-400 text-red-600">
                {osourceitem.repo_display}
              </span>
              <span className="text-sm ml-2"> {osourceitem.month_year} </span>
            </Link>
            <div className="w-full border p-6 rounded-md border-slate-300 dark:border-gray-700 mt-1">
              <Link href={osourceitem.repo_link + "/pull/" + osourceitem.pr_no}>
                <span className="text-xl dark:text-white hover:underline">
                  {" "}
                  {osourceitem.pr_title}{" "}
                </span>
                <span className="text-xl text-gray-400 dark:text-gray-500">
                  #{osourceitem.pr_no}
                </span>
              </Link>
              <div className="mt-1 ml-5">
                <ul>
                  <li className="text-md dark:text-gray-300">
                    {osourceitem.pr_description}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
