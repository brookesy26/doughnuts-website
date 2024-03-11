import Link from "next/link"
import styles from "../app/page.module.css"

export default function HeaderBar({ eventCall, buttonState }) {

  return (
    <header>
      <Link href={'/'}>Local D's</Link>
      <button
        onKeyDown={eventCall}
        onClick={eventCall}
        aria-expanded={buttonState}
        aria-label='Menu'>
      </button>
    </header>
  );
}

