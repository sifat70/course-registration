/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({ selectorCourse, remainingHour, creditHour }) => {
    console.log(selectorCourse);
    return (
        <div>
            <h1 className="mt-10 pb-3 text-xl text-purple-700">Credit Hour Remaining <span>{remainingHour}</span> hr</h1>
            <hr />
            <p className="font-bold text-2xl mt-3">Course Name</p>
            <div className="mt-2">
                {
                    selectorCourse.map((course) => (<li>{course.name}</li>))
                }
            </div>
            <p>Total Credit Hour : {creditHour}</p>
        </div>
    );
};

export default Cart;