"use client";

import { useState } from "react";

type ColorSelectorProps = {
  colors: string[]; // hex values
  onChange?: (color: string) => void;
  value?: string | null;
};

export function ColorSelector({ colors, onChange, value }: ColorSelectorProps) {
  const [selected, setSelected] = useState<string | null>(value ?? null);

  const handleSelect = (color: string) => {
    setSelected(color);
    onChange?.(color);
  };

  return (
    <div className="flex gap-4 mt-2">
      {colors.map((hex) => {
        const isSelected = selected === hex;
        return (
          <button
            key={hex}
            type="button"
            aria-label={`Select color ${hex}`}
            aria-pressed={isSelected}
            onClick={() => handleSelect(hex)}
            className="inline-flex size-10 items-center justify-center transition-transform duration-200 ease-out hover:scale-105 cursor-pointer"
          >
            <span
              className={
                "inline-block size-8 rounded-full " +
                (isSelected
                  ? "ring-1 ring-black ring-offset-4 ring-offset-white"
                  : "")
              }
              style={{ backgroundColor: hex }}
            />
          </button>
        );
      })}
    </div>
  );
}
