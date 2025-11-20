"use client";

import { useEffect, useState } from "react";

type SizeSelectorProps = {
  sizes: string[];
  onChange?: (size: string) => void;
  value?: string | null;
};

export function SizeSelector({ sizes, onChange, value }: SizeSelectorProps) {
  const [selected, setSelected] = useState<string | null>(value ?? null);

  useEffect(() => {
    if (value !== undefined && value !== selected) {
      setSelected(value);
    }
  }, [value, selected]);

  const handleSelect = (size: string) => {
    setSelected(size);
    onChange?.(size);
  };

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isSelected = selected === size;
        return (
          <button
            key={size}
            type="button"
            aria-pressed={isSelected}
            onClick={() => handleSelect(size)}
            className={
              "inline-flex w-14 h-9 items-center justify-center border border-black text-sm transition-transform duration-100 ease-out hover:scale-105 cursor-pointer " +
              (isSelected ? "bg-black text-white" : "bg-white text-black")
            }
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
