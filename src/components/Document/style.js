import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #EB633D;
`

export const Title = styled.div`
  font-size: 18px;
`

export const Description = styled.div`
  font-size: 12px;
  padding-left: 15px;
`

export const Download = styled.div`
  
`
export const Content = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Icon = styled.div`

`
export const Button = styled.button`
  text-decoration: none;
  background-color: #EB633D;
  width: 100px;
  height: 30px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: #f57650;
  }
`