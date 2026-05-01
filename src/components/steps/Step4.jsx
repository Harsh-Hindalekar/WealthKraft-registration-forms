import React from 'react';
import StepWrapper from '../ui/StepWrapper';
import OptionGrid from '../ui/OptionGrid';
import InputBox from '../ui/InputBox';
import { IndianRupee } from 'lucide-react';

export default function Step4({ data, updateData, errors }) {
  return (
    <StepWrapper 
      title="Interested In?" 
      stepInfo="4 OF 5"
    >
      <OptionGrid 
        label="Invested in Mutual Funds before?"
        options={["Yes", "No"]}
        value={data.mutualFundsBefore}
        onChange={(val) => updateData('mutualFundsBefore', val)}
        error={errors.mutualFundsBefore}
      />
      <OptionGrid 
        label="How would you like to invest?"
        options={["SIP", "Lumpsum", "Others"]}
        value={data.investType}
        onChange={(val) => updateData('investType', val)}
        error={errors.investType}
        columns={3}
      />
      <div className="grid grid-cols-2 gap-4">
        <InputBox 
          label="SIP Amount" 
          type="number"
          icon={IndianRupee} 
          value={data.sipAmount || ''} 
          onChange={(e) => updateData('sipAmount', e.target.value)} 
          error={errors.sipAmount}
          placeholder="0.00"
          description="Monthly investment via SIP"
        />
        <InputBox 
          label="Total Investment" 
          type="number"
          icon={IndianRupee} 
          value={data.totalInvestment || ''} 
          onChange={(e) => updateData('totalInvestment', e.target.value)} 
          error={errors.totalInvestment}
          placeholder="0.00"
          description="Total targeted investment amount"
        />
      </div>
    </StepWrapper>
  );
}
