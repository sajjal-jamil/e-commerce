import styles from './footerstyles.module.css';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import  printerest from '../../assets/pinterest.svg';
import  facebook from '../../assets/facebook.svg';
import  twitter from '../../assets/twitter.svg';


function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <div className={styles.carded}>
        <p>
          <br /> <br />
          BE THE FIRST <br />
          New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.
        </p>
        <br />
        <input type="email" placeholder="Enter your email" className={styles.emailInput} />
        <button className={styles.signupButton}>Sign Up</button>
      </div>
      <div className='need'>
        <p>
        Need Help?<br />
        +92 367013641 (9am - 10pm , Mon - Sat) <br />  
         <a href="mailto:yoush.jameel@gmail.com.com "rel="noopener noreferrer" className={styles.link}>yoush.jameel@gmail.com</a>
        </p>
      </div>
      <div className='company'>
        <p>COMPANY</p>
        <ul>
        <li><a href="/about" className={styles.link}>ABOUT US</a></li>
        <li><a href="/store" className={styles.link}>STORE ADDRESS</a></li> 
         
        </ul>
      </div>
      

      <div className={styles.socialMedia}>
        <p>
          FOLLOW US <br />
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram icon" className={styles.icon} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="Linkedin icon" className={styles.icon} />
          </a>
          <a href="https://printerest.com/" target="_blank" rel="noopener noreferrer">
            <img src={printerest} alt="Linkedin icon" className={styles.icon} />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Linkedin icon" className={styles.icon} />
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Linkedin icon" className={styles.icon} />
          </a>


        </p>
      </div>
    </section>
  );
}

export default Footer;
