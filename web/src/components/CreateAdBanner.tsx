import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
  return (
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
        <Dialog.Trigger className="px-4 py-3 rounded-md flex items-center gap-3 text-white bg-violet-500 transition hover:bg-violet-600">
          <MagnifyingGlassPlus size={32} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
