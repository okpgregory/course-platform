import Link from "next/link";

type Props = {};

function Logo({}: Props) {
  return (
    <Link href="/" className="font-bold text-2xl">
      Code-Ed Tech
    </Link>
  );
}

export default Logo;
