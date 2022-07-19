import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Nav from "./components/Nav";
import styles from '../styles/globals.css'

<div className="w-full h-screen text-center">
  <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
    <div>
      <p className="uppercase text-sm tracking-widest text-gray-400 py-5 ">
        Learn More About Me!
      </p>
      <h1>Hey, I'm  Eliferbit.</h1>
    </div>
  </div>
</div>;
<div>
    <h2 className="py-2 text-gray-500 uppercase">
      Full stack Software Developer
    </h2>
    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
      Add working as a Developer for the past four years.
    </p>
</div>;

<div className="flex items-center justify-between max-w-[330px] m-auto p-2">
  <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
      <a href="https://www.linkedin.com/in/eliseu-barreira-011a431a1">
      <FaLinkedinIn />
      </a>
  </div>
</div>;

<div className="flex items-center justify-between max-w-[330px] m-auto p-2">
  <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
      <a href="https://github.com/BitLee-design">
      <FaGithubn />
      </a>
  </div>
</div>;

export default Main;
