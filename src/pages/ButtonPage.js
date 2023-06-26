import React from 'react'
import Button from '../components/Button'
import { GoBell, GoDatabase, GoCloudDownload } from 'react-icons/go';


function ButtonPage() {
    return (
        <div className='buttonComponent'>
            <div>
                <Button className="mb-2" variations="primary" rounded onClick={() => console.log('click')}>
                    <GoBell />
                    Ring
                </Button>
            </div>
            <div>
                <Button variations="secondary">
                    <GoDatabase />
                    Database
                </Button>
            </div>
            <div><Button variations="warning"><GoCloudDownload />Download</Button></div>
            <div><Button variations="danger">submit</Button></div>
            <div><Button variations="success">submit</Button></div>
            <div><Button variations="success" outline>submit</Button></div>
        </div>
    )
}

export default ButtonPage