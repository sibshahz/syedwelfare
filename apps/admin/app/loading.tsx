import { Loader2 } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Loader2 className="animate-spin size:32 md:size-36 text-gray-500" />
    </div>
  );
}
