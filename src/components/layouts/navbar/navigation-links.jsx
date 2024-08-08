import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export const navigationLinks = [
    {
        title: "Home",
        path: "/",
        varient: "ghost"
    },
    {
        title: "About",
        path: "/about",
        varient: "ghost"
    },
    {
        title: "Contact Me",
        path: "/contact",
        varient: ""
    }
]

export default function NavigationLinks() {
    const path = usePathname();

    return navigationLinks.map((item) => (
        <li key={item.title}>
            <Link
                className={cn(
                    "capitalize",
                    (path === item.path && "bg-accent"),
                    buttonVariants({ variant: item.varient, size: 'sm' }),
                )}
                href={item.path}
            >
                {item.title}
            </Link>
        </li>
    ))
}
