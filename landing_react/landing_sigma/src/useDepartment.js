import { useState, useEffect } from 'react';


const useDepartment = (API) => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setDepartments(data));
    }, []);
    return departments;
};

export default useDepartment;