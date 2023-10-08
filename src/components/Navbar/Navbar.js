"use client";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import { useRef, useState } from "react";

const notifications = [
  {
    name: "Amor está no ar",
    link: "https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfGG4IHL8K9dNOjYGKvaYOzya8wMXODtygaVdIgBCOUUH_hatCknkw_9pWUFgsrgZH2mXkPNrrmQclVbpHTv6w4xN6gAKPYNSM2-Pnu2oBAW1JnpcSGcT5eVsDuDz_UCEVclWyeKjjfnTpXzgV-31WOJfaRpaDmJC34.webp?r=c88",
  },
  {
    name: "Round 6",
    link: "https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfGG4IHL8K9dNOjYGKvaYOzya8wMXODtygaVdIgBCOUUH_hatCknkw_9pWUFgsrgZH2mXkPNrrmQclVbpHTv6w4xN6gAKPYNSM2-Pnu2oBAW1JnpcSGcT5eVsDuDz_UCEVclWyeKjjfnTpXzgV-31WOJfaRpaDmJC34.webp?r=c88",
  },
  {
    name: "Jogo do diabo",
    link: "https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfGG4IHL8K9dNOjYGKvaYOzya8wMXODtygaVdIgBCOUUH_hatCknkw_9pWUFgsrgZH2mXkPNrrmQclVbpHTv6w4xN6gAKPYNSM2-Pnu2oBAW1JnpcSGcT5eVsDuDz_UCEVclWyeKjjfnTpXzgV-31WOJfaRpaDmJC34.webp?r=c88",
  },
  {
    name: "Velozes e furiosos 5",
    link: "https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfGG4IHL8K9dNOjYGKvaYOzya8wMXODtygaVdIgBCOUUH_hatCknkw_9pWUFgsrgZH2mXkPNrrmQclVbpHTv6w4xN6gAKPYNSM2-Pnu2oBAW1JnpcSGcT5eVsDuDz_UCEVclWyeKjjfnTpXzgV-31WOJfaRpaDmJC34.webp?r=c88",
  },
  {
    name: "Lupin",
    link: "https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfGG4IHL8K9dNOjYGKvaYOzya8wMXODtygaVdIgBCOUUH_hatCknkw_9pWUFgsrgZH2mXkPNrrmQclVbpHTv6w4xN6gAKPYNSM2-Pnu2oBAW1JnpcSGcT5eVsDuDz_UCEVclWyeKjjfnTpXzgV-31WOJfaRpaDmJC34.webp?r=c88",
  },
];

const perfil = [
  {
    name: "Pedro",
    avatar:
      "https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQrSiaQDIwizPdl_mOOhnyuCTeiR4fq9XQz7hGQtLcn2IY-FAaSisV1pxiar0LDMUXI85tFd6ArCBbCGI-3kK1PdQfoVqg0.png?r=8ff",
  },
  {
    name: "Anny",
    avatar:
      "https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQrSiaQDIwizPdl_mOOhnyuCTeiR4fq9XQz7hGQtLcn2IY-FAaSisV1pxiar0LDMUXI85tFd6ArCBbCGI-3kK1PdQfoVqg0.png?r=8ff",
  },
  {
    name: "Zé Lucas",
    avatar:
      "https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQrSiaQDIwizPdl_mOOhnyuCTeiR4fq9XQz7hGQtLcn2IY-FAaSisV1pxiar0LDMUXI85tFd6ArCBbCGI-3kK1PdQfoVqg0.png?r=8ff",
  },
  {
    name: "Infantil",
    avatar:
      "https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQrSiaQDIwizPdl_mOOhnyuCTeiR4fq9XQz7hGQtLcn2IY-FAaSisV1pxiar0LDMUXI85tFd6ArCBbCGI-3kK1PdQfoVqg0.png?r=8ff",
  },
];

const perfilMenu = [
  { href: "#", icon: "/pencil-icon.svg", text: "Gerênciar perfis" },
  { href: "#", icon: "/transfer-icon.svg", text: "Tranferir perfil" },
  { href: "#", icon: "/profile-icon.svg", text: "Conta" },
  { href: "#", icon: "/help-icon.svg", text: "Central de ajuda" },
];
export default function Navbar() {
  const [active, setActive] = useState(false);
  const [isShownNotifications, setIsShownNotifications] = useState(false);
  const [isShownPerfifl, setIsShownPerfifl] = useState(false);
  const inputRef = useRef(null);

  const handleActive = () => {
    setActive(!active);
    setTimeout(() => {
      inputRef.current.focus();
    }, 500);
  };
  return (
    <div className="bg-[#141414] px-16 h-16 items-center flex justify-between">
      <nav className="flex flex-row items-center gap-6">
        <Link href="/">
          <Image src="/netflix-logo.svg" color="red" width={100} height={100} />
        </Link>
        <div className="flex flex-row gap-3 text-white text-sm ">
          <Link href="#" className="hover:text-gray-400 hover:transition-all">
            Inicio
          </Link>
          <Link href="#" className="hover:text-gray-400 hover:transition-all">
            Séries
          </Link>
          <Link href="#" className="hover:text-gray-400 hover:transition-all">
            Filmes
          </Link>
          <Link href="#" className="hover:text-gray-400 hover:transition-all">
            Bombando
          </Link>
          <Link href="#" className="hover:text-gray-400 hover:transition-all">
            Minha lista
          </Link>
          <Link href="#" className="hover:text-gray-400 hover:transition-all">
            Navegar por idiomas
          </Link>
        </div>
      </nav>
      <div className="flex flex-row items-center gap-4">
        <div
          className={`flex flex-row gap-1 ${
            active ? "border border-white" : ""
          } p-1`}
        >
          <button onClick={handleActive}>
            <Image src="/search-icon.svg" width={28} height={28} />
          </button>
          <input
            placeholder="Titulo, gente e gêneros"
            onBlur={handleActive}
            ref={inputRef}
            className={`${
              active ? "active" : "hidden"
            } w-52 bg-[#141414] text-sm outline-none caret-white text-white`}
          />
        </div>
        <Link href="#" className="text-sm text-white">
          Infantil
        </Link>
        <div
          className="relative justify-center"
          onMouseEnter={() => setIsShownNotifications(true)}
          onMouseLeave={() => setIsShownNotifications(false)}
        >
          <button>
            <Image src="/bell-icon.svg" width={28} height={28} />
          </button>
          <div
            className={`text-white bg-[#141414] absolute right-1/3 border-t  h-96 overflow-auto cursor-pointer z-10 ${
              isShownNotifications ? "" : "hidden"
            }`}
          >
            {notifications.map((item, index) => {
              return (
                <Link
                  href="#"
                  key={index}
                  className="flex flex-row gap-4 w-80 p-2 items-notifications hover:bg-black"
                >
                  <Image src={item.link} width={100} height={50} />
                  <div>
                    <p>Novidade</p>
                    <p>{item.name}</p>
                    <p className="text-gray-500">1 semana atrás</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsShownPerfifl(true)}
          onMouseLeave={() => setIsShownPerfifl(false)}
        >
          <div className=" flex flex-row gap-2 items-center">
            <Image
              src="https://occ-0-4241-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQrSiaQDIwizPdl_mOOhnyuCTeiR4fq9XQz7hGQtLcn2IY-FAaSisV1pxiar0LDMUXI85tFd6ArCBbCGI-3kK1PdQfoVqg0.png?r=8ff"
              width={32}
              height={32}
            />
            <Image src="/triangle-icon.svg" width={12} height={12} />
          </div>
          <div
            className={`absolute right-[10%] top-full z-10 w-56 bg-[#141414] text-white border-t ${
              isShownPerfifl ? "" : "hidden"
            }`}
          >
            <div>
              {perfil.map((item, index) => {
                return (
                  <Link
                    href="#"
                    key={index}
                    className="flex flex-row  text-white text-sm gap-2 p-2 ml-2 items-center font-bold hover:underline"
                  >
                    <Image src={item.avatar} width={32} height={32} />
                    <p>{item.name}</p>
                  </Link>
                );
              })}
            </div>
            <div className="p-2 ml-2">
              {perfilMenu.map((item, index) => {
                return (
                  <Link href={item.href} key={index} className="hover:underline">
                    <span className="flex flex-row gap-2 text-sm items-center mt-1">
                      <Image src={item.icon} width={30} height={30} />
                      <p>{item.text}</p>
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="border-t border-gray-500">
              <span>
                <Link href="#" className="p-2 justify-center flex hover:underline">
                  Sair da Netflix
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
