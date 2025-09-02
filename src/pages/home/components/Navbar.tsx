import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <Menubar className="justify-center sticky top-0 z-50">
            <Link to="/">
                <MenubarMenu>
                    <MenubarTrigger>Home</MenubarTrigger>
                </MenubarMenu>
            </Link>
            <Link to="/books">
                <MenubarMenu>
                    <MenubarTrigger>All Books</MenubarTrigger>
                </MenubarMenu>
            </Link>
            <Link to="/create-book">
                <MenubarMenu>
                    <MenubarTrigger>Add Book</MenubarTrigger>
                </MenubarMenu>
            </Link>
            <Link to="/borrow-summary">
                <MenubarMenu>
                    <MenubarTrigger>Borrow Summary</MenubarTrigger>
                </MenubarMenu>
            </Link>
            <ModeToggle />
        </Menubar>
    )
}
