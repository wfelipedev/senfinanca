import * as Styled from './styles'

const Loading = () => {
  return (
    <Styled.Main>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Styled.Main>
  )
}

export default Loading