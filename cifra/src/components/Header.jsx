import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu"

import { LogoHeader } from "./LogoHeader.jsx"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const menuItems = [
        { name: "Home", to: "/" },
        { name: "Chi siamo", to: "/chi-siamo" },
        // { name: "Eventi", to: "/articles/ciao-mamma" },
        { name: "Unisciti a noi", to: "/uniscitianoi" },
        { name: "Contatti", to: "/contatti" },
    ]
    const handleNavigation = (to) => {
        navigate(to)
        setIsOpen(false)
    }
    return (
        <nav className="relative bg-background shadow-md inset-x-0 top-0">
            <div className="mx-auto px-1 lg:px-8 ">
                <div className="flex justify-between h-24">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <LogoHeader width={200} />
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="bg-white">
                                <Button variant="outline" size="default" className="lg:hidden">
                                    <Menu className="h-6 w-6" strokeWidth={1} />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                                <SheetHeader>
                                    <SheetTitle className="font-bold font-['Anton'] text-[#14a2c6]">CI.FRA</SheetTitle>
                                    <SheetDescription className="hidden">
                                        Associazione Francesca Caparelli
                                    </SheetDescription>
                                </SheetHeader>
                                <nav className="flex flex-col gap-4 mt-4">
                                    {menuItems.map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={() => handleNavigation(item.to)}
                                            className="text-lg font-medium text-gray-600 hover:text-gray-900 text-left no-underline"
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                    <Button className="bg-primary  hover:bg-[#14a2c6] transition-colors text-primary-foreground mb-2"
                                    onClick={() => {handleNavigation("/dona-ora")}}>
                                        Dona Ora
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menuItems.map((item) => (
                                    <NavigationMenuItem key={item.name}>
                                        <NavigationMenuLink
                                            asChild
                                        >
                                            <Link
                                                to={item.to}
                                                className="text-xs xl:text-lg font-medium text-foreground hover:text-gray-900 px-3 py-2 rounded-md no-underline"
                                            >
                                                {item.name}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                                <Button className="bg-primary hover:bg-[#14a2c6] text-primary-foreground mb-2 transition-colors" 
                                onClick={() => {handleNavigation("/dona-ora")}} >
                                    Dona Ora
                                </Button>
                            </NavigationMenuList>
                        </NavigationMenu>

                    </div>
                </div>
            </div>
        </nav>


    )
}

export { Navbar as Header }