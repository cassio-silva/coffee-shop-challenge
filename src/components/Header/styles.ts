import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  margin: 0 auto;

  width: 100%;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1120px;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  svg {
    line-height: 0;
  }

  a {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 8px;
    line-height: 0;
    border-radius: 6px;
    position: relative;

    strong {
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      position: absolute;

      padding: 6px 8px;
      border-radius: 100px;

      text-align: center;
      font-size: 0.75rem;
      font-family: 'Roboto', sans-serif;
      line-height: 1;
      font-weight: 700;
      top: -10px;
      right: -10px;
    }
  }
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: 1.3;
`
