import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  border: 1px solid red;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 24px;
`;

export const Title = styled.h1`
  margin: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  padding: 16px;
  margin-right: 8px;
  border: 1px solid #aaaaaa;

  &:focus {
    padding: 15px;
    border: 2px solid #111111;
  }
`;

export const SearchButton = styled.button`
  padding: 16px;
  border: 1px solid #aaaaaa;
  background: #dddddd;

  &:hover {
    padding: 15px;
    border: 2px solid #111111;
  }
`;

export const Result = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid #111111;
  height: 400px;
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  align-items: start;
  align-content: start;
`;

export const Item = styled.div`
  background: #ff4136;
  padding: 8px 16px 8px 16px;
  margin-top: 4px;
  margin-left: 4px;
`;

export const ShowTextareaButton = styled.button`
  margin-top: 24px;
  padding: 8px;
  border: 1px solid #aaaaaa;
  background: #dddddd;

  &:hover {
    padding: 7px;
    border: 2px solid #111111;
  }
`;

export const ResultText = styled.textarea`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid #111111;
  height: 400px;
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  align-items: start;
  align-content: start;
`;
