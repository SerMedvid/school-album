import Link from "next/link";
import Nav from "@/app/Components/Header/Nav";

const Header = props => {
    return (
        <header className="flex justify-between	px-6 py-8 fixed w-full">
            <span className="font-bold text-4xl">
                <Link href="/">9В</Link>
            </span>
            <Nav />
        </header>
    )
}

export default Header