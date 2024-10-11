import { FaDownload } from "react-icons/fa";

export default function DownloadButton() {
  return (
    <>
          <button className="bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300 flex-1">
        <a className="flex items-center justify-center" target="_blank" href="https://drive.google.com/file/d/12eS2N6hx2bu3lMCxoIfQgkP3U7ibHuTn/view?usp=sharing" download>
                  <FaDownload className="mr-2" /> Download Resume
              </a>
          </button>
    </>
  );
}