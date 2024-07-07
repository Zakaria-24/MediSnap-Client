import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 px-16 text-base-content bg-green-100">
        <aside>
          <Link to={"/"} className="text-3xl font-extrabold">
            <div className="flex justify-center items-center">
              <div>
                <span>
                  <img
                    className="w-14 h-14"
                    src="https://i.ibb.co/PwmGpGb/medi-snap-logo.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div>
                <span className="text-4xl text-green-700">M</span>edi
                <span className=" text-green-600">Snap</span>
              </div>
            </div>
          </Link>
          <p className="text-sm text-center">
            © All rights reserved.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/shop" className="link link-hover">Shop</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
