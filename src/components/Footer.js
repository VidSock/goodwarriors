import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from './Image'
import styled from 'styled-components'

const CustomBox = styled.div`
.leader{color: orangered !important;}
.honda{color:#666;}
.player{min-width:15vw}

.honda:before{
position: absolute; top: 30px; left: 0px; width: 100%; border-bottom-width: 12px; border-bottom-style: solid; transform: rotate(8deg); text-align: center; font-size: 450%; z-index: 1;

}


`









const Footer = class extends React.Component {
  render() {
    return (
      
       <CustomBox>
       
	    <ScrollAnimation animateIn="fadeIn" duration={2} initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          



 

<br />
<h2 style={{textAlign:'center', margin:'0 0 1rem 0',}}>Your Friendly Squad Leaders</h2>

<div style={{padding:'0 20px'}}>


<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:''}}>

<li className="player leader">Zod<br /><Image className="slider" alt="Todd Stars" filename="zod.jpg" style={{backgroundSize:'cover',}} />Team Leader</li>


<li className="player">Cabello<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>


<li className="player">Big Dan<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>

<li className="player">DatKillerMouse<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>


<li className="player">Dnoiy<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>


<li className="player">Dave0101<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>

</ul>




<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', marginTop:'.5rem'}}>


<li className="player">Jamie<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>

<li className="player">King<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>

<li className="player">Kspk<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>

<li className="player">Maci<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>

<li className="player">Ravi<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>

<li className="player">Sakis<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>



</ul>

<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', marginTop:'.5rem'}}>




<li className="player">Sam<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>


<li className="player">Todd<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>


<li className="player">Wanheda<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>


<li className="player">Yuentao<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>







<li className="honda player">McDucky<br /><br /><Image className="slider" alt="Good Warrior" filename="hero-mask.png" style={{backgroundSize:'cover', zIndex:'', }} /></li>


</ul>


</div>



<br />
<br />
{/* <div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: '90%'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div> */}



{/* <div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: '70%'}}>Copyright &copy; {(new Date().getFullYear())}</div> */}
        </div>
        
      </footer>
      </ScrollAnimation>
       </CustomBox>
    )
  }
}

export default Footer

