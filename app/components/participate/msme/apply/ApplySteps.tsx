import { Check } from "lucide-react";
import React from "react";

export default function ApplySteps({ currentStep = 1 }: { currentStep?: number }) {
  const steps = [
    {
      id: 1,
      title: "Enterprise Details",
    },
    {
      id: 2,
      title: "Participation Details",
    },
    // {
    //   id: 3,
    //   title: "Documents",
    // },
    {
      id: 3,
      title: "Declaration",
    },
  ];

  return (
    <div className="w-full flex bg-white items-center justify-between px-6 py-5 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-x-auto hide-scrollbar">
      {steps.map((step, index) => {
        const isCompleted = step.id < currentStep;
        const isActive = step.id === currentStep;

        let subtitle = "Pending";
        if (isCompleted) subtitle = "Completed";
        if (isActive) subtitle = "In Progress";

        return (
          <React.Fragment key={step.id}>
            <div className="flex items-center gap-3 shrink-0">
              {/* Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] ${isCompleted
                    ? "bg-[#176b27] text-white"
                    : isActive
                      ? "bg-[#176b27] text-white"
                      : "bg-[#f1f6f1] text-[#91a592]"
                  }`}
              >
                {isCompleted ? <Check size={20} strokeWidth={3} /> : step.id}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span
                  className={`text-[14px] font-bold ${isCompleted || isActive ? "text-[#111827]" : "text-gray-500"
                    }`}
                >
                  {step.title}
                </span>
                <span className={`text-[12px] font-semibold ${isActive ? "text-[#176b27]" : "text-gray-400"
                  }`}>
                  {subtitle}
                </span>
              </div>
            </div>

            {/* Separator Dashed Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 min-w-[30px] lg:min-w-[60px] h-[0px] border-b-[2px] border-dashed border-[#d1d5db]"></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
