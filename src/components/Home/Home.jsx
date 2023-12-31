import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {


    const [allCourse, setAllCourse] = useState([]);
    const [selectorCourse, setSelectorCourse] = useState([])
    const [remainingHour, setRemainingHour] = useState(20)
    const [creditHour, setCreditHour] = useState(0)
    const [totalCost, setTotalCost] = useState(0)


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])


    const handleSelectedCourse = (course) => {
        const isExist = selectorCourse.find((item) => item.id == course.id);

        let count = course.credit;
        let total = course.price

        if (isExist) {
            return toast('already enrolled the course')
        } else {
            selectorCourse.forEach((item) => {
                count += item.credit;
            });

            const totalRemaining = 20 - count;
            setTotalCost(totalCost + total)

            if (count > 20) {
                return toast('Not Enough Hour')
            } else {
                setCreditHour(count)
                setRemainingHour(totalRemaining)
                setSelectorCourse([...selectorCourse, course])
            }
        }
    }

    return (
        <div className="container mx-auto flex flex-wrap">
            <div className="grid lg:grid-cols-3 w-[75%] gap-5 md:grid-cols-2 grid-cols-1">
                {
                    allCourse.map((course) => (
                        <div key={course.id} className=" card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={course.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.name}</h2>
                                <p>{course.description}</p>
                                <div className="flex justify-around">
                                    <div><p><span className="text-xl pr-3">$</span>Price: {course.price}</p></div>
                                    <div><p> 📖 Credit: {course.credit} hr</p></div>
                                </div>
                                <div className="card-actions">
                                    <button onClick={() => handleSelectedCourse(course)} className="btn w-full btn-primary">Select</button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="pl-5">
                <Cart selectorCourse={selectorCourse} remainingHour={remainingHour} creditHour={creditHour} totalCost={totalCost}></Cart>
            </div>
        </div>
    );
};

export default Home;