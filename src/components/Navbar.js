import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex justify-around">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/rooms">Rooms</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
  