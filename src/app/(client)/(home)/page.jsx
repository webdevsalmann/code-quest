import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <main className="relative min-h-[calc(100vh_-_5rem)] flex-center">
      <div className="md:mx-auto w-full md:w-2/3 md:text-center">
        <h1>Code, Compile, Conquer</h1>
        <p className="my-base">Sharpen your coding skills with real-world challenges and instant feedback.</p>
        <Link className={buttonVariants()} href="/questions">View Questions</Link>
      </div>
    </main>
  )
}
