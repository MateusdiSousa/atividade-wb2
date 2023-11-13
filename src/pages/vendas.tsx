import { Component } from 'react'
import SideBar from '../components/sidebar/sidebar'
import { ModalCliente } from '../components/sidebar/modalCliente';

interface state {
    modalServico: boolean;
    modalProduto: boolean;
    modalCliente: boolean;
}

export class Vendas extends Component<{}, state> {

    constructor(props) {
        super(props);
        this.state = {
            modalServico: false,
            modalProduto: false,
            modalCliente: false,
        }
    }

    toggleModalCliente(){
        this.setState({modalCliente : !this.state.modalCliente})
    }

    toggleModalServico(){
        this.setState({modalCliente : !this.state.modalServico})
    }

    toggleModalProduto(){
        this.setState({modalCliente : !this.state.modalProduto})
    }

    render() {
        return (
            <>
                <SideBar />
                <div className='container'>
                    <h4>Processo de Venda</h4>
                    <ul className='options'>
                        <li><a className="waves-effect waves-light btn-whitenp black-text" onClick={() => this.toggleModalCliente()}>Cliente</a></li>
                        <li><a className="waves-effect waves-light btn-whitenp black-text"  onClick={() => this.toggleModalServico()}>Adicionar Serviço</a></li>
                        <li><a className="waves-effect waves-light btn-whitenp black-text"  onClick={() => this.toggleModalProduto()}>Adicionar Produto</a></li>
                    </ul>

                    {this.state.modalCliente && (
                        <>
                            <ModalCliente closeModal={ModalCliente}/>
                        </>
                    )}

                    {this.state.modalProduto && (
                        <>
                            <h1>TESTE Produto</h1>
                        </>
                    )}

                    {this.state.modalServico && (
                        <>
                            <h1>TESTE Servico</h1>
                        </>
                    )}

                    <div className='content-venda'>
                        <h5>Produtos/Serviços</h5>

                        <table className='responsive-table striped'>
                            <thead>
                                <tr>
                                    <th>Nome do Produto/Serviço</th>
                                    <th>Quantidade</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Massagem</td>
                                    <td>1</td>
                                    <td>$90.87</td>
                                </tr>
                                <tr>
                                    <td>Creme de Barbear</td>
                                    <td>4</td>
                                    <td>$15.45</td>
                                </tr>
                                <tr>
                                    <td>Shampoo</td>
                                    <td>1</td>
                                    <td>$8.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='finalizar'>
                        <div className='preco-total'>
                            <h5>Preço Total: xxxx,xx</h5>
                        </div>

                        <button className='waves-effect waves-light btn yellow lighten-1 '>Finalizar Venda</button>
                    </div>

                </div>
            </>
        )
    }
}