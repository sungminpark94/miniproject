import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState(10000); // 선택한 금액
  const [bidAmount, setBidAmount] = useState(10000); // 입찰 금액 상태

  // 금액을 선택하는 함수
  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount); // 선택한 금액을 업데이트
    setBidAmount(amount); // 입찰 금액을 선택한 금액으로 초기화
  };

  // + 또는 - 버튼 클릭 시 금액 조정하는 함수
  const adjustBidAmount = (adjustment) => {
    setBidAmount((prevAmount) => Math.max(0, prevAmount + adjustment)); // 0 이하로 내려가지 않게 설정
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg w-80">
          <h2 className="text-xl font-bold mb-4">입찰 금액 설정</h2>

          {/* 금액 선택 드롭다운 */}
          <div className="mb-4">
            <select
              value={selectedAmount}
              onChange={(e) => handleSelectAmount(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded w-full"
            >
              <option value={10000}>10,000 원</option>
              <option value={50000}>50,000 원</option>
              <option value={100000}>100,000 원</option>
            </select>
          </div>

          {/* +, - 버튼과 현재 입찰 금액 */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => adjustBidAmount(-selectedAmount)}
              className="bg-gray-300 p-2 rounded"
            >
              -
            </button>
            <span className="text-lg font-bold">{bidAmount} 원</span>
            <button
              onClick={() => adjustBidAmount(selectedAmount)}
              className="bg-gray-300 p-2 rounded"
            >
              +
            </button>
          </div>

          {/* 입찰하기 및 닫기 버튼 */}
          <div className="flex justify-end">
            <button
              onClick={() => {
                alert(`입찰 금액: ${bidAmount}원`);
                onClose(); // 입찰 완료 후 모달 닫기
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              입찰하기
            </button>
            <button
              onClick={onClose}
              className="ml-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
