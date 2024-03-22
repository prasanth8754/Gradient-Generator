import styled from 'styled-components'

export const BgContainer = styled.div`
    background-image:linear-gradient(${props => props.gradient});
    min-height:100vh;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Container = styled.div`
    width:90%;
    display:flex;
    flex-direction:column;

    @media screen and (min-width:992px){
        width:60%;
    }

    @media screen and (min-width:1200px){
        width:50%;
    }
`

export const BtnContainer = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    flex-wrap:wrap;
`

export const GradientContainer = styled(BtnContainer)`
    gap:0px;
    justify-content:space-around;
    align-items:center;
`

export const Gradient = styled.div`
    display:flex;
    flex-direction:column;
`

export const Heading = styled.h1`
    color:#ededed;
    font-size:25px;
    text-align:center;
`

export const ColorPicker = styled.input`
    border:1px solid #ededed;
    cursor:pointer;
    width:85px;
    height:40px;
`

export const GenerateBtn = styled.button`
    background-color:#00c9b7;
    color:#1e293b;
    font-weight:600;
    border:0px;
    outline:none;
    border-radius:7px;
    width:100px;
    height:40px;
    cursor:pointer;
    align-self:center;
    font-size:15px;
    margin-top:40px;
`
