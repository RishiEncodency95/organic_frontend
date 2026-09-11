'use client';
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const SelectContext = createContext<any>(null);

export const Select = ({ children, value, onValueChange, disabled }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <SelectContext.Provider value={{ value, onValueChange, isOpen, setIsOpen, disabled }}>
            <div ref={selectRef} className="relative">{children}</div>
        </SelectContext.Provider>
    );
};

export const SelectTrigger = ({ children, className, id }: any) => {
    const { isOpen, setIsOpen, disabled } = useContext(SelectContext);
    return (
        <div 
            id={id} 
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={`flex items-center justify-between w-full focus:outline-none ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className}`}
        >
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
        </div>
    );
};

export const SelectValue = ({ placeholder }: any) => {
    const { value } = useContext(SelectContext);
    return <span className={`truncate ${!value ? "text-slate-400" : ""}`}>{value || placeholder}</span>;
};

export const SelectContent = ({ children }: any) => {
    const { isOpen } = useContext(SelectContext);
    if (!isOpen) return null;
    return (
        <div className="absolute z-50 w-full mt-1 max-h-60 overflow-y-auto rounded-md border border-slate-200 bg-white text-slate-800 shadow-2xl py-1 animate-in fade-in zoom-in-95 duration-100">
            {children}
        </div>
    );
};

export const SelectItem = ({ children, value }: any) => {
    const { onValueChange, setIsOpen, value: selectedValue } = useContext(SelectContext);
    const isSelected = selectedValue === value;
    return (
        <div 
            onClick={() => {
                onValueChange(value);
                setIsOpen(false);
            }}
            className={`relative flex w-full cursor-pointer select-none items-center px-3 py-2 text-sm outline-none transition-colors hover:bg-slate-100 ${isSelected ? 'bg-slate-50 font-semibold text-[#4a8f2f]' : ''}`}
        >
            {children}
        </div>
    );
};