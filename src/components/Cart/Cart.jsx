/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({ selectorCourse }) => {
    console.log(selectorCourse);
    return (
        <div>
            <h1 className="mt-10 pb-3 text-xl text-purple-700">Credit Hour Remaining <span>20</span> hr</h1>
            <hr />
            <p className="font-bold text-2xl mt-3">Course Name</p>
            <div className="mt-2">
                {
                    selectorCourse.map((course) => (<li>{course.name}</li>))
                }
            </div>
        </div>
    );
};

export default Cart;