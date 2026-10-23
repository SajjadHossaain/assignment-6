import { Check } from 'lucide-react';
import React from 'react';

const TransparentFeature = ({feature}) => {
    return (
        <p className='flex items-center gap-2'><Check className='text-green-400'></Check>{feature}</p>
    );
};

export default TransparentFeature;