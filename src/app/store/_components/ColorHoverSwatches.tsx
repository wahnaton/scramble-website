"use client";

import type { JSX } from "react";

type ColorHoverSwatchesProps = {
  colors: string[];
  onHover?: (hex: string | null) => void;
};

export function ColorHoverSwatches({
  colors,
  onHover,
}: ColorHoverSwatchesProps): JSX.Element | null {
  if (!colors.length) return null;

  return (
    <div className="flex gap-2 mt-1 mb-1">
      {colors.map((hex, i) => (
        <button
          type="button"
          key={`${hex}-${i}`}
          className="inline-flex items-center justify-center"
          onMouseEnter={() => onHover?.(hex)}
          aria-label={`Preview color ${hex}`}
        >
          <span
            className="inline-block size-7 rounded-full border border-gray-300 cursor-pointer"
            style={{ backgroundColor: hex }}
          />
        </button>
      ))}
    </div>
  );
}
