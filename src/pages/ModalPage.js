import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false)
    }
    const actionBar = <div>
        <Button variations="primary" onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal oclose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div className='relative'>
            <Button onClick={handleClick} variations="primary">Open Modal</Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus erat id turpis accumsan maximus. Donec diam tortor, bibendum a tortor a, ornare ultricies nulla. Vestibulum bibendum cursus neque, at pharetra dolor aliquet a. Mauris ultrices, odio in elementum eleifend, massa nisi rhoncus purus, id feugiat dolor enim ut tellus. Fusce sed tortor eu lacus feugiat dignissim sed nec ipsum. Duis ut tristique urna, nec vulputate metus. Phasellus ultrices, mauris non fringilla malesuada, lorem tellus aliquet nulla, a fringilla turpis sapien eget lorem. Ut pretium elementum turpis, non lobortis justo ultricies vel. Fusce lobortis, sapien nec laoreet vestibulum, tortor velit convallis risus, ut vestibulum ligula quam sed dui.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus erat id turpis accumsan maximus. Donec diam tortor, bibendum a tortor a, ornare ultricies nulla. Vestibulum bibendum cursus neque, at pharetra dolor aliquet a. Mauris ultrices, odio in elementum eleifend, massa nisi rhoncus purus, id feugiat dolor enim ut tellus. Fusce sed tortor eu lacus feugiat dignissim sed nec ipsum. Duis ut tristique urna, nec vulputate metus. Phasellus ultrices, mauris non fringilla malesuada, lorem tellus aliquet nulla, a fringilla turpis sapien eget lorem. Ut pretium elementum turpis, non lobortis justo ultricies vel. Fusce lobortis, sapien nec laoreet vestibulum, tortor velit convallis risus, ut vestibulum ligula quam sed dui.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus erat id turpis accumsan maximus. Donec diam tortor, bibendum a tortor a, ornare ultricies nulla. Vestibulum bibendum cursus neque, at pharetra dolor aliquet a. Mauris ultrices, odio in elementum eleifend, massa nisi rhoncus purus, id feugiat dolor enim ut tellus. Fusce sed tortor eu lacus feugiat dignissim sed nec ipsum. Duis ut tristique urna, nec vulputate metus. Phasellus ultrices, mauris non fringilla malesuada, lorem tellus aliquet nulla, a fringilla turpis sapien eget lorem. Ut pretium elementum turpis, non lobortis justo ultricies vel. Fusce lobortis, sapien nec laoreet vestibulum, tortor velit convallis risus, ut vestibulum ligula quam sed dui.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus erat id turpis accumsan maximus. Donec diam tortor, bibendum a tortor a, ornare ultricies nulla. Vestibulum bibendum cursus neque, at pharetra dolor aliquet a. Mauris ultrices, odio in elementum eleifend, massa nisi rhoncus purus, id feugiat dolor enim ut tellus. Fusce sed tortor eu lacus feugiat dignissim sed nec ipsum. Duis ut tristique urna, nec vulputate metus. Phasellus ultrices, mauris non fringilla malesuada, lorem tellus aliquet nulla, a fringilla turpis sapien eget lorem. Ut pretium elementum turpis, non lobortis justo ultricies vel. Fusce lobortis, sapien nec laoreet vestibulum, tortor velit convallis risus, ut vestibulum ligula quam sed dui.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus erat id turpis accumsan maximus. Donec diam tortor, bibendum a tortor a, ornare ultricies nulla. Vestibulum bibendum cursus neque, at pharetra dolor aliquet a. Mauris ultrices, odio in elementum eleifend, massa nisi rhoncus purus, id feugiat dolor enim ut tellus. Fusce sed tortor eu lacus feugiat dignissim sed nec ipsum. Duis ut tristique urna, nec vulputate metus. Phasellus ultrices, mauris non fringilla malesuada, lorem tellus aliquet nulla, a fringilla turpis sapien eget lorem. Ut pretium elementum turpis, non lobortis justo ultricies vel. Fusce lobortis, sapien nec laoreet vestibulum, tortor velit convallis risus, ut vestibulum ligula quam sed dui.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus erat id turpis accumsan maximus. Donec diam tortor, bibendum a tortor a, ornare ultricies nulla. Vestibulum bibendum cursus neque, at pharetra dolor aliquet a. Mauris ultrices, odio in elementum eleifend, massa nisi rhoncus purus, id feugiat dolor enim ut tellus. Fusce sed tortor eu lacus feugiat dignissim sed nec ipsum. Duis ut tristique urna, nec vulputate metus. Phasellus ultrices, mauris non fringilla malesuada, lorem tellus aliquet nulla, a fringilla turpis sapien eget lorem. Ut pretium elementum turpis, non lobortis justo ultricies vel. Fusce lobortis, sapien nec laoreet vestibulum, tortor velit convallis risus, ut vestibulum ligula quam sed dui.</p>
        </div>
    )
}

export default ModalPage