import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
// import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  // const navigate = useNavigate()
  return (
    <form className="flex items-start justify-between gap-[50px] mt-[100px] max-750:flex-col">
      <div className="w-full max-w-[max(30%,_500px)] ">
        <p className="text-[30px] font-semibold mb-[50px] " >Delivery Information</p>
        <div className="flex gap-2.5 ">
          <input className="mb-[15px] w-full p-2.5 border-[1px] border-solid border-[#c5c5c5] rounded outline-[tomato] " type="text" placeholder="First Name" />
          <input className="mb-[15px] w-full p-2.5 border-[1px] border-solid border-[#c5c5c5] rounded outline-[tomato] " type="text" placeholder="Last Name" />
        </div>
        <input className="mb-[15px] w-full p-2.5 border-[1px] border-solid border-[#c5c5c5] rounded outline-[tomato] " type="email" placeholder="Email address" />
        <input className="mb-[15px] w-full p-2.5 border-[1px] border-solid border-[#c5c5c5] rounded outline-[tomato] " type="text" placeholder="Street" />
        <div className="flex gap-2.5 ">
          <input className="mb-[15px] w-full p-2.5 border-[1px] border-solid border-[#c5c5c5] rounded outline-[tomato] " type="text" placeholder="City" />
          <input className="mb-[15px] w-full p-2.5 border-[1px] border-solid border-[#c5c5c5] rounded outline-[tomato] " type="text" placeholder="State" />
        </div>
        <div className="flex gap-2.5 ">
          <input className="mb-[15px] w-full p-2.5 border-[1px] border-solid border-[#c5c5c5] rounded outline-[tomato] " type="text" placeholder="Zip code" />
          <input className="mb-[15px] w-full p-2.5 border-[1px] border-solid border-[#c5c5c5] rounded outline-[tomato] " type="text" placeholder="Country" />
        </div>
        <input className="mb-[15px] w-full p-2.5 border-[1px] border-solid border-[#c5c5c5] rounded outline-[tomato] " type="text" placeholder="phone" />
      </div>
      <div className="w-full max-w-[max(40%,_500px)] ">
        <div className="flex-1 flex flex-col gap-5 ">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555] ">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5 mx-0 " />
            <div className="flex justify-between text-[#555] ">
              <p>Delivery Fee</p>
              <p>
                Rs.
                {getTotalCartAmount() > 0
                  ? getTotalCartAmount() > 500
                    ? 80
                    : 40
                  : 0}
              </p>
            </div>
            <hr className="my-2.5 mx-0 " />
            <div className="flex justify-between text-[#555] ">
              <b>Total</b>
              <b>
                Rs.
                {getTotalCartAmount() + getTotalCartAmount() > 0
                  ? getTotalCartAmount() > 500
                    ? 80
                    : 40
                  : 0}
              </b>
            </div>
          </div>
          <button
            className="border-none mt-[30px] text-white bg-[tomato] w-[max(15vw,_200px)] py-[12px] px-0 rounded cursor-pointer "
          >
            Proceed to payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
