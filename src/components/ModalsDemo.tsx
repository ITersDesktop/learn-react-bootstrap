import {Button, Modal} from "react-bootstrap";

const ModalsDemo = () => {
    return (
        <div className="p-1">
        <div
            className="modal show"
            style={{display: 'block', position: 'initial'}}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
        <div className="p-1">
            <h2>Something goes here</h2>
        </div>
        </div>);
}

export default ModalsDemo