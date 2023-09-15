/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './Cart.css'
const Cart = ({ selectorCourse, remainingHour, creditHour, totalCost}) => {
    console.log(selectorCourse);
    return (
        <div>
            <h1 className="mt-10 pb-3 text-xl text-purple-700 font-extrabold">Credit Hour Remaining <span>{remainingHour}</span> hr</h1>
            <hr />
            <p className="font-bold text-2xl mt-3">Course Name</p>
            <div className="hello mt-2 pb-4">
                {
                    selectorCourse.map((course) => (<li className='text-lime-600 font-extrabold'>{course.name}</li>))
                }
            </div>
            <hr />
            <p className="mt-5 pb-5 font-bold">Total Credit Hour : {creditHour}</p>
            <hr />
            <p className='font-bold'>Total Price: {totalCost} USD</p>
        </div>
    );
};

export default Cart;