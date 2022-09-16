interface Game {
  bannerUrl: string;
  title: string;
  ads: number;
}

export function GameBanner(game: Game) {
  return (
    <a href="#" className="rounded-lg overflow-hidden relative">
      <img src={game.bannerUrl} />

      <div className="w-full flex flex-col gap-1 pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0">
        <strong className="font-bold text-white">{game.title}</strong>
        <small className="text-sm font-normal text-zinc-300">
          {game.ads} {game.ads > 1 ? "anúncios" : "anúncio"}
        </small>
      </div>
    </a>
  );
}
