export default function Loading() {
  return (
    <div className="min-h-[78svh] bg-[#fcfcf0]" role="status" aria-label="Loading page">
      <div className="h-1 overflow-hidden bg-[#1b5e20]/15">
        <div className="h-full w-1/3 animate-pulse rounded-full bg-gradient-to-r from-[#1b5e20] via-[#f59e0b] to-[#1b5e20]" />
      </div>
      <div className="mx-auto flex min-h-[calc(78svh-4px)] max-w-[1536px] items-center px-5 md:px-12">
        <div className="w-full max-w-2xl animate-pulse space-y-4" aria-hidden="true">
          <div className="h-4 w-44 rounded-full bg-[#3b8c2a]/15" />
          <div className="h-10 w-4/5 rounded-xl bg-[#14532d]/15 md:h-14" />
          <div className="h-10 w-2/3 rounded-xl bg-[#f59e0b]/15 md:h-14" />
          <div className="h-4 w-full rounded bg-slate-300/50" />
          <div className="h-4 w-3/4 rounded bg-slate-300/50" />
        </div>
      </div>
    </div>
  );
}
