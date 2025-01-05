
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Page() {
  return (
    <div className="w-full h-[720px] overflow-hidden">
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
            <button className="text-sm font-bold bg-green-600 text-white rounded-md px-2 py-0">
              Verified
            </button>
          </div>
        </div>
        {/* <button className="absolute right-4 pt-2">
                        <ChevronRight className="text-white w-6 h-6" />
                    </button> */}
      </div>
      <div className="p-6">
        <Section title="Wallet">
          <Item
            icon={
              <img
                src="/icon/deposit.svg"
                width={34}
                height={34}
                alt="check"
              />
            }
            label="Deposit"
          />
          <Item
            icon={
              <img
                src="/icon/withdraw.svg"
                width={34}
                height={34}
                alt="withdraw"
              />
            }
            label="Withdraw"
          />
          <Item
            icon={
              <img
                src="/icon/transfer.svg"
                width={34}
                height={34}
                alt="transfer"
              />
            }
            label="Transfer"
          />
          <Item
            icon={
              <img
                src="/icon/history.svg"
                width={34}
                height={34}
                alt="history"
              />
            }
            label="History"
          />
          <Item
            icon={
              <img
                src="/icon/buycripto.svg"
                width={34}
                height={34}
                alt="buycripto"
              />
            }
            label="Buy crypto"
          />
          <Item
            icon={
              <img src="/icon/swap.svg" width={34} height={34} alt="swap" />
            }
            label="Swap"
          />
          <Item
            icon={
              <img
                src="/icon/trading.svg"
                width={34}
                height={34}
                alt="trading"
              />
            }
            label="P2P trading"
          />
          {/* Link con Item */}
          <Link href="/products">
            <Item
              icon={
                <img
                  src="/icon/emprendeya.svg"
                  width={34}
                  height={34}
                  alt="emprendeya"
                />
              }
              label="Emprende ya!"
            />
          </Link>
        </Section>
        <Section title="Wanya">
          <Item
            icon={
              <img
                src="/icon/aboutus.svg"
                width={34}
                height={34}
                alt="aboutus"
              />
            }
            label="About us"
          />
          <Item
            icon={
              <img
                src="/icon/social.svg"
                width={34}
                height={34}
                alt="social"
              />
            }
            label="Social"
          />
          <Item
            icon={
              <img src="/icon/legal.svg" width={34} height={34} alt="legal" />
            }
            label="Legal"
          />
          <Item
            icon={
              <img
                src="/icon/referral.svg"
                width={34}
                height={34}
                alt="referral"
              />
            }
            label="Referral"
          />
        </Section>
        <Section title="More">
          <Item
            icon={
              <img
                src="/icon/support.svg"
                width={34}
                height={34}
                alt="support"
              />
            }
            label="Support"
          />
          <Item
            icon={
              <img
                src="/icon/feedback.svg"
                width={34}
                height={34}
                alt="feedback"
              />
            }
            label="Feedback"
          />
        </Section>
      </div>
    </div>
  );
}

function Item({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 flex items-center justify-center text-green-700 bg-white rounded-full mb-0">
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
