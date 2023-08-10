import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="display m-10">
      <h1 className="font-sans text-2xl italic">About Us</h1>
      <ul>
        <li>
          <Link href="/about/contacts" className="text-cyan-700">
            Contacts
          </Link>
        </li>
        <li>
          <Link href="/about/team" className="text-cyan-700">
            Team
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
