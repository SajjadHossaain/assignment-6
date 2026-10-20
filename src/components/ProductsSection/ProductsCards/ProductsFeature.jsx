import { Check } from 'lucide-react';
import React from 'react';

const ProductsFeature = ({ feature }) => {
  return (
    <p className="flex gap-2 text-[#627382]">
      <Check className="text-green-500"></Check>
      {feature}
    </p>
  );
};

export default ProductsFeature;