import styled from "styled-components";

export const Container = styled.div`
  display : flex ;
  flex-direction :column ;
 background-color: #000000; 
  min-height: 100vh; 
  padding: 20px; 
  justify-content : center ;
  align-items: center ;
` ;
export const Titulo = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: #FFFF00;
`;

export const Campo = styled.div`
  margin-bottom: 30px;
  width: 300px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color:#ffffff ;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 40px;
`;
