import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HeaderLogo() {
  return (
    <>
          <div className="header-left">
              <div className="text-xl md:text-2xl text-white flex items-center">
                  <span><FaChevronLeft /></span>
                  <span>MD.SABIT</span>
              </div>
              <div className="text-xl md:text-2xl text-white flex items-center ml-6 -mt-2">
                  <span>HASAN <span className="text-lg md:text-xl font-medium">/</span></span>
                  <span><FaChevronRight /></span>
              </div>
          </div>
    </>
  );
}