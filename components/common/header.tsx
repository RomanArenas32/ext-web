import { ChevronLeft } from "lucide-react"
import Link from "next/link";
import { Button } from "../ui/button";


interface HeaderProps {
    text?: string;
    link?: string;
    button?: any;
}

export const Header = ({ text, link, button }: HeaderProps) => {
    return (
        <header className="bg-white h-[86px] flex flex-row items-center w-fulls relative">
            <Link href={link || "/"}>
                <button className="items-center flex justify-center absolute left-6">
                    <ChevronLeft className="text-[#12332A]" />
                </button>
            </Link>
            <div className="w-full">
            <h1 className="text-[18px] text-nowrap font-bold absolute left-1/2 transform -translate-x-1/2">{text || ""}</h1>
            </div>
            {button && (
        <div className="absolute right-6">
            <Button {...button} />
        </div>
    )}
</header>
    )
}