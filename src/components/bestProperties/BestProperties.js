import './BestProperties.scss';
import data from '../../data/data';
import BestPropertyImg from './BestPropertyImg';
import { useState } from 'react';

const BestProperties = () => {
    const [images, setImages] = useState(data);
    const [activeButton, setActiveButton] = useState(null);

    let categories = new Set(data.map((cat) => cat.category));
    let newCategories = ['all', ...categories];

    const filterHandler = (categoryName) => {
        setActiveButton(categoryName);
        if (categoryName === 'all') {
            return setImages(data);
        }
        const newFilteredImages = data.filter(item => item.category === categoryName)
        setImages(newFilteredImages)
    }

    return (
        <div className='best-properties'>
            <h2>Find Best Rated Properties</h2>
            <div>
                {
                    newCategories.map((category, i) => {
                        return (
                            <button className={activeButton === category ? 'active' : ''} key={i} onClick={() => filterHandler(category)}>{category}</button>
                        )
                    })
                }
            </div>
            <div className='container'>
                {
                    images.map((property, i) => {
                        return (
                            <BestPropertyImg image={property.image} key={i} category={property.category} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default BestProperties;