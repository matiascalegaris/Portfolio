import './header.scss'
import { NavBar } from './nav-bar'

export const Header = () => {

  return (
    <header className='header'>
      <div className='centered-header'>
        <div className='title-area'>
          <div className='heather-text'>
            <h1>Matias Calegaris</h1>
            <div className='external-links'>
              <a href='https://www.linkedin.com/in/matías-calegaris-080a638' target="_blank">Linkedin</a>
              <a href='https://github.com/matiascalegaris' target="_blank">Github</a>
            </div>
            <NavBar/>    
          </div>
          <img src={require('../../assets/profilePic.jpg')} />
        </div>
        
      </div>
    </header>
  )
}