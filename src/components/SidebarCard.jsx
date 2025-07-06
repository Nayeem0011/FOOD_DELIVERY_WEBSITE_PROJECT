import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

const SidebarCard = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();

  // Handlers
  const handleDecrement = () => {
    if (qty > 1) {
      dispatch(DecrementQty(id));
    }
  };

  const handleIncrement = () => {
    dispatch(IncrementQty(id));
  };

  const handleRemove = () => {
    dispatch(RemoveItem(id));
  };

  return (
    <div className="w-full flex items-center justify-between p-4 rounded-xl shadow-md hover:shadow-lg transition bg-white">
      {/* Left: Image + Info */}
      <div className="flex gap-4 items-center w-[70%]">
        {/* Image */}
        <div className="w-[70px] h-[70px] rounded-lg overflow-hidden flex-shrink-0 border border-green-100">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 w-full">
          <span className="font-semibold text-gray-800 text-sm md:text-base">
            {name}
          </span>

          {/* Quantity Controller */}
          <div className="flex w-[110px] h-[40px] rounded-full border border-green-400 shadow overflow-hidden font-semibold text-green-600 text-sm md:text-base">
            <button
              className="w-[30%] bg-white hover:bg-green-100 flex justify-center items-center"
              onClick={handleDecrement}>
              –
            </button>

            <div className="w-[40%] bg-gray-100 flex justify-center items-center">{qty}</div>
            
            <button
              className="w-[30%] bg-white hover:bg-green-100 flex justify-center items-center"
              onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>

      {/* Right: Price + Delete */}
      <div className="flex flex-col items-end justify-between h-[70px]">
        <span className="text-green-500 font-bold text-sm md:text-base">
          Rs {price} /-
        </span>
        <RiDeleteBin6Line
          className="w-5 h-5 text-red-400 hover:text-red-600 cursor-pointer transition"
          onClick={handleRemove}
        />
      </div>
    </div>
  );
};

export default SidebarCard;
