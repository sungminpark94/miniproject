import React from 'react';

const CategorieTabs = ({onCategorySelect}) => {
  // logic
  const categories = [
    { icon: '🙅🏻‍♀️', label: '유찰매물', value: 'failed' },
    { icon: '🔥', label: '종료임박', value: 'ending' },
    { icon: '🚘', label: '전체매물', value: 'all' },
    { icon: '👨🏼‍🔧', label: '정비인증', value: 'repaired' },
    { icon: '👍', label: '바로판매', value: 'directSale' },
  ];

  // view
  return (
    <div className="flex justify-around py-4 bg-gray-100">
      {categories.map((category, index) => (
        <button type='button' key={index} className="text-center top-5" onClick={() => onCategorySelect(category.value)} 
>
          <span className="text-3xl">{category.icon}</span>
          <p className="text-sm mt-2">{category.label}</p>
        </button>
      ))}
    </div>
  );
};
export default CategorieTabs;