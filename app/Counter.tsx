"use client";
import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0)

    return <div className="space-x-2">
        <button className="border px-2 rounded-md py-1 hover:bg-white hover:text-black transition transition-all shadow-xl" onClick={() => setNum(num - 1)}>-</button>
        <span className="text-xl">{num}</span>
        <button className="border px-2 rounded-md py-1 hover:bg-white hover:text-black transition transition-all shadow-xl" onClick={() => setNum(num + 1)}>+</button>
    </div>
}