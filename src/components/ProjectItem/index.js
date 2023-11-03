import {Component} from 'react'
import bannerImage from '../ImageFolder/bannerImage.png'
import Profile1 from '../ImageFolder/img-card.png'
import Profile2 from '../ImageFolder/img-card1.png'
import Profile3 from '../ImageFolder/img-card3.png'
import logo from '../ImageFolder/logo.png'
import Fb from '../ImageFolder/facebook.png'
import In from '../ImageFolder/instagram.png'
import Tw from '../ImageFolder/twitter.png'
import './index.css'
import Header from '../Header'

class ProjectItem extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content-container">
          <div className="first-container">
            <div className="text-container">
              <h1 className="main-heading">
                Learn from your favorite creators about{' '}
                <span className="coloured-text">fantasy reports</span>
              </h1>
              <div className="main-eclipse-container">
                <div className="eclipse-container">
                  <h1 className="eclipse-heading">
                    1:1 <br /> video calls
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="main-banner-container">
            <img className="banner-image" src={bannerImage} />
          </div>

          <div className="second-container">
            <h1 className="second-main-heading">
              <span className="coloured-text">Get direct</span> knowledge and
              insight.
            </h1>
            <ul className="individual-profile-container">
              <img className="profile-image" src={Profile1} />
              <img className="profile-image" src={Profile2} />
              <img className="profile-image" src={Profile3} />
            </ul>
            <ul className="bio-ul">
              <li>
                <h1>300</h1>
                <p>creators</p>
              </li>
              <li>
                <h1>14.4k</h1>
                <p>users</p>
              </li>
              <li>
                <h1>9.11k</h1>
                <p>session</p>
              </li>
              <li className="explore-li">
                <p id="explore-p">Explore the marketplace</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <rect
                    y="0.146973"
                    width="32"
                    height="32"
                    rx="16"
                    fill="#FFB84C"
                  />
                  <path
                    d="M13 10.147L19 16.147L13 22.147"
                    stroke="#2B2730"
                    strokeLinecap="round"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <div className="third-container">
            <div className="third-display-container">
              <div className="third-text-container">
                <h1 className="third-container-heading">
                  Why become a creator?
                </h1>
                <p className="third-container-des">
                  Engage with your supporter and subscriber to sell your skills,
                  knowledge and passions{' '}
                </p>
                <button className="creator-btn">Become a creator</button>
              </div>

              <div className="features-container">
                <ul className="feature-ul">
                  <li className="feature-li">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="feature"
                      viewBox="0 0 96 97"
                      fill="none"
                    >
                      <ellipse
                        cx="48"
                        cy="48.1787"
                        rx="11.25"
                        ry="11.2576"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                      <ellipse
                        cx="47.9998"
                        cy="48.1784"
                        rx="45"
                        ry="45.0304"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                      <ellipse
                        cx="47.9935"
                        cy="48.1791"
                        rx="26.25"
                        ry="26.2678"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                    </svg>
                    <h1 className="feature-heading">Engagement</h1>
                    <p className="feature-des">
                      Engage on a deeper level with the fans that matter most
                    </p>
                  </li>
                  <li className="feature-li">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="feature"
                      viewBox="0 0 96 97"
                      fill="none"
                    >
                      <rect
                        x="7.50122"
                        y="3.9248"
                        width="34.6154"
                        height="34.6388"
                        rx="6.00203"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                      <path
                        d="M52.5011 21.4563H88.8473M88.8473 21.4563L79.0124 31.6358M88.8473 21.4563L79.0124 10.8525"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                      <path
                        d="M43.8464 76.8779H7.50026M7.50026 76.8779L17.3351 87.0574M7.50026 76.8779L17.3351 66.2742"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                      <rect
                        x="54.2322"
                        y="59.3469"
                        width="34.6154"
                        height="34.6388"
                        rx="6.00203"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                    </svg>
                    <h1 className="feature-heading">Autonomy</h1>
                    <p className="feature-des">
                      Full autonomy on when and who you talk to.
                    </p>
                  </li>
                  <li className="feature-li">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="98"
                      viewBox="0 0 96 98"
                      fill="none"
                    >
                      <path
                        d="M57.7495 49.0208C57.7495 54.4104 53.3835 58.7779 48 58.7779C42.6165 58.7779 38.2505 54.4104 38.2505 49.0208C38.2505 43.6311 42.6165 39.2637 48 39.2637C53.3835 39.2637 57.7495 43.6311 57.7495 49.0208Z"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                      <path
                        d="M91.4993 49.0221C91.4993 73.064 72.0229 92.552 47.9998 92.552C23.9766 92.552 4.50026 73.064 4.50026 49.0221C4.50026 24.9803 23.9766 5.49221 47.9998 5.49221C72.0229 5.49221 91.4993 24.9803 91.4993 49.0221Z"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                      <path
                        d="M81.5038 43.9625C84.6132 46.6768 84.6132 51.3661 81.5038 54.0804C77.0801 57.942 71.0001 62.9088 64.8168 66.9016C61.7253 68.8979 58.6365 70.6319 55.738 71.8629C52.8231 73.1007 50.1952 73.7887 47.9988 73.7887C45.8024 73.7887 43.1745 73.1007 40.2596 71.8629C37.3611 70.6319 34.2724 68.8979 31.1808 66.9016C24.9975 62.9088 18.9175 57.942 14.4938 54.0803C11.3844 51.3661 11.3844 46.6768 14.4938 43.9625C18.9175 40.1008 24.9975 35.1341 31.1808 31.1413C34.2724 29.145 37.3611 27.4109 40.2596 26.18C43.1745 24.9421 45.8024 24.2542 47.9988 24.2542C50.1952 24.2542 52.8231 24.9421 55.738 26.18C58.6365 27.4109 61.7253 29.145 64.8168 31.1413C71.0001 35.1341 77.0801 40.1008 81.5038 43.9625Z"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                    </svg>
                    <h1 className="feature-heading">Free</h1>
                    <p className="feature-des">No monthly fee or sign-up fee</p>
                  </li>
                  <li className="feature-li">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="97"
                      viewBox="0 0 96 97"
                      fill="none"
                    >
                      <path
                        d="M40.5118 13.704C43.4942 8.56569 50.8861 8.49951 53.96 13.5835L72.1578 43.6819L81.2567 58.731L90.3556 73.7802C93.5091 78.996 89.755 85.6545 83.6672 85.6545H12.3318C6.30637 85.6545 2.54367 79.1181 5.572 73.9007L14.3069 58.8515L23.0419 43.8024L40.5118 13.704Z"
                        stroke="#2B2730"
                        strokeWidth="3.00101"
                      />
                    </svg>
                    <h1 className="feature-heading">Earn</h1>
                    <p className="feature-des">
                      Add a new source of income that you can control
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-limit-container">
              <div className="limits-container">
                <h1 className="limit-heading">Engage without limits</h1>
                <p className="limit-des">
                  Join a growing community and talk directly with your favorites
                  creators
                </p>
                <button className="limit-btn">Get Started</button>
              </div>
            </div>

            <footer>
              <div className="detail-lu-container">
                <ul>
                  <li className="footer-first-li">
                    <h1>About</h1>
                  </li>
                  <li>
                    <p>How it works</p>
                    <p>Company</p>
                    <p>Help & support</p>
                  </li>
                </ul>
                <ul>
                  <li className="footer-first-li">
                    <h1>For creators</h1>
                  </li>
                  <li>
                    <p>How can I get paid</p>
                    <p>Become a creator</p>
                  </li>
                </ul>
                <ul>
                  <li className="footer-first-li">
                    <h1>Learn</h1>
                  </li>
                  <li>
                    <p>Blog</p>
                    <p>Cookies policy </p>
                    <p>Privacy policy</p>
                  </li>
                </ul>
                <ul>
                  <li className="footer-first-li">
                    <h1>Support</h1>
                  </li>
                  <li>
                    <p>Service status</p>
                    <p>Report abuse</p>
                    <p>Dispute a payment</p>
                  </li>
                </ul>
              </div>

              <div className="social-icon-container">
                <img className="footer-logo" src={logo} />
                <ul className="footer-social-ul">
                  <li>
                    <img src={Fb} />
                  </li>
                  <li>
                    <img src={Tw} />
                  </li>
                  <li>
                    <img src={In} />
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectItem
