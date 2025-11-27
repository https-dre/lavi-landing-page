import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { INSTAGRAM_URL } from "@/conf/env";

export default function Navbar() {
  return (
    <nav className="border-b-1 border-gray-400 w-full px-8 flex justify-between items-center bg-white shadow-sm md:shadow-none">
      {/* Logo Placeholder */}
      <div className="flex items-center">
        <div className="text-3xl font-bold text-purple-800 flex items-center gap-1">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
      </div>

      {/* Links Centrais */}
      <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
        <Link href="#introducao" className="hover:text-purple-700 transition">
          Sobre
        </Link>
        <Link href="#features" className="hover:text-purple-700 transition">
          Produto
        </Link>
        <Link
          href="#founder-features"
          className="hover:text-purple-700 transition"
        >
          Pagamentos
        </Link>
        <Link href="#app" className="hover:text-purple-700 transition">
          Download
        </Link>
        <Link href="#contato" className="hover:text-purple-700 transition">
          Contato
        </Link>
      </div>

      {/* Ícones Sociais */}
      <div className="hidden md:flex gap-4 text-gray-500">
        <Link href={INSTAGRAM_URL}>
          <Instagram
            size={20}
            className="hover:text-purple-800 cursor-pointer"
          />
        </Link>
      </div>
    </nav>
  );
}
