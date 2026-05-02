import React, { useState, useEffect } from 'react';
import StepWrapper from '../ui/StepWrapper';
import InputBox from '../ui/InputBox';
import SelectBox from '../ui/SelectBox';
import { User, Phone, Calendar, Mail, MapPin, Map } from 'lucide-react';
import { State, City } from 'country-state-city';

export default function Step1({ data, updateData, errors }) {
  const [statesList, setStatesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    // Fetch all states in India
    const states = State.getStatesOfCountry('IN');
    setStatesList(states);

    // If there is an already selected state, load its cities
    if (data.state) {
      const selectedState = states.find(s => s.name === data.state);
      if (selectedState) {
        const cities = City.getCitiesOfState('IN', selectedState.isoCode);
        setCitiesList(cities.map(c => c.name));
      }
    }
  }, [data.state]);

  const handleStateChange = (e) => {
    const stateName = e.target.value;
    updateData('state', stateName);
    updateData('city', ''); // Reset city on state change

    const selectedState = statesList.find(s => s.name === stateName);
    if (selectedState) {
      const cities = City.getCitiesOfState('IN', selectedState.isoCode);
      setCitiesList(cities.map(c => c.name));
    } else {
      setCitiesList([]);
    }
  };

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputBox 
          label="Contact Number" 
          type="tel"
          icon={Phone} 
          value={data.contactNumber || ''} 
          onChange={(e) => updateData('contactNumber', e.target.value.replace(/\D/g, '').slice(0, 10))} 
          error={errors.contactNumber}
          placeholder="10-digit mobile number"
        />
        <InputBox 
          label="Age" 
          type="number"
          icon={Calendar} 
          value={data.age || ''} 
          onChange={(e) => updateData('age', e.target.value)} 
          error={errors.age}
          placeholder="Years"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectBox 
          label="State" 
          icon={Map} 
          value={data.state || ''} 
          onChange={handleStateChange} 
          error={errors.state}
          options={statesList.map(s => s.name)}
          placeholder="Select State"
        />
        <SelectBox 
          label="City" 
          icon={MapPin} 
          value={data.city || ''} 
          onChange={(e) => updateData('city', e.target.value)} 
          error={errors.city}
          options={citiesList}
          placeholder="Select City"
        />
      </div>
    </StepWrapper>
  );
}
