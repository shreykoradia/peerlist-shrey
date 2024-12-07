import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 flex gap-4">
      Welcome to peerlist coding page , now lets see components{" "}
      <Link href={"/components"}>Components</Link>
    </div>
  );
}
