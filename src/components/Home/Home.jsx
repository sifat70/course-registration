import { useEffect, useState } from "react";

const Home = () => {


    const [allCourse, setAllCourse] = useState([]);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])

    return (
        <div className="flex">
            <div className="grid grid-cols-3">
                {
                    allCourse.map((course) => (
                        <div key={course.id} className=" card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={course.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.name}</h2>
                                <p>{course.description}</p>
                                <div className="flex justify-around">
                                    <div><p>Price: {course.price}</p></div>
                                    <div><p>Credit: {course.credit} hr</p></div>
                                </div>
                                <div className="card-actions">
                                    <button className="btn w-full btn-primary">Select</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div>
                <h1>Hello World</h1>
            </div>
        </div>
    );
};

export default Home;