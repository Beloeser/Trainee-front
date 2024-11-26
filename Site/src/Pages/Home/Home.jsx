import React from 'react';
import { Carousel } from 'antd';
import { ContentStyle , HomeConteiner } from './Styles'; // Importando o componente estilizado

function Home() {
  return (
    <><HomeConteiner>
      <Carousel arrows infinite={false} style={{ height: '300px' }}>
        <div>
          <ContentStyle>1</ContentStyle>
        </div>
        <div>
          <ContentStyle>2</ContentStyle>
        </div>
        <div>
          <ContentStyle>3</ContentStyle>
        </div>
        <div>
          <ContentStyle>4</ContentStyle>
        </div>
      </Carousel>
      <br />
      <Carousel arrows dotPosition="left" infinite={false} style={{ height: '300px' }}>
        <div>
          <ContentStyle>1</ContentStyle>
        </div>
        <div>
          <ContentStyle>2</ContentStyle>
        </div>
        <div>
          <ContentStyle>3</ContentStyle>
        </div>
        <div>
          <ContentStyle>4</ContentStyle>
        </div>
      </Carousel>
      </HomeConteiner>
    </>
  );
}

export default Home;
