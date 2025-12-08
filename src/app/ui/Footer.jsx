import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-black px-10 py-14 text-gray-400">
      <p>All Rights Reserved</p>
      <div className="flex gap-7">
        <Link href={"/privacy"}>Privacy</Link>
        <Link href={"/terms"}>Terms</Link>
      </div>
    </div>
  );
}
export default Footer;
