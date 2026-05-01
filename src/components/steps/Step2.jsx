import React from 'react';
import StepWrapper from '../ui/StepWrapper';
import InputBox from '../ui/InputBox';
import OptionGrid from '../ui/OptionGrid';
import SelectBox from '../ui/SelectBox';
import { Briefcase, Building2 } from 'lucide-react';

const INCOME_RANGES = [
  "Below 25k",
  "25k - 50k",
  "50k - 1Lac",
  "1Lac - 1.5Lac",
  "1.5Lac - 2.5Lac",
  "2.5Lac - 3Lac",
  "3Lac+"
];

const DESIGNATIONS = [
  "Software Engineer",
  "Manager",
  "Director",
  "Executive/C-Suite",
  "Doctor",
  "Lawyer",
  "Teacher/Professor",
  "Consultant",
  "Analyst",
  "Other"
];

export default function Step2({ data, updateData, errors }) {
  return (
    <StepWrapper 
      title="Profession" 
      stepInfo="2 OF 5"
    >
      <OptionGrid 
        label="Employment Type"
        options={["Salaried", "Businessman", "Govt Employ", "Professional"]}
        value={data.employmentType}
        onChange={(val) => updateData('employmentType', val)}
        error={errors.employmentType}
      />
      <InputBox 
        label="Field / Industry" 
        icon={Building2} 
        value={data.field || ''} 
        onChange={(e) => updateData('field', e.target.value)} 
        error={errors.field}
        placeholder="e.g. IT, Healthcare, Finance"
      />
      <div className="grid grid-cols-2 gap-4">
        <SelectBox
          label="Designation"
          icon={Briefcase}
          options={DESIGNATIONS}
          value={data.designation || ''}
          onChange={(e) => updateData('designation', e.target.value)}
          error={errors.designation}
          placeholder="Select role"
        />
        <SelectBox
          label="Income Per Month"
          options={INCOME_RANGES}
          value={data.income || ''}
          onChange={(e) => updateData('income', e.target.value)}
          error={errors.income}
          placeholder="Select range"
        />
      </div>
    </StepWrapper>
  );
}
