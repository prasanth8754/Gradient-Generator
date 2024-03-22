import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onChangeActiveBtn, activeBtn} = props
  const {directionId, value, displayText} = directionDetails

  const changeBtn = () => {
    onChangeActiveBtn(directionId, value)
  }

  const isActive = activeBtn === directionId ? 'active' : null

  return (
    <li>
      <Button activeBtnProp={isActive} type="Button" onClick={changeBtn}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
