import styled from "styled-components";
//teste de git
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 6000px;
  background-color: #000000;
  border-radius: 20px;
  padding: 20px;
`;

export const Titulo = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: #FFFF00;
`;

export const Campo = styled.div`
  margin-bottom: 30px;
  width: 400px;
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
