import type { ReactNode } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import styles from "./SlideOverPanel.module.css";

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
      className={`${styles.panelState} fixed inset-0 z-50 w-screen h-screen m-0 p-0 border-0 bg-transparent block`}
    >
      <button
        type="button"
        className={`${styles.overlayState} absolute inset-0 border-0 m-0 p-0 bg-black/30 cursor-pointer`}
        aria-hidden="true"
        tabIndex={-1}
        popoverTarget={id}
        popoverTargetAction="hide"
      />
      <div
        className={`${styles.contentState} absolute top-0 right-0 bottom-0 w-full md:w-96 bg-white text-black flex flex-col shadow-2xl`}
      >
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
