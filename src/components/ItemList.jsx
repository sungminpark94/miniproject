import React, { useState } from 'react';
import Modal from './Modal'; // 모달 컴포넌트 임포트

const ItemList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기 상태 관리
  const [selectedItem, setSelectedItem] = useState(null); // 선택한 아이템 상태 관리

  const items = [
    {
      id: 1,
      image: './images/carimage 1.jpeg',
      title: '아이오닉 N',
      price: 73000000,
      likes: 12,
      time: '6일 전',
      failed: false,
      ending: false,
      all: true,
      repaired: false,
    },
    {
      id: 2,
      image: './images/carimage 2.jpeg',
      title: '팰리세이드',
      price: 53000000,
      likes: 20,
      time: '9시간 전',
      failed: false,
      ending: false,
      all: true,
      repaired: false,
      directSale: false
    },
    {
      id: 3,
      image: './images/carimage 4.jpg',
      title: '5시리즈',
      price: 33000000,
      likes: 20,
      time: '9시간 전',
      failed: false,
      ending: false,
      all: true,
      repaired: true,
      directSale: false
    },
    {
      id: 4,
      image: './images/carimage 5.jpeg',
      title: '911',
      price: 93000000,
      likes: 20,
      time: '9시간 전',
      failed: true,
      ending: false,
      all: true,
      repaired: false,
      directSale: false
    },
    {
      id: 5,
      image: './images/carimage 5.jpg',
      title: '스파크',
      price: 2000000,
      likes: 20,
      time: '9시간 전',
      failed: true,
      ending: false,
      all: true,
      repaired: false,
      directSale: false
    },
    {
      id: 6,
      image: './images/carimage 6.jpg',
      title: '500',
      price: 13000000,
      likes: 20,
      time: '9시간 전',
      failed: true,
      ending: true,
      all: true,
      repaired: false,
      directSale: true
    },
    {
      id: 7,
      image: './images/carimage 1.jpeg',
      title: '아이오닉 N',
      price: 73000000,
      likes: 12,
      time: '6일 전',
      failed: false,
      ending: false,
      all: true,
      repaired: false,
    },
    {
      id: 8,
      image: './images/carimage 2.jpeg',
      title: '팰리세이드',
      price: 53000000,
      likes: 20,
      time: '9시간 전',
      failed: false,
      ending: false,
      all: true,
      repaired: false,
      directSale: false
    },
    {
      id: 9,
      image: './images/carimage 4.jpg',
      title: '5시리즈',
      price: 33000000,
      likes: 20,
      time: '9시간 전',
      failed: false,
      ending: false,
      all: true,
      repaired: true,
      directSale: false
    },
    {
      id: 10,
      image: './images/carimage 5.jpeg',
      title: '911',
      price: 93000000,
      likes: 20,
      time: '9시간 전',
      failed: true,
      ending: false,
      all: true,
      repaired: false,
      directSale: false
    },
    {
      id: 11,
      image: './images/carimage 5.jpg',
      title: '스파크',
      price: 2000000,
      likes: 20,
      time: '9시간 전',
      failed: true,
      ending: false,
      all: true,
      repaired: false,
      directSale: false
    },
    {
      id: 12,
      image: './images/carimage 6.jpg',
      title: '500',
      price: 13000000,
      likes: 20,
      time: '9시간 전',
      failed: true,
      ending: true,
      all: true,
      repaired: false,
      directSale: true
    }
  ];

  // 입찰하기 버튼을 클릭할 때 호출되는 함수
  const handleBidClick = (item) => {
    setSelectedItem(item); // 선택한 아이템을 설정
    setIsModalOpen(true); // 모달을 열기
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {items.map((item) => {
        if (item[category] === true) {
          return (
            <div key={item.id} className="border rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-2">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                {/* <p className="text-lg font-bold mt-1">{item.price}</p> */}
                <p className="text-lg font-bold mt-1">
                {`현재가 ${((item.price / 10000)).toLocaleString()} 만원`}
                </p>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>❤️ {item.likes}</span>
                  <span>{item.time}</span>
                </div>
                {/* 입찰하기 버튼 */}
                <button
                  type="button"
                  className="mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 w-full"
                  onClick={() => handleBidClick(item)} // 클릭 시 handleBidClick 함수 호출
                >
                  입찰하기
                </button>
              </div>
            </div>
          )
        }
      })}

      {/* 모달 컴포넌트 */}
      {selectedItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} // 모달 닫기 함수
          item={selectedItem} // 선택한 아이템 정보 전달
        />
      )}
    </div>
  );
};

export default ItemList;
