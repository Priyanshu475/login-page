import { useState } from "react";
import { User, Check, Briefcase } from "lucide-react";
import StepNavigation from "./StepNavigation";

interface FormData {
  accountType: string;
}

interface AccountTypeSelectionProps {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
  onBack?: () => void;
  onContinue: () => void;
}

const options = [
  { value: "personal", label: "Personal", icon: User },
  { value: "business", label: "Business", icon: Briefcase },
];

export default function AccountTypeSelection({
  data,
  onChange,
  onBack,
  onContinue,
}: AccountTypeSelectionProps) {
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!data.accountType) {
      setError("Please select an account type to continue");
      return;
    }
    onContinue();
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="mb-6">
        <p className="text-base text-foreground">
          To join us tell us{" "}
          <span className="font-semibold">what type of account</span> you are
          opening
        </p>
      </div>

      <div className="space-y-3">
        {options.map((opt) => {
          const selected = data.accountType === opt.value;
          const Icon = opt.icon;
          return (
            <button
              key={opt.value}
              onClick={() => {
                setError("");
                onChange({ accountType: opt.value });
              }}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border-2 transition-all text-left
  ${
    selected
      ? "border-primary bg-primary/5"
      : "border-border bg-white hover:border-primary"
  }
`}
            >
              <Icon
                className={`w-4 h-4 ${selected ? "text-primary" : "text-gray-400"}`}
              />
              <span
                className={`font-medium flex-1 ${selected ? "text-primary" : "text-foreground"}`}
              >
                {opt.label}
              </span>
              {selected && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" stroke="white" strokeWidth={3} />
                </div>
              )}
            </button>
          );
        })}
        {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      </div>

      <StepNavigation
        onBack={onBack}
        onContinue={handleContinue}
        disableContinue={false}
      />
    </div>
  );
}
