import Link from "next/link";

export default function Navbar(){
    return (<nav className="flex flex-wrap gap-4">
        <Link href="/dashboard">Go to Dashboard</Link>
        <Link href="/professors">Go to Professors</Link>
        <Link href="/donors">Go to Donors</Link>
      </nav>

    )
}