import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "public/images/logo-enlazar-web.png";
import birrete from "public/images/birrete-web.png";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const route = router.pathname;
  const path = route === "/courses" ? birrete : logo;
  const icon = {
    fontSize: "24px",
    color: "#043959",
    marginLeft: "8px",
    marginRigth: "8px",
  };
  const clampedPadding = {
    paddingLeft: "clamp(0.5rem, -8.7857rem + 11.4286vw, 2rem)",
  };

  return (
    <nav className="w-full bg-white text-dark shadow font-Noah fixed h-28 z-50">
      <div className="mx-6 justify-between xl:mx-auto xl:max-w-7xl xl:items-center xl:flex xl:px-8 mt-4">
        <div className="flex items-center justify-between py-3 xl:py-5 xl:block">
          <Link href="/">
            <Image
              src={path}
              style={{
                width: "200px",
                height: "37.5px",
                objectFit: "scale-down",
              }}
              priority={true}
              alt="Consultora Enlazar Logo"
            />
          </Link>
          <div className="xl:hidden flex justify-end">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 xl:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col justify-end items-center p-4 w-auto h-3/4 space-y-4 opacity-95  xl:flex-row xl:w-auto xl:h-full xl:space-x-6 xl:space-y-0 xl:p-0 xl:opacity-100 mt-2 bg-white">
              <li className="text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
                <Link href="/team">Equipo</Link>
              </li>
              <li className="text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
                <Link href="/services">Servicios</Link>
              </li>
              <li className="text-dark hover:text-darkBlue font-bold xl:font-medium text-base whitespace-nowrap">
                <Link href="/courses">Cursos & Capacitaciones</Link>
              </li>
              <li className="text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
                <Link href="/community">Comunidad</Link>
              </li>
              <li className="text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
                <Link href="/contact">Contacto</Link>
              </li>
              <li>
                <div className=" space-x-4 xl:hidden flex flex-row w-full justify-center items-center">
                  <Link
                    href="https://www.instagram.com/enlazar.ok/"
                    target="_blank"
                  >
                    <AiFillInstagram style={icon} />
                  </Link>
                  <Link
                    href="https://t.me/joinchat/e8dtvJ5XB2k1MGIx"
                    target="_blank"
                  >
                    <FaTelegramPlane style={icon} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/enlazar"
                    target="_blank"
                  >
                    <FaLinkedinIn style={icon} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/enlazar.ok/"
                    target="_blank"
                  >
                    <FaFacebookF style={icon} />
                  </Link>
                  <Link href="https://twitter.com/Enlazar_ok" target="_blank">
                    <FaTwitter style={icon} />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@enlazar.ok"
                    target="_blank"
                  >
                    <FaTiktok style={icon} />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2 xl:flex xl:flex-row xl:mt-2">
          <Link href="https://www.instagram.com/enlazar.ok/" target="_blank">
            <AiFillInstagram style={icon} />
          </Link>
          <Link href="https://t.me/joinchat/e8dtvJ5XB2k1MGIx" target="_blank">
            <FaTelegramPlane style={icon} />
          </Link>
          <Link href="https://www.linkedin.com/company/enlazar" target="_blank">
            <FaLinkedinIn style={icon} />
          </Link>
          <Link href="https://www.facebook.com/enlazar.ok/" target="_blank">
            <FaFacebookF style={icon} />
          </Link>
          <Link href="https://twitter.com/Enlazar_ok" target="_blank">
            <FaTwitter style={icon} />
          </Link>
          <Link href="https://www.tiktok.com/@enlazar.ok" target="_blank">
            <FaTiktok style={icon} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
