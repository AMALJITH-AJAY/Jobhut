import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userDetailSilce';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';

function Read() {

    const dispatch = useDispatch();

    const [id, setId] = useState()

    const [radioData, setRadioData] = useState("");

    const [showPopup, setShowPopup] = useState(false)

    const { users, loading, searchData } = useSelector((state) => state.app)

    useEffect(() => {
        dispatch(showUser());

    }, []);
    if (loading) {
        return <h2>Loading</h2>
    }
    return (


        <div>
            {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
            <h2 className='text-center'>All Data</h2>
            <input
                class="form-check-input"
                name="gender"
                checked={radioData === ""}
                type="radio"
                onChange={(e) => setRadioData("")}
            />
            <label class="form-check-label">All</label>
            <input
                class="form-check-input"
                name="gender"
                checked={radioData === "Male"}
                value="Male"
                type="radio"
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label">Male</label>
            <input
                class="form-check-input"
                name="gender"
                value="Female"
                checked={radioData === "Female"}
                type="radio"
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label">Female</label>

            <div>
                {users && users
                    .filter((ele) => {
                        if (searchData.length === 0) {
                            return ele;
                        } else {
                            return ele.name
                                .toLowerCase()
                                .includes(searchData.toLowerCase());
                        }
                    })
                    .filter((ele) => {
                        if (radioData === "Male") {
                            return ele.gender === radioData;
                        } else if (radioData === "Female") {
                            return ele.gender === radioData;
                        } else return ele;
                    })





                    .map((ele) => (

                        <div key={ele.id} className="card w-50 mx-auto my-2">
                            <div className="card-body ">
                                <h5 className="card-title text-center">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                                <p className="card-text">
                                    {ele.gender}

                                </p>
                                <a href="#" className="card-link " style={{ textDecoration: "none" }} onClick={() => [setId(ele.id), setShowPopup(true)]}>View</a>
                                <Link to={`/edit/${ele.id}`} className="card-link"  >
                                    Edit
                                </Link>
                                <Link
                                    onClick={() => dispatch(deleteUser(ele.id))}
                                    className="card-link"
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>

                    ))}


            </div>
        </div>
    )
}

export default Read