import { useRouter } from 'next/router';

export default function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    // string approach
    router.push('/clients/max/projecta');
    // object approach
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' },
    });
  };

  return (
    <div>
      <h1>the page of a selected client</h1>
      <button onClick={loadProjectHandler}>load project A</button>
    </div>
  );
}
