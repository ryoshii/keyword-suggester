import styled, { css } from 'styled-components';

interface AddHashtagPrefixButtonProps {
  selected: boolean;
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
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
  margin: 16px;

  @media (max-width: 800px) {
    font-size: 20pt;
  }

  @media (max-width: 640px) {
    font-size: 18pt;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  align-self: center;

  padding: 16px;
  margin-right: 8px;
  border: 1px solid #aaaaaa;
  width: 620px;

  &:focus {
    padding: 15px;
    border: 2px solid #111111;
  }

  @media (max-width: 800px) {
    margin-right: 0px;
    width: 580px;
  }

  @media (max-width: 640px) {
    width: 320px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 16px;
  border: 1px solid #aaaaaa;
  background: #dddddd;
  width: 150px;

  &:hover {
    padding: 15px;
    border: 2px solid #111111;
  }

  svg {
    margin-top: auto;
    margin-bottom: auto;
  }

  svg + span {
    margin-left: 8px;
  }

  @media (max-width: 800px) {
    margin-top: 8px;
    width: 100%;
  }
`;

export const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  justify-content: center;
  width: 780px;

  @media (max-width: 800px) {
    width: 580px;
  }

  @media (max-width: 640px) {
    width: 320px;
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #aaaaaa;
  height: 400px;
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  align-items: start;
  align-content: start;
  background: #dddddd;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  background: #ff4136;
  padding: 8px 16px 8px 24px;
  margin-top: 4px;
  margin-left: 4px;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    padding: 6px 14px 6px 22px;
    border: 2px solid #111111;
  }

  svg {
    margin-left: 8px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const ResultText = styled.textarea`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #aaaaaa;
  height: 400px;
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  align-items: start;
  align-content: start;
  background: #dddddd;

  &:focus {
    padding: 7px;
    border: 2px solid #111111;
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 8px;

  justify-content: flex-end;

  button + button {
    margin-left: 8px;
  }
`;

export const ShowTextareaButton = styled.button`
  height: 42px;
  display: flex;
  padding: 8px;
  border: 1px solid #aaaaaa;
  background: #dddddd;

  &:hover {
    padding: 7px;
    border: 2px solid #111111;
  }

  svg {
    margin: auto;
  }

  svg + span {
    margin: auto 8px;
  }
`;

export const AddHashtagPrefixButton = styled.button<
  AddHashtagPrefixButtonProps
>`
  height: 42px;
  display: flex;
  padding: 8px;
  border: 1px solid #aaaaaa;
  background: #dddddd;

  svg {
    margin: auto;
  }

  svg + span {
    margin: auto 8px;
  }

  color: #aaaaaa;

  ${(props) =>
    props.selected &&
    css`
      color: #111111;
    `}

  &:hover {
    padding: 7px;
    border: 2px solid #111111;
  }
`;
