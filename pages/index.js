import Link from "next/link";

function HomePage() {
    return (
        <div>
            <h1>
                The Home Page
            </h1>
            <ul>
                <li>
                <Link href="/portfotilo">Portfotilo</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link href="/clients">Client</Link>
                </li>
            </ul>
        </div>
    )
};
export default HomePage;