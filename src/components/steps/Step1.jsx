import React from 'react';
import StepWrapper from '../ui/StepWrapper';
import InputBox from '../ui/InputBox';
import { User, Phone, Calendar, Mail, MapPin } from 'lucide-react';

export default function Step1({ data, updateData, errors }) {
  return (
    <StepWrapper 
      title="Basic Details" 
      subtitle="Let's get to know you better" 
      stepInfo="1 OF 5"
    >
      <InputBox 
        label="Full Name" 
        icon={User} 
        value={data.fullName || ''} 
        onChange={(e) => updateData('fullName', e.target.value)} 
        error={errors.fullName}
        placeholder="Enter your full name"
      />
      <InputBox 
        label="Contact Number" 
        type="tel"
        icon={Phone} 
        value={data.contactNumber || ''} 
        onChange={(e) => updateData('contactNumber', e.target.value.replace(/\D/g, '').slice(0, 10))} 
        error={errors.contactNumber}
        placeholder="10-digit mobile number"
      />
      <div className="grid grid-cols-2 gap-4">
        <InputBox 
          label="Age" 
          type="number"
          icon={Calendar} 
          value={data.age || ''} 
          onChange={(e) => updateData('age', e.target.value)} 
          error={errors.age}
          placeholder="Years"
        />
        <InputBox 
          label="City" 
          icon={MapPin} 
          value={data.city || ''} 
          onChange={(e) => updateData('city', e.target.value)} 
          error={errors.city}
          placeholder="Your city"
        />
      </div>
      <InputBox 
        label="Email Address" 
        type="email"
        icon={Mail} 
        value={data.email || ''} 
        onChange={(e) => updateData('email', e.target.value)} 
        error={errors.email}
        placeholder="name@example.com"
      />
    </StepWrapper>
  );
}
