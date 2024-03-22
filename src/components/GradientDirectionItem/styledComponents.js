import styled from 'styled-components'

export const Button = styled.button`
    background-color:#ffffff;
    border:0px;
    outline:none;
    cursor:pointer;
    width:150px;
    height:40px;
    border-radius:5px;
    color:#1e293b;
    font-weight:600;
    opacity:${props => (props.activeBtnProp === 'active' ? 1 : 0.5)};
`
