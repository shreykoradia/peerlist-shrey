import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <div className="p-4 flex gap-4">
      <Button variant={"default"}>Click Peerlist</Button>
      <Button variant={"outline"}>Click Peerlist</Button>
    </div>
  );
}
