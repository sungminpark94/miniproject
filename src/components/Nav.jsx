import React from 'react';
import { FaHome, FaHeart, FaPlus, FaComments, FaUser } from 'react-icons/fa'; // 아이콘 사용을 위해 react-icons 설치 필요

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <ul className="flex justify-around items-center py-3">
        <li className="flex flex-col items-center">
          <FaHome className="text-2xl" />
          <span className="text-xs">홈</span>
        </li>
        <li className="flex flex-col items-center">
          <FaHeart className="text-2xl" />
          <span className="text-xs">관심목록</span>
        </li>
        <li className="flex flex-col items-center">
          <FaPlus className="text-2xl" />
          <span className="text-xs">+</span>
        </li>
        <li className="flex flex-col items-center">
          <FaComments className="text-2xl" />
          <span className="text-xs">윈윈톡</span>
        </li>
        <li className="flex flex-col items-center">
          <FaUser className="text-2xl" />
          <span className="text-xs">프로필</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
