import styled from "@emotion/styled";

export const Flex = styled.div({
  display: "flex",
});

export const Fields = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 3rem 2rem;
  align-items: center;
  justify-content: center;
  max-width: 40rem;
  width: 90%;
  box-shadow: 2px 3px 14px rgba(3, 3, 3, 0.1);
`;
