import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const isActiveTab = (path: string) => {
    return path === pathname ? "active" : "";
  };

  return (
    <header className="web-header">
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbrand logo" href={"/"}>
            <Image
              src="/LBS_white_logo.png"
              height={250}
              width={250}
              alt={""}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${isActiveTab("/howitworks")}`}>
                <Link className="nav-link" href={"/howitworks"}>
                  How it Works
                </Link>
              </li>
              <li className={`nav-item ${isActiveTab("/about_us")}`}>
                <Link className="nav-link" href={"/about_us"}>
                  About us
                </Link>
              </li>
              <li className={`nav-item ${isActiveTab("/faqs")}`}>
                <Link className="nav-link" href={"/faqs"}>
                  FAQs
                </Link>
              </li>
              <li className={`nav-item ${isActiveTab("/lender_protection")}`}>
                <Link className="nav-link" href={"/lender_protection"}>
                  Lender Protection
                </Link>
              </li>
              <li className={`nav-item ${isActiveTab("/blog")}`}>
                <Link className="nav-link" href={"/blog"}>
                  Blog
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  className="theme-btn download-btn"
                  href={`${process.env.NEXT_PUBLIC_APP_ANDROID_APK}`}
                >
                  Download App
                  {/* <Image
                    src="/apple-icon.png"
                    className="app_icons"
                    height={50}
                    width={50}
                    alt={""}
                  /> */}
                  <Image
                    src="/android-icon.png"
                    className="app_icons"
                    height={50}
                    width={50}
                    alt={""}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
