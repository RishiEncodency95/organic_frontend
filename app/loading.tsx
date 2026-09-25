export default function Loading() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-[200] h-1 overflow-hidden bg-[#1b5e20]/15"
      role="status"
      aria-label="Loading page"
    >
      <div className="h-full w-1/3 animate-pulse rounded-full bg-gradient-to-r from-[#1b5e20] via-[#f59e0b] to-[#1b5e20]" />
    </div>
  );
}
