import React from 'react'
import { Modal } from 'react-bootstrap'

const LocPick = (props) => {
    return (
        <div>
            <Modal show={props.stat} onHide={props.handleClose}>
                

            </Modal>
        </div>
    )
}

export default LocPick
