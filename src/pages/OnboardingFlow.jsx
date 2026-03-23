import React, { useState } from "react";
import Onboarding1 from "../OnboardingComponents/OnboardingOne";
import Onboarding2 from "../OnboardingComponents/OnboardingTwo";
import Onboarding3 from "../OnboardingComponents/OnboardingThree";

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);
  const skipToLast = () => setStep(3);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div key={step} className="animate-in fade-in duration-700 ease-in-out">
        {step === 1 && <Onboarding1 next={next} skip={skipToLast} />}
        {step === 2 && <Onboarding2 next={next} prev={prev} skip={skipToLast} />}
        {step === 3 && <Onboarding3 prev={prev} />}
      </div>
    </div>
  );
};

export default OnboardingFlow;