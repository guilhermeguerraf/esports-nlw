import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles/main.css";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameController } from "phosphor-react";

import logoImg from "./assets/logo.svg";
import { Input } from "./components/Input";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo da eSports NLW" />

      <h1 className="text-6xl font-black text-white mt-20">
        Seu{" "}
        <span className="bg-gradient bg-clip-text text-transparent">duo</span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              ads={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 inset-0 fixed" />

          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] px-10 py-8 rounded-lg bg-[#2A2634] text-white">
            <Dialog.Title className="text-3xl font-black mb-8">
              Publique seu anúncio
            </Dialog.Title>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">
                  Seu nome (ou nickname)
                </label>
                <Input id="name" placeholder="Como te chamam dentro do game?" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying" className="font-semibold">
                    Joga há quantos anos?
                  </label>
                  <Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord" className="font-semibold">
                    Qual seu Discord?
                  </label>
                  <Input id="discord" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays" className="font-semibold">
                    Quando costuma jogar?
                  </label>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart" className="font-semibold">
                    Qual horário do dia?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Input type="checkbox" id="useVoiceChannel" />
                <label htmlFor="useVoiceChannel" className="text-sm">
                  Costumo me conectar ao chat de voz
                </label>
              </div>

              <footer className="flex justify-end gap-4">
                <Dialog.Close className="px-5 py-3 rounded font-semibold bg-zinc-500 hover:bg-zinc-600 transition cursor-pointer">
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="px-5 py-3 rounded flex gap-3 items-center font-semibold bg-violet-500 hover:bg-violet-600 transition cursor-pointer"
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
