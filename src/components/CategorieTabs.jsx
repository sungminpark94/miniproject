// import React from 'react';

// const CategorieTabs = ({onCategorySelect}) => {
//   // logic
//   const categories = [
//     { icon: '🙅🏻‍♀️', label: '유찰매물', value: 'failed' },
//     { icon: '🔥', label: '종료임박', value: 'ending' },
//     { icon: '🚘', label: '전체매물', value: 'all' },
//     { icon: '👨🏼‍🔧', label: '정비인증', value: 'repaired' },
//     { icon: '👍', label: '바로판매', value: 'direct-sale' },
//   ];


//   // view
//   return (
//     <div className="flex justify-around py-4 bg-gray-100">
//       {categories.map((category, index) => (
//         <button type='button' key={index} className="text-center top-5" onClick={() => onCategorySelect(category.value)} 
// >
//           <span className="text-3xl">{category.icon}</span>
//           <p className="text-sm mt-2">{category.label}</p>
//         </button>
//       ))}
//     </div>
//   );
// };
// export default CategorieTabs;

// import React from 'react'; // React 라이브러리를 사용하기 위해 임포트

// // Categories 컴포넌트를 정의. 이 컴포넌트는 부모로부터 onCategorySelect 함수를 props로 받음
// const CategorieTabs = ({ onCategorySelect }) => {
//   // 카테고리 배열을 정의. 각 카테고리는 아이콘, 라벨(이름), 값(필터링을 위해 사용)이 포함됨
//   const categories = [
//     { icon: '🙅🏻‍♀️', label: '유찰매물', value: 'failed' },
//     { icon: '🔥', label: '종료임박', value: 'ending' },
//     { icon: '🚘', label: '전체매물', value: 'all' },
//     { icon: '👨🏼‍🔧', label: '정비인증', value: 'repaired' },
//     { icon: '👍', label: '바로판매', value: 'direct-sale' },
//   ];

//   return (
//     // 전체 버튼들이 들어갈 컨테이너를 설정 (수평 정렬, 상단 마진 적용)
//     <div className="flex justify-around py-4 bg-gray-100">
//       {/* categories 배열을 순회하면서 각 카테고리에 해당하는 버튼을 생성 */}
//       {categories.map((category) => (
//         <button
//           key={category.value} // 각 버튼에 고유한 key 값으로 카테고리 value 사용 (React 성능 최적화)
//           onClick={() => onCategorySelect(category.value)} // 클릭 시 해당 카테고리 값을 부모 컴포넌트에 전달
//           className="flex text-center p-4 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300"
//           // 버튼의 Tailwind CSS 스타일 적용: 배경색, 패딩, 모서리 둥글게, 그림자, 호버 시 배경색 변화
//         >
//           <span className="text-3xl">{category.icon}</span> {/* 아이콘 표시 (각 카테고리 아이콘) */}
//           <p className="text-sm mt-2">{category.label}</p> {/* 카테고리 이름 표시 */}
//         </button>
//       ))}
//     </div>
//   );
// };

// // Categories 컴포넌트를 외부에서 사용할 수 있도록 내보내기
// export default CategorieTabs;

import React, { useState } from 'react'; // React와 useState를 임포트

const CategorieTabs = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기 상태
  const [bidAmount, setBidAmount] = useState(0); // 입찰 금액 상태

  const categories = [
    { icon: '🙅🏻‍♀️', label: '유찰매물', value: 'failed', info: '유찰매물 정보입니다.' },
    { icon: '🔥', label: '종료임박', value: 'ending', info: '종료임박 매물 정보입니다.' },
    { icon: '🚘', label: '전체매물', value: 'all', info: '전체 매물 정보입니다.' },
    { icon: '👨🏼‍🔧', label: '정비완료', value: 'repaired', info: '정비완료 매물 정보입니다.' },
    { icon: '👍', label: '바로판매', value: 'direct-sale', info: '바로판매 매물 정보입니다.' },
  ];

  const handleCategorySelect = (info) => {
    setSelectedInfo(info);
  };

  // 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
    setBidAmount(0); // 모달 열 때 입찰 금액 초기화
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 금액을 조정하는 함수
  const adjustBidAmount = (amount) => {
    setBidAmount((prevAmount) => prevAmount + amount);
  };

  // 입찰하기
  const handleBid = () => {
    alert(`입찰 금액: ${bidAmount}원`);
    closeModal(); // 입찰 후 모달 닫기
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mt-4">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleCategorySelect(category.info)}
            className="flex items-center p-4 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 transition duration-200"
          >
            <span className="mr-2 text-lg">{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 border rounded bg-gray-100">
        {selectedInfo ? (
          <p>{selectedInfo}</p>
        ) : (
          <p>정보를 선택하세요.</p>
        )}
      </div>

      {/* 입찰하기 버튼 */}
      <div className="mt-4">
        <button
          type="button"
          onClick={openModal} // 모달 열기
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          입찰하기
        </button>
      </div>

      {/* 모달 창 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">입찰 금액 설정</h2>
            <div className="flex justify-between mb-4">
              <button
                onClick={() => adjustBidAmount(10000)} // 10000원 추가
                className="bg-gray-300 p-2 rounded"
              >
                + 10,000원
              </button>
              <button
                onClick={() => adjustBidAmount(-10000)} // 10000원 빼기
                className="bg-gray-300 p-2 rounded"
              >
                - 10,000원
              </button>
            </div>
            <div className="flex justify-between mb-4">
              <button
                onClick={() => adjustBidAmount(50000)} // 50000원 추가
                className="bg-gray-300 p-2 rounded"
              >
                + 50,000원
              </button>
              <button
                onClick={() => adjustBidAmount(-50000)} // 50000원 빼기
                className="bg-gray-300 p-2 rounded"
              >
                - 50,000원
              </button>
            </div>
            <div className="flex justify-between mb-4">
              <button
                onClick={() => adjustBidAmount(100000)} // 100000원 추가
                className="bg-gray-300 p-2 rounded"
              >
                + 100,000원
              </button>
              <button
                onClick={() => adjustBidAmount(-100000)} // 100000원 빼기
                className="bg-gray-300 p-2 rounded"
              >
                - 100,000원
              </button>
            </div>
            <div className="text-lg font-bold mb-4">현재 입찰 금액: {bidAmount}원</div>
            <div className="flex justify-end">
              <button
                onClick={handleBid} // 입찰하기
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
              >
                입찰하기
              </button>
              <button
                onClick={closeModal} // 모달 닫기
                className="ml-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorieTabs;

