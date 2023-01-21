import React from "react";

import logo from "assets/images/logo-branco.png";
import wpp from "assets/images/whatsapp.png";
import insta from "assets/images/instagram.png";

function HeroModule() {
  return (
    <div className="bg">
      <div className="content-logo">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-lg text-white tracking-widest relative sm:top-[-80px] animate__animated animate__slideInUp">
          UMA ARTE QUE MELHORA O MUNDO
        </p>
      </div>
      <div className="content-insta animate__animated animate__headShake">
        <a
          href="https://instagram.com/vicente.fideles?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <img src={insta} className="insta-logo" alt="Instagram Logo" />
          <span className="text-white pl-2 tracking-widest text-xs">
            VEJA NOSSA ARTE
          </span>
        </a>
      </div>
      <div className="content-wpp">
        <a
          href="https://api.whatsapp.com/send?phone=553425120680"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wpp} className="wpp-logo" alt="WhatsApp logo" />
        </a>
      </div>
    </div>
  );
}

export { HeroModule };
