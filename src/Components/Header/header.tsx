import './header.scss'
import { NavBar } from './nav-bar'

export const Header = () => {

  return (
    <header className='header'>
      <div className='centered-header'>
        <div className='title-area'>
          <div className='heather-text'>
            <h1>Matias Calegaris</h1>
            <a href='https://www.linkedin.com/in/matías-calegaris-080a638'>Linkedin</a>
          </div>
          <img src={require('../../assets/profilePic.jpg')} />
        </div>
        <NavBar/>
      </div>
    </header>
  )
}