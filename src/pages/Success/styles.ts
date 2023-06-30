import { styled } from 'styled-components'

export const SuccessContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SuccessInfo = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2.5rem;
`

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 446px;
  padding: 2.5rem;
  gap: 2rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  border-image: linear-gradient(
      90deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    )
    80;
  border-width: 1px;
  border-style: solid;
  border-color: black;
`

export const SuccessImageWrapper = styled.aside`
  display: flex;
  align-items: center;
  img {
    width: 492px;
  }
`
interface InfoItemProps {
  variant: 'yellow' | 'purple' | 'yellow-dark'
}

export const SuccessInfoItem = styled.div<InfoItemProps>`
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme[props.variant]};
    margin-right: 12px;
    border-radius: 100px;
    padding: 6px;
  }

  div {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
