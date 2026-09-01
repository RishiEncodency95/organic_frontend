import { Building2, FileText, CloudUpload, ClipboardCheck, ChevronRight } from "lucide-react";

export default function ApplySteps() {
  const steps = [
    {
      id: 1,
      title: "Enterprise Details",
      subtitle: "Basic information",
      icon: <Building2 size={24} />,
      status: "active", // "active", "pending"
    },
    {
      id: 2,
      title: "Participation Details",
      subtitle: "Expo & Stall details",
      icon: <FileText size={24} />,
      status: "pending",
    },
    // {
    //   id: 3,
    //   title: "Documents",
    //   subtitle: "Upload required files",
    //   icon: <CloudUpload size={24} />,
    //   status: "pending",
    // },
    {
      id: 3,
      title: "Declaration",
      subtitle: "Review & submit",
      icon: <ClipboardCheck size={24} />,
      status: "pending",
    },
  ];

  return (
    <div className="w-full flex bg-white items-center justify-between px-6 py-4 rounded-xl overflow-x-auto hide-scrollbar">
      {steps.map((step, index) => {
        const isActive = step.status === "active";
        return (
          <div key={step.id} className="flex items-center gap-6 shrink-0 mr-6 lg:mr-0">
            {/* Step Item */}
            <div className="flex items-center gap-4">
              {/* Icon Container with Badge */}
              <div className="relative">
                {/* Number Badge */}
                <div
                  className={`absolute -top-1 -left-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold z-10 ${isActive
                    ? "bg-white text-[#176b27] border border-[#176b27]"
                    : "bg-[#e5e7eb] text-gray-500"
                    }`}
                >
                  {step.id}
                </div>
                {/* Circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center relative ${isActive
                    ? "bg-[#176b27] text-white"
                    : "border border-[#d1d5db] bg-white text-gray-400"
                    }`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span
                  className={`text-[15px] font-extrabold ${isActive ? "text-gray-900" : "text-gray-600"
                    }`}
                >
                  {step.title}
                </span>
                <span className="text-[12px] text-gray-500 font-medium">
                  {step.subtitle}
                </span>
              </div>
            </div>

            {/* Separator Arrow (Except for last item) */}
            {index < steps.length - 1 && (
              <ChevronRight className="text-gray-300 mx-2" size={20} strokeWidth={2} />
            )}
          </div>
        );
      })}
    </div>
  );
}
