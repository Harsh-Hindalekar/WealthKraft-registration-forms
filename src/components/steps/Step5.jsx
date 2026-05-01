import React from 'react';
import StepWrapper from '../ui/StepWrapper';
import OptionGrid from '../ui/OptionGrid';

export default function Step5({ data, updateData, errors }) {
  return (
    <StepWrapper 
      title="Risk Profile" 
      stepInfo="5 OF 5"
    >
      <OptionGrid 
        label="Select your risk tolerance level"
        options={["High", "Medium", "Low"]}
        value={data.riskProfile}
        onChange={(val) => updateData('riskProfile', val)}
        error={errors.riskProfile}
        columns={1}
      />
    </StepWrapper>
  );
}
