import React from 'react';

const Banner = () => {
    return (
      <div className="relative my-4">
        <img 
          src="./images/carimage 3.png" 
          alt="Banner" 
          className="w-full h-100 object-cover" 
        />
       <div className="absolute bottom-4 left-4 text-white">
  {/* <h2 className="text-2xl font-bold mb-1">방금 등록된 매물</h2> */}
  <p className="text-sm mb-3">
    <strong>제네시스 G90 시작가 : 8,000만 원</strong> <br/>(엔카시세 9,200만 원)
  </p>
  {/* 버튼을 우측 정렬하기 위해 flex 컨테이너를 사용 */}
  <div className="flex justify-end mr-0">
    <button
      type="button"
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 w-full" 
    >
      바로입찰하기
    </button>
  </div>
</div>

      </div>
    );
  };
  
  export default Banner;
  
