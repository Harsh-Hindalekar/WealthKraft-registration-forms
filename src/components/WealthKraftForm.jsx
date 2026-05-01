import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TopBar from './TopBar';
import ProgressBar from './ProgressBar';
import LoadingOverlay from './LoadingOverlay';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import { cn } from '../lib/utils';
import { CheckCircle2 } from 'lucide-react';

export default function WealthKraftForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const totalSteps = 5;

  const updateData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    // Clear error on change
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: null }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    let isValid = true;

    if (currentStep === 0) {
      if (!formData.fullName) newErrors.fullName = "Full name is required";
      if (!formData.contactNumber || formData.contactNumber.length !== 10) newErrors.contactNumber = "Valid 10-digit number required";
      if (!formData.age) newErrors.age = "Age is required";
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required";
      if (!formData.city) newErrors.city = "City is required";
    } else if (currentStep === 1) {
      if (!formData.employmentType) newErrors.employmentType = "Employment type is required";
      if (!formData.field) newErrors.field = "Field is required";
      if (!formData.designation) newErrors.designation = "Designation is required";
      if (!formData.income) newErrors.income = "Income range is required";
    } else if (currentStep === 2) {
      if (!formData.goal) newErrors.goal = "Goal is required";
      if (!formData.horizon) newErrors.horizon = "Horizon is required";
    } else if (currentStep === 3) {
      if (!formData.mutualFundsBefore) newErrors.mutualFundsBefore = "Please select an option";
      if (!formData.investType) newErrors.investType = "Please select how you want to invest";
      if (!formData.sipAmount) newErrors.sipAmount = "SIP Amount is required";
      if (!formData.totalInvestment) newErrors.totalInvestment = "Total Investment is required";
    } else if (currentStep === 4) {
      if (!formData.riskProfile) newErrors.riskProfile = "Risk profile is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      triggerTransition(() => setCurrentStep(prev => prev + 1));
    }
  };

  const handleBack = () => {
    triggerTransition(() => setCurrentStep(prev => prev - 1));
  };

  const handleSubmit = () => {
    if (validateStep()) {
      triggerTransition(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          alert('Form Submitted Successfully!');
          // Reset form or redirect
          setFormData({});
          setCurrentStep(0);
          setIsSubmitted(false);
        }, 1500);
      }, 800);
    }
  };

  const triggerTransition = (action, delay = 500) => {
    setIsLoading(true);
    setTimeout(() => {
      action();
      setIsLoading(false);
    }, delay);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <Step1 data={formData} updateData={updateData} errors={errors} key="step1" />;
      case 1: return <Step2 data={formData} updateData={updateData} errors={errors} key="step2" />;
      case 2: return <Step3 data={formData} updateData={updateData} errors={errors} key="step3" />;
      case 3: return <Step4 data={formData} updateData={updateData} errors={errors} key="step4" />;
      case 4: return <Step5 data={formData} updateData={updateData} errors={errors} key="step5" />;
      default: return null;
    }
  };

  return (
    <>
      <TopBar />
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <LoadingOverlay isVisible={isLoading} />
      
      <div className="flex-1 relative overflow-y-auto overflow-x-hidden flex flex-col pb-12">
        <AnimatePresence mode="wait">
          {!isLoading && renderStep()}
        </AnimatePresence>

        <div className="px-6 pb-6 flex items-center justify-between bg-white z-10">
          {currentStep > 0 ? (
            <button 
              onClick={handleBack}
              disabled={isLoading}
              className="px-6 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              Back
            </button>
          ) : <div />}

          {currentStep < totalSteps - 1 ? (
            <button 
              onClick={handleNext}
              disabled={isLoading}
              className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-primary-gold to-secondary-gold hover:-translate-y-1 hover:shadow-input-focus transition-all ml-auto"
            >
              Next
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              disabled={isLoading || isSubmitted}
              className={cn(
                "px-8 py-3 rounded-xl font-bold text-white transition-all ml-auto flex items-center gap-2",
                isSubmitted 
                  ? "bg-green-500 hover:bg-green-600" 
                  : "bg-gradient-to-r from-primary-gold to-secondary-gold hover:-translate-y-1 hover:shadow-input-focus"
              )}
            >
              {isSubmitted ? (
                <>Submitted <CheckCircle2 size={18} strokeWidth={3} /></>
              ) : "Submit"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
