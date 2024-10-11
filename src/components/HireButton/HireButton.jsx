import { FaHandshake } from "react-icons/fa";

export default function HireButton() {
  return (
    <>
          <button className="bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300 flex-1">
              <a className="flex items-center justify-center" target="_blank" href="https://www.linkedin.com/in/sabit-hasan/">
                  <FaHandshake className="mr-2" /> Hire Me
              </a>
          </button>
    </>
  );
}