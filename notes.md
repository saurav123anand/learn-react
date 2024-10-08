1. package-lock.json file keeps track of all the package versions and other info so it will resolve all the package versioning issue if anyone else use the application.
2. styled components allows use to write css in js , for that we need to install the package first (npm install styled-components) then import using (import styled from styled-components)
--> we can write justify-content instead of justifyContent;
ex: const Nav=styled.div`
  width:100%;
  background-color:red
`
use it using <Nav>hello there </Nav>

->> for dynamic styling 
ex: const Nav=styled.div`
  width:100%;
  background-color:${(props)=>props.myColor}
`
use it using <Nav myColor="blue">hello there </Nav>

What is the correct syntax to target a hover pseudo-class to a styled component?
ex: const Nav=styled.div`
  width:100%;
  background-color:${(props)=>props.myColor},
  &:hover{
    border:1px solid red;
  }
`
