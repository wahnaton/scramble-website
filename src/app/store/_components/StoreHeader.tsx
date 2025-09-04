import Link from "next/link";
import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

type StoreHeaderProps = {
  onToggleSearch: () => void;
  onToggleCart: () => void;
};

export function StoreHeader({
  onToggleSearch,
  onToggleCart,
}: StoreHeaderProps) {
  return (
    <header className="sticky top-0 z-50">
      <div className="h-14 flex items-center justify-center p-4 bg-white">
      <Link href="/store">
        <h1 className="text-3xl font-black text-black font-['SF_Pro_Rounded','SF_Pro',-apple-system,system-ui,sans-serif]">
            Scramble Store
        </h1>
      </Link>
      <div className="absolute right-4">
        <button
          aria-label="Search"
          className="p-2 text-black cursor-pointer"
          onClick={onToggleSearch}
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-black" />
        </button>
        <button
          aria-label="Cart"
          className="p-2 text-black cursor-pointer"
          onClick={onToggleCart}
        >
          <ShoppingBagIcon className="h-6 w-6 text-black" />
        </button>
      </div>
      </div>
      <div className="flex gap-8 justify-center py-2 bg-gray-100">
        <a className="block text-center text-black font-light hover:underline" href="/new-arrivals">New</a>
        <a className="block text-center text-black font-light hover:underline" href="/men">Men</a>
        <a className="block text-center text-black font-light hover:underline" href="/women">Women</a>
      </div>
    </header>
  );
}
