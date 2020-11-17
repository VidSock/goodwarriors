import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'

import styled from 'styled-components'

const CustomBox = styled.div`
.players{color: coral !important;}
.honda{color:#666;}

.honda:before{
position: absolute; top: 30px; left: 0px; width: 100%; border-bottom-width: 12px; border-bottom-style: solid; transform: rotate(8deg); text-align: center; font-size: 450%; z-index: 1;

}


`
/*
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
*/





{/* var masters = new Date(2020,0, 20);
  var today = new Date();
  if (today>= masters){
    document.body.className += ' masters';
 }
var pga = new Date(2020,4, 19);
  var today = new Date();
  if (today>= pga){
    document.body.className += ' pga';
 }
 var usopen = new Date(2020,5, 16);
  var today = new Date();
  if (today>= usopen){
    document.body.className += ' usopen';
 }
  var theopen = new Date(2020,6, 21);
  var today = new Date();
  if (today>= theopen){
    document.body.className += ' theopen';
 } */}



const Footer = class extends React.Component {
  render() {
    return (
      
       <CustomBox>
       
	    <ScrollAnimation animateIn="fadeIn" duration={2} initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          



 

<br />
<h2 style={{textAlign:'center', margin:'0 0 1rem 0',}}>Your Friendly Squad Leaders</h2>
<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:''}}>

<li className="players">Zod<br /><br /><br /><br />Team Leader</li>


<li className="player">Cabello<br /><br /><br /><br />Co-Leader</li>


<li className="player">Big Dan<br /><br /><br /><br />Co-Leader</li>

<li className="player">DatKillerMouse<br /><br /><br /><br />Co-Leader</li>


<li className="player">Dnoiy<br /><br /><br /><br />Co-Leader</li>


<li className="player">Dave0101<br /><br /><br /><br />Co-Leader</li>

{/* <li className="player">Kspk<br /><br /><br /><br />Co-Leader</li> */}

<li className="player">Jamie<br /><br /><br /><br />Co-Leader</li>


</ul>

<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', marginTop:'.5rem'}}>
<li className="player">King<br /><br /><br /><br />Co-Leader</li>

<li className="player">Maci<br /><br /><br /><br />Co-Leader</li>


<li className="player">Sakis<br /><br /><br /><br />Co-Leader</li>


<li className="player">Sam<br /><br /><br /><br />Co-Leader</li>


<li className="player">Terrible Todd<br /><br /><br /><br />Co-Leader</li>


<li className="player">Wanheda<br /><br /><br /><br />Co-Leader</li>


<li className="player">Yuentao<br /><br /><br /><br />Co-Leader</li>





{/* <li className="honda">McDucky<br /><br /><br /><br />Co-Leader</li> */}


</ul>

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

