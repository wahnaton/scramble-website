"use client";

import { useEffect, useState } from "react";

type ColorOption = { value: string; swatch: string };

type ColorSelectorProps = {
  colors: ColorOption[];
  onChange?: (color: string) => void;
  value?: string | null;
};

export function ColorSelector({ colors, onChange, value }: ColorSelectorProps) {
  const [selected, setSelected] = useState<string | null>(value ?? null);

  useEffect(() => {
    if (value !== undefined && value !== selected) {
      setSelected(value);
    }
  }, [value, selected]);

  const handleSelect = (color: string) => {
    setSelected(color);
    onChange?.(color);
  };

  return (
    <div className="flex gap-4 mt-2">
      {colors.map(({ value: colorValue, swatch }) => {
        const isSelected = selected === colorValue;
        return (
          <button
            key={colorValue}
            type="button"
            aria-label={`Select color ${colorValue}`}
            aria-pressed={isSelected}
            onClick={() => handleSelect(colorValue)}
            className="inline-flex size-10 items-center justify-center transition-transform duration-200 ease-out hover:scale-105 cursor-pointer bg-transparent border-none"
          >
            <span
              className={
                "inline-block size-8 rounded-full " +
                (isSelected
                  ? "ring-1 ring-black ring-offset-4 ring-offset-white"
                  : "")
              }
              style={{ backgroundColor: swatch }}
            />
          </button>
        );
      })}
    </div>
  );
}
