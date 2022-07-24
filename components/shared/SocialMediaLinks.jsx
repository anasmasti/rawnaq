import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
  import { PropTypes } from "prop-types";
  
  export default function SocialMediaLinks({ theme }) {
    let socialMediaList = [
      {
        id: 1,
        icon: <FaFacebookF className="h-4 w-4 " />,
        link: "facebook.com",
      },
      {
        id: 2,
        icon: <FaLinkedinIn className="h-4 w-4 " />,
        link: "facebook.com",
      },
      {
        id: 3,
        icon: <FaInstagram className="h-4 w-4 " />,
        link: "facebook.com",
      },
      {
        id: 4,
        icon: <FaTwitter className="h-4 w-4 " />,
        link: "facebook.com",
      },
    ];
  
    return (
      <div className="flex justify-center">
        {socialMediaList.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={`${
              theme != "dark"
                ? " text-white"
                : " text-neutral-600"
            } flex justify-center items-center p-2 leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out `}
          >
            {item.icon}
          </a>
        ))}
      </div>
    );
  }
  
  SocialMediaLinks.propTypes = {
    theme: PropTypes.string,
  };