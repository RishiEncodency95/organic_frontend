import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#f8fbf6] p-8 lg:p-16 flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-8 lg:p-12 shadow-sm border border-[#e2eae1]">
        <h1 className="text-3xl font-bold text-[#07553a] mb-4">Thank You</h1>
        <p className="text-[#314256] leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-[#314256] leading-relaxed mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link
          href="/careers"
          className="inline-block rounded-full bg-[#075f38] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#054c2d]"
        >
          ← Back to Careers
        </Link>
      </div>
    </div>
  );
}
