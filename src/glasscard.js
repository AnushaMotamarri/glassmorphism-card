import React from 'react'
import profile from './images/profile.png'
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring'

const StyledImg = styled.img`
width:200px;
height:auto;
border:2px solid #000;
border-radius:50%
`;
const Container = styled(animated.div)`
display:inline-block;
padding:2em;
background: #C7d2fe66;
border-radius:10px;
z-index:1;
position:relative;
backdrop-filter:blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor:pointer
`;
const calc = (x,y) => [-(y-window.innerHeight/2)/20, (x-window.innerWidth / 2) / 20,1]
const trans = (x,y,s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const GlassCard = () => {
    const [props,set] = useSpring(()=> ({xys: [0,0,1],config: {mass:10, tension:200, friction:50}}))
    return (
        <Container 
        onMouseMove={({clientX:x,clientY:y}) => (set({xys:calc(x,y)}))}
        onMouseLeave={()=>set({xys:[0,0,1]})}
        style ={{
            transform:props.xys.interpolate(trans)}}
        >
            <StyledImg src={profile}/>
            <h1>Anusha Motamarri</h1>
            <h3>I Write.<br></br> Sometimes Code, Sometimes Stories.</h3>
        </Container>
    )
}

export default GlassCard
