import { SelectItem } from "@/components/ui/select";
import { Download, Upload, Repeat, ChevronLeft, ChevronRight, History, Plus, RefreshCw, TrendingUp, Store, Info, Shield, Star, Globe } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Page() {
    return (
        
            <div className="w-full h-[720px] rounded-2xl overflow-hidden">
                <div className="bg-green-900 text-white p-6 flex justify-start gap-4 pb-10 pt-[60px]">
                    {/* <button className="absolute left-4 pt-2">
                        <ChevronLeft className="text-white w-6 h-6" />
                    </button> */}
                    <Image
                        src="/img/eli28.svg"
                        width={45}
                        height={45}
                        alt="Profile"
                        className="w-16 h-16 ml-4 rounded-full object-cover"
                    />
                    <div className="pl-2">
                        <h1 className="text-[24px] font-bold">Gamarrita Crece</h1>
                        <div className="flex flex-row gap-6">
                            <p className="text-md font-bold">ID: 62511839</p>
                            <button className="text-sm font-bold bg-green-600 text-white rounded-md px-2 py-0">Verified</button>
                        </div>
                    </div>
                    {/* <button className="absolute right-4 pt-2">
                        <ChevronRight className="text-white w-6 h-6" />
                    </button> */}
                </div>
                <div className="p-6">
                    <Section title="Wallet">
                        <Item icon={<Download />} label="Deposit" />
                        <Item icon={<Upload />} label="Withdraw" />
                        <Item icon={<Repeat />} label="Transfer" />
                        <Item icon={<History />} label="History" />
                        <Item icon={<Plus />} label="Buy crypto" />
                        <Item icon={<RefreshCw />} label="Swap" />
                        <Item icon={<TrendingUp />} label="P2P trading" />
                        <Link href="/products">
                         <Item icon={<Store />} label="Emprende ya!" />
                        </Link>
                       
                    </Section>
                    <Section title="Wanya">
                        <Item icon={<Info />} label="About us" />
                        <Item icon={<Globe />} label="Social" />
                        <Item icon={<Shield />} label="Legal" />
                        <Item icon={<Star />} label="Referral" />
                    </Section>
                    <Section title="More">
                        <Item icon={<Info />} label="Support" />
                        <Item icon={<Star />} label="Feedback" />
                    </Section>
                </div>
            </div>
       
    )
}


function Item({ icon, label }: { icon: ReactNode; label: string }) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center text-green-700 bg-green-100 rounded-full mb-0">
                {icon}
            </div>
            <p className="text-sm font-medium">{label}</p>
        </div>
    );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-4 gap-4">{children}</div>
        </div>
    );
}