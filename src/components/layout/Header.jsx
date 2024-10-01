import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <input 
        type="text" 
        placeholder="원하는 매물을 찾아보세요" 
        className="w-3/4 p-2 border border-gray-300 rounded" 
      />
      <div className="flex space-x-4">
        <i className="text-2xl">🔍</i>
        <i className="text-2xl">❤️</i>
      </div>
    </header>
  );
};

export default Header;
