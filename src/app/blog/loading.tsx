function blogSkeleton(i: number) {
  return (
    <div
      className="py-8 px-8 h-40 w-full dark:bg-slate-700 bg-slate-300 rounded-sm flex flex-col gap-2"
      key={i}
    >
      <div className="h-8 w-6/12 dark:bg-slate-600 bg-slate-200 rounded-sm "></div>
      <div className="flex flex-row w-6/12 h-4 gap-2">
        <div className="h-full w-2/12 dark:bg-neutral-400 bg-slate-200 rounded-sm "></div>
        <div className="h-full w-1/12 bg-red-400 rounded-sm "></div>
        <div className="h-full w-1/12 bg-red-400 rounded-sm "></div>
      </div>
      <div className="h-8 w-9/12 dark:bg-neutral-600 bg-slate-200 rounded-sm "></div>
    </div>
  );
}

export default function BlogsLoading() {
  let skeletons = Array.from({ length: 5 }, (_, i) => {
    return blogSkeleton(i);
  });
  return (
    <div className="w-full py-10 animate-pulse flex flex-col gap-8 divide-gray-700 divide-y">
      {skeletons.map((Skeleton) => Skeleton)}
    </div>
  );
}
