import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-3xl font-bold text-indigo-500">Hello from the demo!</p>
      <Button className="mt-2 bg-indigo-500 text-white font-semibold">
        Click me
      </Button>
    </div>
  );
};

export default Page;
