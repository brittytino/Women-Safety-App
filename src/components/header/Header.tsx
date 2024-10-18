//import assets
import { Link } from "react-router-dom";
import Container from "../container/Container";
//import assets
import images from "../../assets/images/image";
import icons from "../../assets/icons/icon";

export default function Header() {
  return (
    <>
      <Container>
        <header className="h-[90px] md:h-[270px]">
          <div className="flex justify-between items-center sm:items-center w-full ">
            <div className="my-[9px]">
              {/* this is logo */}
              <Link to={"/"}>
                <img
                  src={images.logo}
                  alt="site logo"
                  className="w-[141px] h-[59px] md:w-[197px] md:h-[83px]"
                />
              </Link>
            </div>
            <div className=" my-[9px] flex items-center">
              {/* menu bar */}
              <button>
                <img
                  src={images.menu}
                  alt="drop down menu"
                  className="w-[36px] h-[36px] sm:invisible"
                />
              </button>
              <ul className="hidden sm:flex sm:justify-between sm:gap-8 sm:text-[15px] sm:font-medium sm:cursor-pointer">
                <li>
                  <Link to={"/hot-to-start"}>How to Start</Link>
                </li>
                <li>
                  <Link to={"/our-service"}>Our Service</Link>
                </li>
                <li>
                  <Link to={"/technologies"}>Technologies</Link>
                </li>
                <li>
                  <Link to={"/careers"}>Careers</Link>
                </li>
              </ul>
            </div>
            <div className="hidden sm:flex sm:gap-5 sm:items-center">
              <div className="flex justify-center gap-2 w-[189px] h-[41px] items-center p-1 border-[2px] border-[#16205F] rounded-[12px]">
                <button className="text-[#16205F]">BUILD A TEAM</button>
                <img
                  src={icons.bordar}
                  alt="bordar"
                  className="w-[12px] h-10px]"
                />
              </div>
              <h2 className="text-[15px] text-[#ED7901] font-medium">
                {" "}
                <Link to={"/contact"}>Contact</Link>
              </h2>
            </div>
          </div>
        </header>
      </Container>
    </>
  );
}
