import Modal from "react-bootstrap/Modal";
import * as React from "react";

export default function Vmodal(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/*<Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>*/}
                <Modal.Body>
                    <form action="#" method="post" encType="text/plain" className="form">
                        <h4>Оставьте свою заявку и мы свяжемся с вами</h4>
                        <div className="form-group">
                            <input type="text" className="form-control" id="tel"
                                   placeholder="Номер телефона/почта" required/>
                        </div>
                        <button type="submit" name="submit" className="btn">Оставить заявку</button>
                    </form>
                </Modal.Body>
                {/*<Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>*/}
            </Modal>
        </>
    )
}
