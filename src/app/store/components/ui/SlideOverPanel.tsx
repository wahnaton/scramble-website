import type { ReactNode } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

type SlideOverPanelProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

export function SlideOverPanel({ id, title, children }: SlideOverPanelProps) {
  return (
    <div
      id={id}
      popover="manual"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="slide-over-panel"
    >
      <button
        type="button"
        className="slide-over-panel__overlay"
        aria-hidden="true"
        tabIndex={-1}
        popoverTarget={id}
        popoverTargetAction="hide"
      />
      <div className="slide-over-panel__content">
        <div className="p-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-black">{title}</span>
          <button
            aria-label="Close"
            type="button"
            popoverTarget={id}
            popoverTargetAction="hide"
          >
            <XCircleIcon className="h-12 w-12 text-black stroke-[0.65] cursor-pointer" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
