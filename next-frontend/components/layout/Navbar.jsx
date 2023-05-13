import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaTelegramPlane,
  FaLinkedinIn,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "public/images/logo-enlazar-web.png";
import birrete from "public/images/birrete-web2.png";
import { useSession } from "@supabase/auth-helpers-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useAuth } from "@/lib/AuthContext";
// import AccountCircle from '@mui/icons-material/AccountCircle';

const AccountMenu = ({
  name,
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  handleSignOut,
}) => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={`${name}`} src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Link href="/myAccount#top">
            <div className="flex">
              <div className="flex pr-2 items-center">
                <FaUserCircle />
              </div>
              Mi perfil
            </div>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleSignOut} className="flex">
          <div className="pr-2">
            <FaSignOutAlt />
          </div>
          Salir
        </MenuItem>
      </Menu>
    </Box>
  );
};

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const session = useSession();
  const user = useUser();
  const route = router.pathname;
  const path = route === "/courses" ? birrete : logo;
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [name, setName] = useState("");
  const { currentPath, setCurrentPath, setPreviousPath } = useAuth();

  const settings = ["Perfil", "Cuenta", "Dashboard", "Salir"];
  const supabase = useSupabaseClient();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = async () => {
    handleCloseUserMenu();
    const { error } = await supabase.auth.signOut();
    setPreviousPath(route);
    router.push("/auth");
  };

  const getUserName = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  };

  const handleLogInBtn = (e) => {
    if (currentPath !== "/auth") {
      setPreviousPath(currentPath);
      setCurrentPath("/auth");
    }
  };

  useEffect(() => {
    const altName = (async function getProfile() {
      try {
        let { data, error, status } = await supabase
          .from("profiles")
          .select(`firstName`)
          .eq("id", user.id)
          .single();
        setName(data.firstName);
      } catch {
        setName("");
      }
    })();
  }, [user]);

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
      <div className="mx-6 justify-between xl:mx-auto xl:max-w-7xl xl:items-center xl:flex xl:px-6 mt-4">
        <div className="flex items-center justify-between py-3 xl:py-5 xl:block">
          <Link href="/#top" onClick={() => setCurrentPath("/")}>
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

        <div
          className={`flex-1 justify-center xl:flex items-center w-full h-3/4 p-2 ${
            navbar ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col justify-center items-center p-2 w-full h-3/4 space-y-4 opacity-95 xl:flex-row xl:h-full xl:w-auto xl:space-x-6 xl:space-y-0 xl:p-0 xl:pt-2 xl:opacity-100 bg-white">
            <li className="flex xl:w-full text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
              <Link
                className="flex flex-1 w-full justify-center self-center"
                href="/team#top"
                onClick={() => setCurrentPath("/team")}
              >
                Equipo
              </Link>
            </li>
            <li className="flex xl:w-full text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
              <Link
                className="flex flex-1 w-full justify-center self-center"
                href="/services#top"
                onClick={() => setCurrentPath("/services")}
              >
                Servicios
              </Link>
            </li>
            <li className="flex xl:w-full text-dark hover:text-darkBlue font-bold xl:font-medium text-base whitespace-nowrap">
              <Link
                className="flex flex-1 w-full justify-center self-center"
                href="/courses#top"
                onClick={() => setCurrentPath("/courses")}
              >
                Cursos & Capacitaciones
              </Link>
            </li>
            <li className="flex xl:w-full text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
              <Link
                className="flex flex-1 w-full justify-center self-center"
                href="/community#top"
                onClick={() => setCurrentPath("/community")}
              >
                Comunidad
              </Link>
            </li>
            <li className="flex xl:w-full text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
              <Link
                className="flex flex-1 w-full justify-center self-center"
                href="/blog#top"
              >
                Blog
              </Link>
            </li>
            <li className="flex xl:w-full text-dark hover:text-darkBlue font-bold xl:font-medium text-base">
              <Link
                className="flex flex-1 w-full justify-center self-center"
                href="/#contact"
                onClick={() => setCurrentPath("/#contact")}
                scroll={false}
              >
                Contacto
              </Link>
            </li>
            {!session ? (
              <div className="flex flex-row xl:hidden">
                <Link
                  href="/auth"
                  className="flex xl:hidden text-dark hover:text-darkBlue font-bold xl:font-medium text-base border rounded px-2 py-2 bg-yellow whitespace-nowrap"
                  onClick={handleLogInBtn}
                >
                  Iniciar sesión
                </Link>
              </div>
            ) : (
              <div className="xl:hidden flex flex-col items-center justify-center">
                <MenuItem>
                  <Link href="/myAccount">
                    <div className="flex">
                      <div className="flex pr-2 items-center">
                        <FaUserCircle />
                      </div>
                      Mi perfil
                    </div>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleSignOut} className="flex">
                  <div className="pr-2">
                    <FaSignOutAlt />
                  </div>
                  Salir
                </MenuItem>
              </div>
            )}
            <li className="xl:hidden">
              <div className="space-x-1 xl:hidden flex flex-row w-full justify-center items-center">
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
                <Link href="https://www.tiktok.com/@enlazar.ok" target="_blank">
                  <FaTiktok style={icon} />
                </Link>
              </div>
            </li>
          </ul>
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
        {!session ? (
          <Link
            href="/auth"
            className="hidden xl:flex mt-2 ml-6 text-dark hover:text-darkBlue font-bold xl:font-medium text-base border rounded px-2 py-2 bg-yellow whitespace-nowrap"
            onClick={handleLogInBtn}
          >
            Iniciar sesión
          </Link>
        ) : (
          <div className="hidden xl:block px-10 py-2">
            <AccountMenu
              name={name}
              handleOpenUserMenu={handleOpenUserMenu}
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              handleSignOut={handleSignOut}
            />
          </div>
        )}
      </div>
    </nav>
  );
};
