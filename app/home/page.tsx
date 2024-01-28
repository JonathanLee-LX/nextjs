import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Home page.',
}

export default function Home() {
    return <div className="text-center mt-20">
        <h3 className="text-4xl font-semibold from-red-300 to-blue-700 bg-gradient-to-r bg-clip-text text-transparent animate-bounce">This is home page.</h3>
        <span className="text-xs font-extralight">powered by nextjs.</span>
    </div>
}