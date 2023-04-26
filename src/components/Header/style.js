import styled from "styled-components";

export const Text = styled.div`
  text-align: center;
  text-decoration: none;
  max-width: 100px;
  margin-right: 40px;
  padding: 10px;
  &:hover{
    border-bottom: 2px solid #EB633D;
    transition: 0.1s  ease-in;
  }

`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  align-items: center;
  padding-top: 25px;
  min-width: 1160px;
`
export const WrapperText = styled.div`
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
`
export const ButtonCalendar = styled.a`
  text-align: center;
  background: #EB633D;
  padding: 15px 20px;
  color: #fff;
  max-width: 200px;
  text-decoration: none;
  &:hover {
     transition: background-color 0.2s ease-in-out;
    background-color: #f57650;
  }
`
export const Logo = styled.a`
  font-weight: 700;
  font-size: 64px;
  text-decoration: none;
  color: black;
`
export const Link = styled.a`
  text-decoration: none;
  color: black;
  
 
  
`