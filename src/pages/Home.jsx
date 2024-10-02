
import React, { useState } from 'react';
import Banner from '../components/Banner';
import CategorieTabs from '../components/CategorieTabs';
import ItemList from '../components/ItemList';
import { Button } from '@mui/material';

const Home = () => {
  //logic
  const [category, setCategory] = useState('all')
  const handleonCategorySelect = (value) => {
    console.log('click!', value)
    setCategory(value)
    // TODO: http://localhost:3001/categories/all 페이지로 이동
  }
  

  //view
  return (
    <div>
      <Banner />
      <CategorieTabs onCategorySelect={handleonCategorySelect} />
      <ItemList category={category}/>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      <Button className='bg-slate-950 text-white rounded-full p-4 shadow-lg hover:bg-gray-700 transition duration-300' variant ="contained">관심차종 등록</Button>
      </div>
    </div>
  );
}

export default Home;
