import {Component} from 'react'
import {
  BgContainer,
  Container,
  Heading,
  BtnContainer,
  ColorPicker,
  GradientContainer,
  Gradient,
  GenerateBtn,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeBtn: gradientDirectionsList[0].directionId,
    firstGradient: '#8ae323',
    secondGradient: '#014f7b',
    gradientType: gradientDirectionsList[0].value,
    gradient: 'to top,#8ae323,#014f7b',
  }

  onChangeFirstColor = event => {
    this.setState({firstGradient: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondGradient: event.target.value})
  }

  onChangeActiveBtn = (id, value) => {
    this.setState({activeBtn: id, gradientType: value})
  }

  generateGradient = () => {
    const {firstGradient, secondGradient, gradientType} = this.state
    const gradient = `to ${gradientType},${firstGradient},${secondGradient}`
    this.setState({gradient})
  }

  render() {
    const {activeBtn, firstGradient, secondGradient, gradient} = this.state

    return (
      <BgContainer gradient={gradient} data-testid="gradientGenerator">
        <Container>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Heading as="p">Choose Direction</Heading>
          <BtnContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                directionDetails={eachItem}
                activeBtn={activeBtn}
                key={eachItem.directionId}
                onChangeActiveBtn={this.onChangeActiveBtn}
              />
            ))}
          </BtnContainer>
          <Heading as="p">Pick the Colors</Heading>
          <GradientContainer as="div">
            <Gradient>
              <Heading as="p">{firstGradient}</Heading>
              <ColorPicker
                value={firstGradient}
                type="color"
                onChange={this.onChangeFirstColor}
              />
            </Gradient>
            <Gradient>
              <Heading as="p">{secondGradient}</Heading>
              <ColorPicker
                value={secondGradient}
                type="color"
                onChange={this.onChangeSecondColor}
              />
            </Gradient>
          </GradientContainer>
          <GenerateBtn type="button" onClick={this.generateGradient}>
            Generate
          </GenerateBtn>
        </Container>
      </BgContainer>
    )
  }
}

export default GradientGenerator
