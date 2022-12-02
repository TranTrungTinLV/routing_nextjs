import Link from "next/link";

function HomePage() {
    const client_side = [
        { id: 'portfotilo', name: 'Portfotilo' },
        { id: 'clients', name: 'Client' },
        { id: 'about', name: 'About' },
    ]
    return (
        <div>
            <h1>
                The Home Page
            </h1>
            <ul>
                {client_side.map(side => (
                    <li key={side.id}>
                        <Link href={`${side.id}`}>
                            {side.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default HomePage;