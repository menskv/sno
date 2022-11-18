import styled from "styled-components";

export const Text = styled.div`
  max-width: ${props => props.maxWidth};
  text-align: center;
  padding-top: 35px;
`
export const Wrapper = styled.div`
  display: flex;
  font-family: "TT Norms";

  justify-content: space-between;
`
export const WrapperText = styled.div`
  font-weight: 500;
  font-size: 24px;
  display: flex;
`
export const ButtonCalendar = styled.div`
  max-width: 200px;
  text-align: center;
  background: #EB633D;
  padding: 15px 20px;
  color: #fff;
  margin-top: 20px;
`
export const Logo = styled.div`
  font-weight: 700;
  font-size: 64px;
  padding-top: 25px;
`