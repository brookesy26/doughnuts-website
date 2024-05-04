import Link from "next/link"

export default function HeaderBar({ eventCall, menuState }) {

  return (
    <>
      <Link href={'/'}>Local D's</Link>
      <button
        onKeyDown={eventCall}
        onClick={eventCall}
        aria-expanded={menuState}
        aria-label='Menu'>
      </button>
    </>
  );
}

