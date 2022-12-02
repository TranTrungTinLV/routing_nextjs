import Link from "next/link";

function ProjectClient() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' },
  ];
    return (<div>
        <h1>
            Project for a Selected Client
        </h1>
        <ul>
            {clients.map((client) => (
                <li key={client.id}>
                    <Link href={{
                        pathname: "/clients/[id]",
                        query: {id: client.id}
                    }}>
                        {client.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>)
}
export default ProjectClient;


// function ClientsPage() {
//   const clients = [
//     { id: 'max', name: 'Maximilian' },
//     { id: 'manu', name: 'Manuel' },
//   ];

//   return (
//     <div>
//       <h1>The Clients Page</h1>
//       <ul>
//         {clients.map((client) => (
//           <li key={client.id}>
//             <Link
//               href={`clients/${client.id}`}
//             >
//               {client.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ClientsPage;