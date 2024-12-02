import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/logo.png"
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <header className="shadow-sm">
            <div className="max-w-7xl mx-auto p3 flex items-center justify-between gap-3">
                <Link href="/resumes" className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" width={35} height={35} className="rounded-full" />
                    <span className="text-xl font-bold tracking-tight">
                        AI Resume Builder
                    </span>
                </Link>

                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: {
                                width: 35,
                                height: 35
                            }
                        }
                    }}
                />
            </div>
        </header>
    )
}

export default Navbar;