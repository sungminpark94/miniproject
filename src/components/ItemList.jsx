import React from 'react';

const ItemList = () => {
  const items = [
    {
      id: 1,
      image: './images/carimage 1.jpeg',
      title: '아이오닉 N',  
      price: '7,300만 원',
      likes: 12,
      time: '6일 전',
    },
    {
      id: 2,
      image: './images/carimage 2.jpeg',
      title: '팰리세이드',
      price: '5,300만 원',
      likes: 20,
      time: '9시간 전',
    },
    {
      id: 3,
      image: './images/carimage 2.jpeg',
      title: '팰리세이드',
      price: '5,300만 원',
      likes: 20,
      time: '9시간 전',
    },
    {
      id: 4,
      image: './images/carimage 2.jpeg',
      title: '팰리세이드',
      price: '5,300만 원',
      likes: 20,
      time: '9시간 전',
    },
    {
      id: 5,
      image: './images/carimage 2.jpeg',
      title: '팰리세이드',
      price: '5,300만 원',
      likes: 20,
      time: '9시간 전',
    },
    {
      id: 6,
      image: './images/carimage 2.jpeg',
      title: '팰리세이드',
      price: '5,300만 원',
      likes: 20,
      time: '9시간 전',
    },
    // Add more items as necessary
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
          <div className="p-2">
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-lg font-bold mt-1">{item.price}</p>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>❤️ {item.likes}</span>
              <span>{item.time}</span>

              <button type='button'className='bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200'>입찰하기</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;