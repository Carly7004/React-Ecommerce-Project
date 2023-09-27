import { formatPrice, generateAmountOptions } from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <article className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'>
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className='h-28 w-28 rounded-lg sm:h-32 sm:w-32 object-cover'
      />
      {/* INFO */}
      <div className='sm:ml-16 sm:w-48'>
        {/* TITLE */}
        <h3 className='capitalize font-medium'>{title}</h3>
        {/* COMPANY */}
        <h4 className='capitalize text-sm text-neutral-content mt-2'>
          {company}
        </h4>
        {/* COLOR */}
        <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
          color:
          <span
            className='badge badge-sm'
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className='sm:ml-24'>
        {/* AMOUNT */}
        <div className='form-control max-w-xs'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text'>Amount</span>
          </label>
          <select
            name='amount'
            id='amount'
            value={amount}
            onChange={handleAmount}
            className='mt-2 select select-base select-bordered select-xs'
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          onClick={removeItemFromCart}
          className='mt-2 link link-primary link-hover text-sm'
        >
          remove
        </button>
      </div>
      <div className='sm:ml-2'>
        {/* PRICE */}
        <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
      </div>
    </article>
  );
};
export default CartItem;
