import { FeaturedProducts } from '../components';
import Hero from '../components/Hero';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  console.log(products);
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
