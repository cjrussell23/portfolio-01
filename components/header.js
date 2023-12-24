import ThemeToggle from "./themeToggle";


export default function Header() {
    return (
        <header className="flex items-center justify-between sticky top-0 transition duration-100 z-50 bg-background invisible"
        id="header">
            <span id='logo' className="text-3xl font-bold p-8">CR</span>
            <div className="flex items-center justify-between space-x-4 p-8">
            <ThemeToggle />
            </div>
        </header>
    )
}