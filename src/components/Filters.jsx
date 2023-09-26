import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { metaData, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form
      className='bg-base-300 rounded-md px-8 py-4 grid gap-x-4
   gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'
    >
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        size='input-sm'
        defaultValue={search}
      />

      {/* CATEGORIES */}
      <FormSelect
        name='category'
        label='select category'
        list={metaData.categories}
        size='select-sm'
        defaultValue={category}
      />

      {/* COMPANIES */}
      <FormSelect
        name='company'
        label='select company'
        list={metaData.companies}
        size='select-sm'
        defaultValue={company}
      />
      {/* PRICE */}
      <FormRange
        name='price'
        label='select price'
        size='range-sm'
        defaultValue={price}
      />

      {/* SHIPPING */}
      <FormCheckbox
        name='shipping'
        label='free shipping'
        size='checkbox-sm'
        defaultValue={shipping}
      />

      {/* ORDERS */}
      <FormSelect
        name='sort by'
        label='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
        defaultValue={order}
      />

      {/* BUTTONS */}
      <button className='btn btn-primary btn-sm' type='submit'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;
