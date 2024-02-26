import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manuel', name: 'Manuel' },
  ];

  return (
    <div>
      <h1> the clients page</h1>
      {/*  static/known beforehand
       */}
      {/* 
      <ul>
        <li>
          <Link href="/clients/max">Max</Link>
        </li>
        <li>
          <Link href="/clients/manuel">Manuel</Link>
        </li>
      </ul> */}

      {/* dynamic for shorter links */}
      {clients.map((client) => (
        <li key={client.id}>
          <Link href={`/clients/${client.id}`}>{client.name}</Link>
        </li>
      ))}

      {/* dynamic for longer links  */}
      {clients.map((client) => (
        <li key={client.id}>
          <Link
            href={{
              pathname: '/clients/[id]',
              query: { id: client.id },
            }}
          >
            {client.name}
          </Link>
        </li>
      ))}
    </div>
  );
}
