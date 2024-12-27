'use client'

import { Download, Upload, Repeat, ChevronLeft, ChevronRight, History, Plus, RefreshCw, TrendingUp, Store, Info, Shield, Star, Globe } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="bg-gray-50 h-[720px] flex justify-center py-2">
      <div className="bg-white w-full h-[690px] max-w-md rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-green-800 text-white p-4 flex items-center gap-4">
        <button className="absolute  left-4 pt-10">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <Image
            src="/img/1828.png"
            width={6}
            height={6}
            alt="Profile"
            className="w-16 h-16 ml-10 rounded-full object-cover"
          />
          <div className="pl-[2px]">
            <h1 className="text-xl font-bold">Gamarrita crece</h1>
            <div className="flex flex-row gap-4">
            <p className="text-sm mt-2">ID: 62511839</p>
            <span className="text-xs bg-green-800 text-white px-2 py-0 rounded-full mt-2 inline-block">Verified</span>
            </div>
          </div>
          <button className="absolute right-4 pt-10">
            <ChevronRight className="text-white w-6 h-6" />
          </button>
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
            <Item icon={<Store />} label="Emprende ya!" />
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
    </div>
  );
}

import { ReactNode } from 'react';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-4 gap-4">{children}</div>
    </div>
  );
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
