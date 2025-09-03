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
      className={`fixed top-14 left-0 right-0 bottom-0 z-40 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        className={`fixed top-14 left-0 right-0 bottom-0 bg-gray-400/20 backdrop-blur-md transition-opacity duration-400 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed top-14 left-0 right-0 h-1/2 bg-white transition-transform duration-500 ${open ? "translate-y-0" : "-translate-y-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-black">{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
