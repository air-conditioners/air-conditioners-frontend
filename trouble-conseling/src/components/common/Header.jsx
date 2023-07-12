import React from "react";
import * as H from "../../styles/Header.style"
import Logo from "../../img/logo.png"

const Header = () => {
  return (
    <H.Header>
      <H.Title>수호천사</H.Title>
      <H.Image src={Logo} alt="" />
    </H.Header>
  )
}

export default Header;