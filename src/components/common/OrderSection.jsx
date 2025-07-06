import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { db } from '../../utils/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { clearCart } from '../../redux/cartSlice'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


const OrderSection = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart)
  const [step, setStep] = useState(1)
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' })
  const [deliveryInfo, setDeliveryInfo] = useState({ address: '', city: '', postcode: '', note: '' })
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery')

  const handleOrderSubmit = async () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!')
      return
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

    const order = {
      personalInfo,
      deliveryInfo,
      items: cartItems,
      total,
      paymentMethod,
      createdAt: serverTimestamp()
    }

    try {
      await addDoc(collection(db, 'orders'), order)
      toast.success('Order placed successfully!')
      dispatch(clearCart())
      setStep(1)
      setPersonalInfo({ name: '', email: '', phone: '' })
      setDeliveryInfo({ address: '', city: '', postcode: '', note: '' })
      setPaymentMethod('Cash on Delivery')
      navigate('/')
    } catch (error) {
      toast.error('Failed to place order!')
      console.error(error)
    }
  }

  const handleNextStep1 = () => {
  const { name, email, phone } = personalInfo;
  if (!name.trim() || !email.trim() || !phone.trim()) {
    toast.error("Please fill all personal info fields");
    return;
  }
  setStep(2);
 };


  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg border border-green-400">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-8">Order Form</h2>

      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={personalInfo.name}
            onChange={e => setPersonalInfo({ ...personalInfo, name: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          
          <input
            type="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={e => setPersonalInfo({ ...personalInfo, email: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          
          <input
            type="tel"
            placeholder="Phone Number"
            value={personalInfo.phone}
            onChange={e => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
         
          <button
          onClick={handleNextStep1}
            // onClick={() => setStep(2)}
            className="mt-4 w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-500 transition duration-300 shadow-md hover:shadow-lg">
            Next Step
          </button>
        </div>
      )}

      {/* Step 2: Delivery Info */}
      {step === 2 && (
        <div className="space-y-5">
          <input
            type="text"
            placeholder="Address"
            value={deliveryInfo.address}
            onChange={e => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          
          <input
            type="text"
            placeholder="City"
            value={deliveryInfo.city}
            onChange={e => setDeliveryInfo({ ...deliveryInfo, city: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
         
          <input
            type="text"
            placeholder="Postcode"
            value={deliveryInfo.postcode}
            onChange={e => setDeliveryInfo({ ...deliveryInfo, postcode: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          
          <textarea
            placeholder="Additional Instructions (Optional)"
            value={deliveryInfo.note}
            onChange={e => setDeliveryInfo({ ...deliveryInfo, note: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={3}/>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition">
              Back
            </button>

            <button
              onClick={() => setStep(3)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Next Step
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Order Details */}
      {step === 3 && (
        <div>
          <h3 className="font-semibold text-lg mb-4">Order Items:</h3>
          <div className="bg-green-50 border border-green-300 rounded-lg p-4 max-h-64 overflow-y-auto">

            <ul className="divide-y divide-green-200">
              {cartItems.length === 0 && <p className="text-center text-gray-500">Your cart is empty.</p>}
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between py-2">
                  <span className="font-medium">{item.name} x {item.qty}</span>
                  <span className="font-semibold">৳ {item.qty * item.price}</span>
                </li>
              ))}
            </ul>

            {cartItems.length > 0 && (
              <p className="text-right font-bold mt-4 text-green-700 text-lg">
                Total: Tk {cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)}
              </p>
            )}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(2)}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition">
              Back
            </button>

            <button
              onClick={() => setStep(4)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              disabled={cartItems.length === 0}>
              Next Step
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Payment */}
      {step === 4 && (
        <div className="space-y-6">
          <p className="text-lg font-medium">Select Payment Method:</p>
          <div className="flex flex-col space-y-3">

            {['Cash on Delivery', 'Nagad', 'Bkash'].map(method => (
              <label key={method} className="flex items-center space-x-3 cursor-pointer">
               
               <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={e => setPaymentMethod(e.target.value)}
                  className="form-radio text-green-600"/>
                <span className="text-gray-700">{method}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(3)}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition">
              Back
            </button>
            
            <button
              onClick={handleOrderSubmit}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderSection
