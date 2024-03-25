import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  // data: is the folder name, dummy-backend.json: is the file name
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  // JSON: convert JSON to JavaScript object
  const data = JSON.parse(jsonData);

  if (data.products.length === 0) {
    return { notFound: true };
  }

  if (!data) {
    return { redirect: { destination: '/no-data' } };
  }

  return {
    props: {
      products: data.products,
    },
    // revalidate: 10, means every 10 seconds, the page will be re-generated
    revalidate: 10,
  };
}

export default HomePage;
