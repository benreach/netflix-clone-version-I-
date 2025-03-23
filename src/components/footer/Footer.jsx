
import "./footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <img src="twitter.svg" alt="" width={50}/>
        <img src="instagram.svg" alt="" width={50}/>
        <img src="facebook.svg" alt="" width={50}/>
        <img src="youtub.svg" alt="" width={50}/>
      </div>
      <div className="informations">
        <div className="item">
          <span>Audio Description</span>
          <span>Investor Relations</span>
          <span>Legal notices</span>
        </div>
        <div className="item">
          <span>Help center</span>
          <span>Jobs</span>
          <span>Cookie Preferences</span>
        </div>
        <div className="item">
          <span>Gift Cards</span>
          <span>Terms of Use</span>
          <span>Corporate Information</span>
        </div>
        <div className="item">
          <span>Media Center</span>
          <span>Privacy</span>
          <span>Contact Us</span>
        </div>
      </div>
      <p>© 1997-2023 Netflix, Inc</p>
    </div>
  )
}

export default Footer