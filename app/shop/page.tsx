"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function ShopPage() {
    const [openSearchPanel, setOpenSearchPanel] = useState<"search" | null>(null);
    const [openCartPanel, setOpenCartPanel] = useState<"cart" | null>(null);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-gray-100 flex items-center justify-between px-2">
                <h1 className="text-2xl font-black text-black font-['SF_Pro_Rounded','SF_Pro',-apple-system,system-ui,sans-serif]">
                    Scramble Store
                </h1>
                <div className="flex items-center gap-2">
                    <button aria-label="Search" className="p-2 text-black" onClick={() => {
                                setOpenCartPanel(null)
                                setOpenSearchPanel(openSearchPanel === "search" ? null : "search")
                            }}>
                        <Image src="/MagnifyingGlass.svg" alt="Search" width={24} height={24} />
                    </button>
                    <button aria-label="Cart" className="p-2 text-black" onClick={() => {
                                setOpenSearchPanel(null)
                                setOpenCartPanel(openCartPanel === "cart" ? null : "cart")
                        }}>
                        <Image src="/ShoppingBag.svg" alt="Cart" width={24} height={24} />
                    </button>
                </div>
            </header>
            <div className="h-14" />
            <div className={`fixed top-14 left-0 right-0 bottom-0 z-40 ${openSearchPanel ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div
                  className={`fixed top-14 left-0 right-0 bottom-0 bg-gray-400/20 backdrop-blur-md transition-opacity duration-400 ${openSearchPanel ? 'opacity-100' : 'opacity-0'}`}
                  onClick={() => {setOpenSearchPanel(null)}}
                  aria-hidden="true"
                />
                <div
                  className={`fixed top-14 left-0 right-0 h-1/2 bg-white transition-transform duration-500 ${openSearchPanel ? 'translate-y-0' : '-translate-y-full'}`}
                  role="dialog"
                  aria-modal="true"
                >
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-black">
                      {"search"}
                    </span>
                  </div>
                </div>
            </div>
            <div className={`fixed top-14 left-0 right-0 bottom-0 z-40 ${openCartPanel ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div
                  className={`fixed top-14 left-0 right-0 bottom-0 bg-gray-400/20 backdrop-blur-md transition-opacity duration-400 ${openCartPanel ? 'opacity-100' : 'opacity-0'}`}
                  onClick={() => setOpenCartPanel(null)}
                  aria-hidden="true"
                />
                <div
                  className={`fixed top-14 left-0 right-0 h-1/2 bg-white transition-transform duration-500 ${openCartPanel ? 'translate-y-0' : '-translate-y-full'}`}
                  role="dialog"
                  aria-modal="true"
                >
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-black">
                      {"cart"}
                    </span>
                  </div>
                </div>
            </div>
        </>
    )
}