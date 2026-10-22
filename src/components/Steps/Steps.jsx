import React, { use } from 'react';
import UserIcon from '../../assets/user.png';
import PackageIcon from '../../assets/package.png';
import rocketIcon from '../../assets/rocket.png'
import axios from 'axios';
import StepsCard from './StepsCard';

const icons = {
  "user.png": UserIcon,
  "package.png": PackageIcon,
  "rocket.png": rocketIcon,
};

const promiseSteps = axios.get('steps.json')

const StepsSection = () => {
  const stepsDataRes = use(promiseSteps);
  const stepsData = stepsDataRes.data;
    return (
      <section className="container mx-auto">
        <div className="text-center mb-6">
          <h1 className="font-extrabold text-5xl mb-4">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-3'>
          {stepsData.map((step,index) => (
            <StepsCard key={index} step={step} icon={icons[step.icon]}></StepsCard>
          ))}
        </div>
      </section>
    );
};

export default StepsSection;