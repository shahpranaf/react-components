import React, { useState } from 'react'
import Slider from '../components/Slider';

function SliderPage() {
    const [age, setAge] = useState(50);

    const handleAgeChange = (newAge) => {
        setAge(newAge);
    };

    return <Slider onChange={handleAgeChange} value={age} />
}

export default SliderPage