import React, { useEffect, useMemo, useState } from "react";
import { NavBar, NavMenu, NavMenuMobile, LogoDiv } from "./navbar.elements";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import useScroll from "../../customHooks/useScroll";

const index = () => {
  const [menuOn, setMenuOn] = useState(false);
  const router = useRouter();
  const { scrollStatus }: any = useScroll();

  useEffect(() => {
    console.log(scrollStatus);
  }, [scrollStatus]);

  const mobileMenu = useMemo(() => {
    if (menuOn) {
      return (
        <>
          <NavMenuMobile
            onClick={() => setMenuOn(false)}
            scrollStatus={scrollStatus}
          >
            <Link href="/">
              <span>Home</span>
            </Link>
            <Link href="#steps">
              <span>Come Funziona</span>
            </Link>
            <Link href="#chi-siamo">
              <span>Chi Siamo</span>
            </Link>
            <Link href="#valori">
              <span>I Nostri Valori</span>
            </Link>
            <Link href="#partners">
              <span>I Nostri Partner</span>
            </Link>
            <Link href="#contatti">
              <span>Contatti</span>
            </Link>
            {/* <span>Blog</span> */}
          </NavMenuMobile>
          <AiOutlineClose
            className="navbar__hamburger"
            onClick={() => setMenuOn(!menuOn)}
          />
        </>
      );
    } else
      return (
        <AiOutlineMenu
          className="navbar__hamburger"
          onClick={() => setMenuOn(!menuOn)}
        />
      );
  }, [menuOn]);

  return (
    <NavBar page={router.pathname} scrollStatus={scrollStatus}>
      <Link href="/">
        <LogoDiv>
          <img src="/images/logo.png" alt="" />
          <div className="logo__text">
            <span>PRONTOFARMA</span>
            <span className="logo__text-small">i tuoi farmaci a domicilio</span>
          </div>
        </LogoDiv>
      </Link>

      <NavMenu>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="#steps">
          <span>Come Funziona</span>
        </Link>
        <Link href="#chi-siamo">
          <span>Chi Siamo</span>
        </Link>
        <Link href="#valori">
          <span>I Nostri Valori</span>
        </Link>
        <Link href="#partners">
          <span>I Notri Partner</span>
        </Link>
        <Link href="#contatti">
          <span>Contatti</span>
        </Link>
      </NavMenu>
      {mobileMenu}
    </NavBar>
  );
};

export default index;
