import React from 'react';
import './App.css'; // 스타일을 위해 CSS 파일을 import 합니다.
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Categories from './pages/Categories.jsx';

const App = () => {
    return (

        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/failed" element={<Categories />} />
                    <Route path="/ending" element={<Categories />} />
                    <Route path="/all" element={<Categories />} />
                    <Route path="/required" element={<Categories />} />
                    <Route path="/direct-sale" element={<Categories />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
};

export default App;






// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         backgroundColor: '#f5f5f5',
//         fontFamily: 'Arial, sans-serif',
//     },
//     title: {
//         color: '#333',
//     },
//     formContainer: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'white',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     },
//     subtitle: {
//         marginBottom: '10px',
//         color: '#555',
//     },
//     kakaoButton: {
//         backgroundColor: '#FEE500',
//         border: 'none',
//         borderRadius: '5px',
//         padding: '10px 20px',
//         cursor: 'pointer',
//         fontSize: '16px',
//         fontWeight: 'bold',
//         transition: 'background-color 0.3s',
//     },
// };