import styled from "styled-components";

const FormContainer = styled.div`
  margin: 150px auto 0;
  width: 400px;
  border: 3px solid gray;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  button {
    padding: 4px 8px;
    font-size: 16px;
    margin: 10px 0 20px;
  }
`;

export default FormContainer;
