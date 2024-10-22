import Link from "next/link"
export default function Navbar() {
return(
    <div className="text-center bg-green-400 border-8 border-purple-500 border-collapse rounded-sm">
        <img src="psmcl.png" width="200" height="100"></img>
        <h1 className="text-center border-8 border-yellow-500 border-collapse rounded-sm bg-red-400 border-1 p-2 font-serif text-9xl">SUZUKI</h1>
        <div>
        <Link href="./" className="border-4 border-transparent mr-4 p-0 text-4xl font-bold font-serif">HOME</Link>
        <Link href="/alto"  className="border-4 border-transparent mr-4 p-0 text-4xl font-bold font-serif">ALTO</Link>
        <Link href="/swift" className="border-4 border-transparent mr-4 p-0 text-4xl font-bold font-serif">SWIFT</Link>
        <Link href="/wagnor"  className="border-4 border-transparent mr-4 p-0 text-4xl font-bold font-serif">WAGNOR</Link>
        <Link href="/cultur"  className="border-4 border-transparent mr-4 p-0 text-4xl font-bold font-serif">CULTUS</Link>
        </div>
    </div>
    );
}


