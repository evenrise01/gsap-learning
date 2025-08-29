import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen flex flex-col gap-[100px] items-center justify-center">
      <div className="flex items-center justify-center">
        <Link className="font-mono text-2xl" href="/basic-animations">
          Basic Tasks
        </Link>
        {/* <Link>Intermediate Tasks</Link> */}
      </div>
    </main>
  );
};

export default page;
