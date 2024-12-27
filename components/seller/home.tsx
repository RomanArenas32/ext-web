'use client'

import Confirmation from "./confirmación";
import Confirm2 from "./confir2";

export default function Home() {
  return (
    <div>

    <div className="bg-gray-50 h-[720px] flex justify-center py-2">
      <Confirmation />
    </div>
      <Confirm2 />
    </div>
  );
}
