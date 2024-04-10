import logo from "../assets/logo.png"
import styled from "styled-components"
export default function Logo() {
    return (
        <ImagemLogo src={logo} alt="logo" />
    )
}

const ImagemLogo = styled.img`
    width: 100%;
`