export default function BlogLoading(){
    return(
        <div className="w-full h-full px-10 py-10 animate-pulse flex flex-col gap-2">
            <div className="rounded-sm h-40 w-full bg-slate-900 bg-slate-400"></div>
            <div className="h-8 w-full dark:bg-slate-700 bg-slate-300 rounded-sm"></div>
            <div className="h-12 w-80 dark:bg-slate-600 bg-slate-200 rounded-sm"></div>
            <div className="h-8 w-full dark:bg-slate-900 bg-slate-400 rounded-sm"></div>
            <div className="h-8 w-96 dark:bg-slate-700 bg-slate-300 rounded-sm"></div>
            <div className="h-8 w-full dark:bg-slate-900 bg-slate-400 rounded-sm"></div>
            <div className="h-8 w-full dark:bg-slate-700 bg-slate-200 rounded-sm"></div>
        </div>
    )
}