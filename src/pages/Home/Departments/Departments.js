import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Department from '../Department/Department';

const Departments = () => {

    // state for departments
    const [departments, setDepartments] = useState([]);

    // fetching the department data
    useEffect(() => {
        fetch('/departments.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        // departments field
        <div id="departments" className="mx-5 pt-5">
            <h2 className="text-center">OUR  RESOURCEFUL <span className="border-bottom border-3 border-primary text-primary">DEPARTMENTS</span> </h2>
            <Row xs={1} md={2} className="g-5 mt-2">
                {departments?.map(department => <Department
                    key={department.id}
                    department={department}

                ></Department>)}
            </Row>
        </div>

    );
};

export default Departments;