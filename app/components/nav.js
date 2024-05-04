import Link from 'next/link'

export default function NavigationBar({ nameState }) {

  // Nav structure using Link components
  return (
    <nav className={nameState}>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About Us</Link></li>
        <li><Link href={"/wholesale"}>Wholesale</Link></li>
        <li><Link href={"/contact"}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}