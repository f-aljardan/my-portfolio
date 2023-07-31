
import background from '/background.png'

export default function About(){
    return (
        <div className='AboutDiv'> 
        <div className='About-bg'>
        <img className="background" src={background}/>

<div className='about-container'>
<div className='about-heading'>ABOUT ME</div>
<div className='about-info1'> <p>An Enthusiastic about Information Technology, with a focus on developing skills in Web development, Cyber Security, and Web3. Eager to join innovative projects and collaborative teams . Let's connect and explore together!</p></div>
<div className='about-heading'>MY SKILLS</div>

<div className='skills-container'>
<div className='skills-container-item'> <p>REACT.JS</p></div>
<div className='skills-container-item'><p>FLUTTER</p></div>
<div className='skills-container-item'><p>NODE.JS</p></div>
<div className='skills-container-item'><p>MongoDB</p></div>
</div>

</div>
        </div> 
        </div>
    )
}