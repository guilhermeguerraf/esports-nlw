import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from "./assets/logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo da eSports NLW" />

      <h1 className="text-6xl font-black text-white mt-20">
        Seu{" "}
        <span className="bg-gradient bg-clip-text text-transparent">duo</span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="#" className="rounded-lg overflow-hidden relative">
          <img src="/game-1.png" alt="" />

          <div className="w-full flex flex-col gap-1 pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0">
            <strong className="font-bold text-white">League of Legends</strong>
            <small className="text-sm font-normal text-zinc-300">
              4 anúncios
            </small>
          </div>
        </a>
        <a href="#" className="rounded-lg overflow-hidden relative">
          <img src="/game-2.png" alt="" />

          <div className="w-full flex flex-col gap-1 pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0">
            <strong className="font-bold text-white">Dota 2</strong>
            <small className="text-sm font-normal text-zinc-300">
              4 anúncios
            </small>
          </div>
        </a>
        <a href="#" className="rounded-lg overflow-hidden relative">
          <img src="/game-3.png" alt="" />

          <div className="w-full flex flex-col gap-1 pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0">
            <strong className="font-bold text-white">CS: GO</strong>
            <small className="text-sm font-normal text-zinc-300">
              4 anúncios
            </small>
          </div>
        </a>
        <a href="#" className="rounded-lg overflow-hidden relative">
          <img src="/game-4.png" alt="" />

          <div className="w-full flex flex-col gap-1 pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0">
            <strong className="font-bold text-white">Apex Legends</strong>
            <small className="text-sm font-normal text-zinc-300">
              4 anúncios
            </small>
          </div>
        </a>
        <a href="#" className="rounded-lg overflow-hidden relative">
          <img src="/game-5.png" alt="" />

          <div className="w-full flex flex-col gap-1 pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0">
            <strong className="font-bold text-white">Fortnite</strong>
            <small className="text-sm font-normal text-zinc-300">
              4 anúncios
            </small>
          </div>
        </a>
        <a href="#" className="rounded-lg overflow-hidden relative">
          <img src="/game-6.png" alt="" />

          <div className="w-full flex flex-col gap-1 pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0">
            <strong className="font-bold text-white">World of Warcraft</strong>
            <small className="text-sm font-normal text-zinc-300">
              4 anúncios
            </small>
          </div>
        </a>
      </div>

      <div className="pt-1 rounded-lg mt-8 self-stretch bg-gradient overflow-hidden">
        <div className="px-8 py-6 flex justify-between items-center bg-[#2A2634]">
          <div>
            <strong className="text-2xl font-black text-white block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="px-4 py-3 rounded-md flex items-center gap-3 text-white bg-violet-500 transition hover:bg-violet-600">
            <MagnifyingGlassPlus size={32} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
