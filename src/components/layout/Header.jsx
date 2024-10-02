import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <p className='text-3xl border-blue-300'>윈윈딜</p>
      <input 
        type="text" 
        placeholder="원하는 매물을 찾아보세요" 
        className="w-3/4 p-2 border border-gray-300 rounded" 
      />
      <div className="flex space-x-4">
        <button type='button' className="text-2xl">🔍</button>
        <button type='button' className="text-2xl">⚙️</button>
      </div>
    </header>
  );
};

export default Header;
