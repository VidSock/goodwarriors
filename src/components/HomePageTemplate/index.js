import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../img/pick6golf-final.svg'
import Install from '../Install'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Image from '../Image'

import PostCard from '../PostCard'
import { graphql } from 'gatsby'
import { HTMLContent } from '../Content'
import Contact from '../Contact-inc'
import PopContact from '../PopContact'
import ScrollAnimation from 'react-animate-on-scroll'
// import PopNewsletter from '../PopNewsletter'
// import ArticleTemplate from '../ArticleTemplate'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import Intro1 from '../Intro1'
// import Intro2 from '../Intro2'
// import Intro3 from '../Intro3'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

// .intro:before{
// 	content: "Todd Leads A Dual-Life";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// animation: poof 1.5s forwards;
// animation-delay: 1.5s;
// top:0 !important;
// }


.statbox img{border-radius:30px; border:3px solid #111;}


.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
  z-index:0;
}

hr{ 
  border:1px dotted #999;
}



@media (min-width: 48em) {

  .boom1{font-size:380% !important;}
  .boom2{font-size:250% !important;}
  .boom3{font-size:380% !important;}
  .boom4{font-size:280% !important;}

}

@media (max-width: 48em) {

  .image-wrap {height:auto !important; min-height:300px !important;}
  
  .intro:before{font-size:150% !important}
  .content{flex-direction:column !important;}
  .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
  .pitch{font-size:250% !important; text-align:center;}
  .split {display:block !important; width:100% !important; }
  .split div{max-width:100% !important; background:tranparent !important;}
  .sidebar{margin:2rem 0;}
  .sidebar .logolink{text-align:center !important;}
  
  
}











`



const HomePageTemplate = ({
  title,
  heading,
  description,

  meta_title,
  meta_description,

}) => (
<>
  <Helmet>
    <title>Good Warriors - A Dominations Alliance</title>
    <meta name='description' content={meta_description} />
    <html className="fullhead" />
  </Helmet>
  
  





<CustomBox>
<div className="intro">
{/* <Intro1 /> */}
{/* <Intro2 /> */}
{/* <Intro3 /> */}

<PopContact />


<ScrollAnimation animateIn="bounceInUp" delay={1400} offset={0} style={{position:'absolute', top:'0', padding:'20px', width:'100%', textAlign:'center', zIndex:'1'}}>


<div style={{ display:'flex', flexDirection:'column', padding:'0 10vw'}}>


        
        {/*  */}

        <label className="modal-btn grad boom4 txtshadow-header" htmlFor="modal-toggle" style={{position:'relative', textShadow: '1px 0px 4px #333', paddingRight:'', borderRadius:'12px', color:'#fff'}}>JOIN US! - <span style={{textDecoration:'underline'}}>Sign Up Now</span> </label> 
        




</div>
  
  </ScrollAnimation>





<div className="outer">



<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'0', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  

 <div className="" style={{position:'absolute', top:'60px', left:'0', width:'100vw', height:'100vh',  padding:'0 0 0 0', border:'0px solid red', zIndex:'1',}}>
  
  

   

        
        
  {/* <ScrollAnimation animateIn="bounceInUp" delay={2050} style={{position:'', bottom:'20vh', right:'0',}}>
        <h3
          className="boom4 txtshadow-header mobile-txt"
          style={{
           color: 'white',
            textAlign: 'center',
            textTransform: 'normal', 
          }}
        >
        NOW RECRUITING
        </h3>
        </ScrollAnimation> */}


        




        
        </div>
        
        
        

<div className="" style={{position:'fixed', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'-1',}}>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={100}>
<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  
   
   
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Stars" filename="good-warriors-header.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Camp" filename="good-warriors-header2.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Mushroom" filename="good-warriors-header3.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    

    

   
  </div>
</div>
</ScrollAnimation>
        </div>
        
        
        
    

</div>
</div>







<div className="statbox" style={{margin:'0 2vw', borderRadius:'42px', padding:'', border:'0px solid #222', backgroundColor:' rgba(25, 30, 35, 0.91)', overflow:'hidden', boxShadow: '0px 1px 6px 1px black', padding:'2rem', textAlign:'center', margin:'0 0 2rem 0', fontSize:'200%'}}>
<a className="txtshadow-3d" href="./blog/">READ OUR BLOG HERE !</a>
</div>



<div className="statbox" style={{margin:'0 2vw', borderRadius:'42px', padding:'', border:'12px solid #222', overflow:'hidden', boxShadow: '0px 1px 6px 1px black'}}>
<Image className="statbanner" alt="Kneel before Zod" filename="stats-banner.jpg" />
</div>




<section className="section split" style={{display:'flex', padding:'2%', position:'relative',}}>




<div className=' container split innerpanel' style={{width:'60%', padding:'2% 3%', borderRadius:'12px',}}>

<h1 className='title' style={{textAlign:'',}}>{title}</h1>
        
<div className="content" style={{margin:'2% 1% 0 0', padding:'2% 0', borderRadius:'12px',}}>

<h3 className="" style={{textAlign:'',}}>
{heading}
</h3>

</div>
<br />
{description}
 <br />

<p>Find us on Discord - here's our channel: &nbsp; <a href="https://discord.com/channels/557588878425587712/557588878425587714">Good Warriors Discord Channel</a>
</p>

 <br /> <br />
<iframe src="https://discord.com/widget?id=557588878425587712&theme=dark" width="100%" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>








</div>


<div className="sidebar split" style={{padding:'1%', width:'40vw', marginLeft:'2%',}}>
  
  <div style={{position:'sticky', top:'30px', }}>


 

<div style={{width:'auto', padding: '0', height:'', color:'#111', borderRadius:'12px', boxShadow: '0px 1px 12px 1px black'}}>

<a style={{}} class="twitter-timeline" data-height="800" data-theme="dark" href="https://twitter.com/PlayDomiNations?ref_src=twsrc%5Etfw">Tweets by PlayDomiNations</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


</div>



  </div>
  </div>




</section>


  
  </div>

  
  
  {/* <div className="outer" style={{position:'relative', zIndex:'1'}}>
    
    <Contact className="container contactform" />
  </div> */}
  
  <br />
  <Image className="statbanner" alt="Kneel before Zod" filename="our-laws.jpg" />

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <Install />
  
  </CustomBox>
  

  
  </>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
  blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
