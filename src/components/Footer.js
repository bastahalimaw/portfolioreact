import { Image } from "react-bootstrap";

const Footer = ()=> {
  return(
    <div className="position-absolute start-0 end-0 bottom-0 fs-6 bg-secondary text-white px-5 py-1">
        <Image src="/logo.png" width={40}/>
        <h3 className="fs-5">PHINMA University of Pangasinan</h3>
        <p className="fs-6">Colllege of Information Technology</p>
    </div>
  );
}

export default Footer;