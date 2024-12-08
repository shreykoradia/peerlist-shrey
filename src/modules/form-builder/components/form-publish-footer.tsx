import { Button } from "@/shared/ui/button";
import React from "react";

function PlubishFormFooter() {
  return (
    <>
      <div className="w-full border-t border-t-secondary-foreground flex justify-end px-6 py-4 bg-secondary">
        <Button variant={"default"}>Submit</Button>
      </div>
    </>
  );
}

export default PlubishFormFooter;
