import React from 'react';
import { Carousel } from 'antd';
import { ContentStyle , HomeConteiner } from './Styles'; 
import Header2 from '../../Components/Header2/Header2';
import Header from '../../Components/Header';

function Home() {
  return (
    <>
   <Header></Header>
    <HomeConteiner >
      <div style={{textAlign: 'center', marginTop: '20px', width: '300px' }}>
      <Carousel className ='Carousel'  arrows infinite={false} style={{ height: '300px' ,width:'300px' }}>
        <div>
          <ContentStyle >
            1
          </ContentStyle>
        </div>
        <div>
          <ContentStyle><img
  src="/Images/Eneas.jpg"
  alt="Eneas"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }}
/>
           </ContentStyle>
        </div>
        <div>
          <ContentStyle><img
            src= "/src/Images/Eneas.jpg"
            alt ="Eneas"
            styles = {{objectFit : 'cover'}}/></ContentStyle>
        </div>
        <div>
          <ContentStyle>4</ContentStyle>
        </div>
      </Carousel>
      </div>
      
      </HomeConteiner>
    </>
  );
}

export default Home;
