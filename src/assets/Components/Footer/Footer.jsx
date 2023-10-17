// import PropTypes from 'prop-types';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../images/logo/logo1.png'
import bottomLogo from '../../images/logo/logo3.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
<div>
<footer className="footer p-10 bg-gray-100 text-base-content">
  <aside>
   <img src={logo} alt="" />
    <p>Electro Mart Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer px-10 py-4 border-t bg-gray-200 text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
    <img className='w-[200px]' src={bottomLogo} alt="" /> 
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <Link><BsFacebook className='text-blue-600 text-[30px] hover:text-cyan-500'/></Link>
      <Link><BsInstagram className='text-blue-600 text-[30px] hover:text-cyan-500'/></Link>
      <Link><BsTwitter className='text-blue-600 text-[30px] hover:text-cyan-500'/></Link>
    </div>
  </nav>
</footer>
</div>
    );
};

Footer.propTypes = {
    
};

export default Footer;