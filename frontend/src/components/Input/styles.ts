import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  color: #666360;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    color: #f4ede8;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
  & + div {
    margin-top: 8px;
  }
`;
