import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, category_name} = category;
    return (
        <div className='flex text-[#098b99] mt-4 scale-70 hover:scale-110 ease-out duration-500'>
            <p>{id}.</p>
            <Link to={`/courses/${category_name}`}>{category_name}</Link>
        </div>
    );
};

export default Category;