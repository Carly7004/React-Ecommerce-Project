import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { OrdersList, SectionTitle } from '../components';
import ComplexPaginationContainer from '../components/ComplexPaginationContainer';

const orderQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: { Authorization: `Bearer ${user.token}` },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warning('You must be logged in to view the order');
      return redirect('/login');
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const fetchData = await queryClient.ensureQueryData(
        orderQuery(params, user)
      );
      console.log(fetchData);
      return { orders: fetchData.data.data, metaData: fetchData.data.meta };
    } catch (error) {
      const errorMessage =
        error?.fetchData?.data?.error?.message ||
        'there was an error placing your order';

      toast.error(errorMessage);
      if (error?.fetchData?.status === 401 || 403) return redirect('/login');
    }
    return null;
  };

const Orders = () => {
  const { metaData } = useLoaderData();
  if (metaData.pagination.total < 1) {
    return <SectionTitle text='please make an order' />;
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
