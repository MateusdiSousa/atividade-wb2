import { Component, ReactNode } from "react";

export class ModalCliente extends Component<{closeModal : Function}> {

    render() {
        return (
            <>
                <div>
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="" onClick={() => this.props.closeModal()} className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </>
        )
    }
}