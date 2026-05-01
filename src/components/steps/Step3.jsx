import React from 'react';
import StepWrapper from '../ui/StepWrapper';
import OptionGrid from '../ui/OptionGrid';

export default function Step3({ data, updateData, errors }) {
  return (
    <StepWrapper 
      title="Investment Goal" 
      stepInfo="3 OF 5"
    >
      <OptionGrid 
        label="Primary Goal"
        options={["Retirement", "Child Education", "Marriage", "All Above"]}
        value={data.goal}
        onChange={(val) => updateData('goal', val)}
        error={errors.goal}
        columns={2}
      />
      <OptionGrid 
        label="Investment Horizon"
        options={["1-3 years", "3-5 years", "5+ years", "Others"]}
        value={data.horizon}
        onChange={(val) => updateData('horizon', val)}
        error={errors.horizon}
        columns={2}
      />
    </StepWrapper>
  );
}
