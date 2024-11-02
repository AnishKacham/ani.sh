import Link from "next/link";
import { OSOURCEDATA } from "../constants";

export default function OpenSource() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-3xl font-extrabold dark:text-white flex flex-col mb-6">
        <div className="flex flex-row items-center gap-8">
          <div>Open Source Contributions</div>
          <div className="border-t dark:border-gray-700 border-gray-200 h-0 grow" />
        </div>
      </div>

      {OSOURCEDATA.map((osourceitem, index) => {
        return (
          <div key={index} className="w-full">
            <Link
              href={"https://github.com/juspay/hyperswitch"}
              className="text-md text-white"
            >
              <span className="underline dark:text-red-400 text-red-600">
                {osourceitem.repo_display}
              </span>
              <span className="text-sm ml-2"> {osourceitem.month_year} </span>
            </Link>
            <div className="w-full border p-6 rounded-md dark:border-gray-600 border-gray-200 mt-1">
              <Link href={"https://github.com/juspay/hyperswitch/pull/6250"}>
                <span className="text-xl text-white">
                  {" "}
                  {osourceitem.pr_title}{" "}
                </span>
                <span className="text-xl">#{osourceitem.pr_no}</span>
              </Link>
              <div className="mt-1 ml-5">
                <ul>
                  <li className="text-md">{osourceitem.pr_description}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
