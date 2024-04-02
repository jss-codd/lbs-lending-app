import Image from "next/image";

const DownloadLink = () => {
  return (
    <div className="download_section">
    <h3 className="text-white">Download our free app!</h3>
    <p className="text-white">
      Download our mobile app to borrow and lend, where ever you are!
    </p>
    <div className="d-flex">
        <div className="btn_container yellow_btn">
        Download Now!
        {/* <Image
          src="./apple-icon.png"
          className="app_icons"
          alt="apple icon"
          height={200}
          width={200}
        /> */}
         <a  href={`${process.env.NEXT_PUBLIC_APP_ANDROID_APK}`} >
        <Image
          src="/android-icon.png"
          className="app_icons"
          alt="android icon"
          height={200}
          width={200}
        />
      </a>
      </div>
    </div>
  </div>
  )
}

export default DownloadLink
