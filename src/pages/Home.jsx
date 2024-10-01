
import React from 'react';
import Banner from '../components/Banner';
import CategorieTabs from '../components/CategorieTabs';
import ItemList from '../components/ItemList';

const Home = () => {
  //logic
  const handleonCategorySelect = (value) => {
    console.log('click!', value)
    // TODO: http://localhost:3001/categories/all 페이지로 이동
  }
  

  //view
  return (
    <div>
      <Banner />
      <CategorieTabs onCategorySelect={handleonCategorySelect} />
      <ItemList />
    </div>
  );
}

export default Home;
