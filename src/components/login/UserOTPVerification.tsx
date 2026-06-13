import { useRef, useState } from "react";
import StepNavigation from "./StepNavigation";
import "./UserOTPVerification.scss";

interface FormData {
  otp: string[];
}

interface UserOTPVerificationProps {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function UserOTPVerification({
  data,
  onChange,
  onBack,
  onContinue,
}: UserOTPVerificationProps) {
  const [otp, setOtp] = useState<string[]>(data.otp || ["", "", "", ""]);
  const [error, setError] = useState<string>("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (value && !/^\d$/.test(value)) return;

    setError("");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange({ otp: newOtp });

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleContinue = () => {
    const isComplete = otp.every((d) => d !== "");
    if (!isComplete) {
      setError("Please enter the complete 4-digit OTP");
      return;
    }
    onContinue();
  };

  const isComplete = otp.every((d) => d !== "");

  return (
    <div className="flex flex-col flex-1">
      <h2 className="text-xl font-bold text-foreground mb-2">
        OTP Verification
      </h2>
      <p className="text-xs text-label mt-10 mb-2">
        An OTP has been sent to your mobile number
      </p>

      <div className="mb-4">
        <div className="flex gap-4 mb-4">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { inputRefs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={`otp-input ${digit ? "filled" : ""}`}
            />
          ))}
        </div>
        {error && <p className="text-xs text-destructive mt-2">{error}</p>}
      </div>

      <p className="text-sm text-label">
        Did not receive OTP ?{" "}
        <button
          type="button"
          className="text-primary hover:text-blue-600"
        >
          Resend OTP
        </button>
      </p>

      <StepNavigation
        onBack={onBack}
        onContinue={handleContinue}
        disableContinue={!isComplete}
      />
    </div>
  );
}
