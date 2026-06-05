import { Link } from "react-router-dom";
import logoMark from "@/assets/kardiosense-logo.png";

const Logo = ({ light = true }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2 group">
    <img
      src={logoMark}
      alt="Kardiosense logo"
      width={40}
      height={40}
      className="h-10 w-10 object-contain"
    />
    <span className={`font-semibold tracking-tight text-lg ${light ? 'text-white' : 'text-near-black'}`}>
      Kardio<span className="text-cyan-accent">sense</span>
    </span>
  </Link>
);

export default Logo;
