import { XCircleIcon } from "@heroicons/react/24/outline";
type SlideOverPanelProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
};

export function SlideOverPanel({
  open,
  onClose,
  title,
  children,
}: SlideOverPanelProps) {
  return (
    <div
      className={`fixed left-0 right-0 bottom-0 z-[9999] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black/30 transition-opacity ease-in duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-full md:w-96 bg-white transition-transform ease-out duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-black">{title}</span>
          <button onClick={onClose} aria-label="Close" type="button">
            <XCircleIcon className="h-12 w-12 text-black stroke-[0.65] cursor-pointer" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
