import { ChevronLeft } from 'lucide-react'
import Link from "next/link";
import { Button } from "../ui/button";

interface HeaderProps {
    text?: string;
    link?: string;
    button?: {
        text: string;
        href?: string;
        className?: string;
        action?: () => void;
    };
}

export const Header = ({ text, link, button }: HeaderProps) => {
    return (
        <header className="bg-white h-[56px] flex items-center justify-between w-full px-4">
            {/* Botón de regreso */}
            {link && (
                <Link href={link || "/"}>
                    <button className="flex items-center justify-center">
                        <ChevronLeft className="text-[#12332A]" />
                    </button>
                </Link>
            )}

            {/* Título centrado */}
            <h1 className="text-[18px] font-bold text-center flex-grow">
                {text || ""}
            </h1>

            {/* Botón a la derecha */}
            {button && (
                <div className=' h-full flex items-center justify-end'>
                    {button.action ? (
                        <Button
                            className={button.className || "text-[#B0B0B0] border border-[#B0B0B0] w-20 h-[25px] m-0"}
                            onClick={button.action}
                        >
                            {button.text}
                        </Button>
                    ) : (
                        <Link href={button.href || "#"}>
                            <Button className={button.className || "text-[#B0B0B0] border border-[#B0B0B0] w-20 h-[25px] m-0"}>
                                {button.text}
                            </Button>
                        </Link>
                    )}
                </div>
            )}
            
        </header >
    );
};
