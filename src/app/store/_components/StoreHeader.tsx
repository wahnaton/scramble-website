import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

type StoreHeaderProps = {
  searchPopoverId: string;
  cartPopoverId: string;
};

export function StoreHeader({
  searchPopoverId,
  cartPopoverId,
}: StoreHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="h-14 flex items-center justify-start md:justify-center p-4">
        <Link href="/store">
          <h1 className="text-2xl md:text-3xl font-black text-black font-['SF_Pro_Rounded','SF_Pro',-apple-system,system-ui,sans-serif]">
            Scramble Store
          </h1>
        </Link>
        <div className="absolute right-2 md:right-4 text-black">
          <button
            aria-label="Search"
            className="p-2 cursor-pointer"
            popoverTarget={searchPopoverId}
            popoverTargetAction="toggle"
            aria-controls={searchPopoverId}
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
          <button
            aria-label="Cart"
            className="p-2 cursor-pointer"
            popoverTarget={cartPopoverId}
            popoverTargetAction="toggle"
            aria-controls={cartPopoverId}
          >
            <ShoppingBagIcon className="h-6 w-6" />
          </button>
          <button className="p-2 cursor-pointer">
            <UserIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="flex gap-8 justify-center py-2 bg-gray-100">
        <a
          className="block text-center text-black font-light hover:underline"
          href="/new-arrivals"
        >
          New
        </a>
        <a
          className="block text-center text-black font-light hover:underline"
          href="/men"
        >
          Men
        </a>
        <a
          className="block text-center text-black font-light hover:underline"
          href="/women"
        >
          Women
        </a>
      </div>
    </header>
  );
}
