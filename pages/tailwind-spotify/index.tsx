import {
  Home,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

const TailWindSpotify = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-100"
            >
              <Home color="#FFFFFF" />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold"
            >
              <Search color="#FFFFFF" />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold"
            >
              <Library color="#FFFFFF" />
              Your library
            </a>
          </nav>
          <nav className="flex flex-col gap-3 mt-6 pt-6 border-t border-zinc-800">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hots hits Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              100% Rock{" "}
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              My playlist{" "}
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* Propriedade legal essa group, você pode avisar ao um component específico quando esse grupo esta ativo
            para realizar uma determinada ação */}
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong>Post malone</strong>
              <button className="w-12 h-12 flex items-center justify-center  pl-3  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong>Post malone</strong>
              <button className="w-12 h-12 flex items-center justify-center  pl-3  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong>Post malone</strong>
              <button className="w-12 h-12 flex items-center justify-center  pl-3  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong>Post malone</strong>
              <button className="w-12 h-12 flex items-center justify-center  pl-3  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong>Post malone</strong>
              <button className="w-12 h-12 flex items-center justify-center  pl-3  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong>Post malone</strong>
              <button className="w-12 h-12 flex items-center justify-center  pl-3  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Everton Walker
          </h2>
          <div className="grid grid-cols-10 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                alt="capad o album post malone"
                width={104}
                height={104}
                src="/album.webp"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post malon, justin bieber, and more...
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            className="w-full"
            alt="capad o album post malone"
            width={64}
            height={64}
            src="/album.webp"
          />
          <div className="flex flex-col ">
            <strong className="font-normal">Circles</strong>
            <span className="text-xs text-zinc-400 w-20">Post malone</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 items-center justify-center pl-2 rounded-full bg-white text-black ">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-znc-500">0:31</span>
            <div className="h-1 rounded-full w-80 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-znc-500">4:30</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
};

export default TailWindSpotify;
