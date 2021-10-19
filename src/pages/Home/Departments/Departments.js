import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Department from '../Department/Department';

const Departments = () => {

    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch('./departments.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        <div id="departments" className="mx-5">
            <h2>Departments</h2>
            <Row xs={1} md={3} className="g-4 mt-2">
                {departments?.map(department => <Department
                    key={department.id}
                    department={department}

                ></Department>)}
            </Row>
        </div>

    );
};

export default Departments;