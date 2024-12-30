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
        <header className="bg-white h-[56px] flex flex-row items-center w-full p-6">
            <Link href={link || "/"}>
                <button className="items-center flex justify-center">
                    <ChevronLeft className="text-[#12332A]" />
                </button>
            </Link>
            <div className="w-full text-center">
                <h1 className="text-[16px]">{text || ""}</h1>
            </div>
            {button && <Button {...button}/>}
        </header>
    )
}