import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { useState } from "react";
import Instance from "@/utils/axios";
import useErrorState from "@/utils/errorContext";
import { SNACKBAR_BUTTON_TYPES } from "@/utils/LBSEnum";

export default function Footer() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const { errorDispatch ,errorState } = useErrorState()
  const redirectToApp = (routes: string) => {
    // console.log(`${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`,"routes")
    return `${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`;
  };
  const notify = () => {
    errorDispatch({
      type: 'openSnackBar',
      data: {
        message:
          'Subscription submitted sucessfully!',
        btnText: SNACKBAR_BUTTON_TYPES.CLOSE,
        btnFunc: () => errorDispatch({ type: 'closeSnackBar' }),
      },
    })
  }

  const handleSubmit = async () => {
    try {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      let error = false
      if (email === '') {
        error = true
        setEmailError("Email required")
        return 
      }
      if (!emailPattern.test(email)) {
        error = true
        setEmailError("Invalid email")
        return 
      }
      if (!error) {
        const result = await Instance.post('/contact_us/create', { email, isSubscribe: true })
        if (result.status !== 201) {
          throw Error
        }
        else {
           notify()
          setEmail('')
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <section className="download-section">
        <div className="download-container">
          <div className="content-with-logo">
            <Link className="navbrand" href={"/"}>
              <Image
                src="/LBS_red_logo.jpg"
                height={250}
                width={250}
                alt={""}
              />
            </Link>
            <div className="footer_content">
              <h3>Little Big Shed in your pocket!</h3>
              <p>
                Download our mobile app to borrow and lend, where ever you are!
              </p>
            </div>
          </div>
          <div className="download-btnset">
            {/* <Link className="down-btn" href={"/"}>
              <Image src="/appleStore.png" height={41} width={200} alt={"appleStore"} style={{height : "60px"}}  />
            </Link> */}
            <a className="down-btn" href={`${process.env.NEXT_PUBLIC_APP_ANDROID_APK}`}>
              <Image src="/androidStore.png" height={31} width={200} alt={"androidStore"} style={{height : "50px" , width: "180px"}} />
            </a>
          </div>
        </div>
      </section>
      <footer className="theme-footer">
        <div className="container-fluid">
          <div className="cus-row">
            <div className="content-box">
              <Link className="navbrand" href={"/"}>
                <Image
                  src="/LBS_black_logo.svg"
                  height={250}
                  width={250}
                  alt={""}
                />
              </Link>
              <h4>Share stuff, do good</h4>
              <p className="footer_first_desc">
                Buy less, lend and borrow more. Unlock the power of sharing to
                make, mend, learn and care for your place and our planet
                together.
              </p>
              <a href="mailto:support@littlebigshed.co.nz"> <p className="footer_first_desc">support@littlebigshed.co.nz</p></a>
            </div>
            <div className="content-box">
              <Link href={"/about_us"}><h4>About Us</h4></Link>
              <ul>
                <li>
                  <Link href={redirectToApp("/privacy_policy")}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={redirectToApp("/rental_agreement")}>Rental Agreement</Link>
                </li>
                <li>
                  <Link href={redirectToApp("/cancellation_policy")}>Cancellation Policy</Link>
                </li>
                <li>
                  <Link href={redirectToApp("/damages_and_disputes")}>
                    Damages And Disputes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="content-box">
              <Link href={"/howitworks"} ><h4>How It Works</h4></Link>
              <ul>
                <li>
                  <Link href={"/lender_protection"}>
                    Lender protection (insurance policy)
                  </Link>
                </li>
                <li>
                  <Link href={"/faqs"}>FAQs for sharing</Link>
                </li>
                <li>
                  <Link href={redirectToApp("/login")}>Sign Up / Login</Link>
                </li>
              </ul>
            </div>
            <div className="content-box">
              <h4>Top Categories</h4>
              <ul>
                <li>
                  <Link href={redirectToApp(`/search?category=${encodeURIComponent('DIYGarden')}`)}>
                    Tools &amp; Garden
                  </Link>
                </li>
                <li>
                  <Link href={redirectToApp(`/search?category=${encodeURIComponent('Photography')}`)}>Photography</Link>
                </li>
                <li>
                  <Link href={redirectToApp(`/search?category=${encodeURIComponent('PartiesEvents')}`)}>
                    Events &amp; Parties
                  </Link>
                </li>
                <li>
                  <Link href={redirectToApp('/search/?keyword=&category=Other')}>
                    Hobbies
                  </Link>
                </li>
                <li>
                  <Link href={redirectToApp(`/search?category=${encodeURIComponent('OutdoorSport')}`)}>
                    Outdoor
                  </Link>
                </li>
                <li>
                  <Link href={redirectToApp(`/search?category=${encodeURIComponent('BabiesKids')}`)}>
                    Kids
                  </Link>
                </li>
                <li>
                  <Link href={redirectToApp('/search/?keyword=&category=Vehicle')}>
                    Vehicle
                  </Link>
                </li>
                <li>
                  <Link href={redirectToApp('/search/?keyword=&category=Closet')}>
                    Closet
                  </Link>
                </li>
                <li>
                  <Link href={redirectToApp("/search/?keyword=")}>Browse All</Link>
                </li>
              </ul>
            </div>
            <div className="content-box">
              <h4>Stay Connected</h4>
              <p>
                Subscribe to the Little Big Shed newsletter to keep up to date
                with our sharing news and new item listings!
              </p>
              <div className="subscribe-email">
                <input type="email" value={email} onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('')
                }} placeholder="Email" />
                <button className="subscribe_button" onClick={handleSubmit}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 21.99 18.52"
                  >
                    <path
                      id="Union_60"
                      data-name="Union 60"
                      d="M22049.682,20092.494a1.514,1.514,0,0,1,0-2.152l5.143-5.145h-15.3a1.52,1.52,0,1,1,0-3.039h15.248l-5.145-5.148a1.5,1.5,0,0,1-.447-1.074,1.522,1.522,0,0,1,2.6-1.074l7.768,7.768a1.516,1.516,0,0,1,.006,2.148l-7.717,7.717a1.523,1.523,0,0,1-2.148,0Z"
                      transform="translate(-22038 -20074.418)"
                      fill="#95272f"
                    />
                  </svg>
                </button>
                {emailError !== '' && (<div className='InLineErrorContainer_support'>
                  <div className='ValidationPopup__Header'>
                    {emailError}
                  </div>
                </div>)}
              </div>
              <h4>Get Social</h4>
              <div className="social-links">
                <Link href={"https://www.instagram.com/little_big_shed/"}>
                  <FiInstagram className='social_media_icons bigger_icon' />
                </Link>
                <Link href={"https://www.linkedin.com/company/little-big-shed/"}>
                  <BsLinkedin className='social_media_icons bigger_icon' />
                </Link>
                <Link href={"https://www.facebook.com/LittleBigShed/"}>
                  <BsFacebook className='social_media_icons bigger_icon' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>Support Team</p>
        <p>Copyright 2023 Little Big Shed</p>
      </div>
    </>
  );
}
