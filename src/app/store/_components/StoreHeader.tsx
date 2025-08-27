import Image from "next/image";

type StoreHeaderProps = {
  onToggleSearch: () => void;
  onToggleCart: () => void;
};

export function StoreHeader({ onToggleSearch, onToggleCart }: StoreHeaderProps) {
  return (
    <header className="sticky z-50 h-14 bg-gray-100 flex items-center justify-between px-2">
      <h1 className="text-2xl font-black text-black font-['SF_Pro_Rounded','SF_Pro',-apple-system,system-ui,sans-serif]">
        Scramble Store
      </h1>
      <div className="flex items-center gap-2">
        <button aria-label="Search" className="p-2 text-black" onClick={onToggleSearch}>
          <Image src="/MagnifyingGlass.svg" alt="Search" width={24} height={24} />
        </button>
        <button aria-label="Cart" className="p-2 text-black" onClick={onToggleCart}>
          <Image src="/ShoppingBag.svg" alt="Cart" width={24} height={24} />
        </button>
      </div>
    </header>
  );
}