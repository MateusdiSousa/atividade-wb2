import { Component, ReactNode } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";

export class TelaProduto extends Component {
    render() {
        return (
            <>
                <SideBar />

                <main>
                    <h1>Produtos</h1>

                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Descrição</th>
                                    <th>Preço</th>
                                    <th>Opções</th>
                                    <th><Link to={'/produtos/cadastro'} className=" btn-small transparent black-text">Adicionar Produto</Link>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Depilaçao</td>
                                    <td>Depilação muito boa</td>
                                    <td>$80.25</td>
                                    <td><button>Editar</button><button>Deletar</button></td>
                                </tr>

                                <tr>
                                    <td>Manicure</td>
                                    <td>Manicure muito boa</td>
                                    <td>$80.25</td>
                                    <td><button>Editar</button><button>Deletar</button></td>
                                </tr>

                                <tr>
                                    <td>Limpeza de pele</td>
                                    <td>Limpeza muito bom</td>
                                    <td>$80.25</td>
                                    <td><button>Editar</button><button>Deletar</button></td>
                                </tr>

                                <tr>
                                    <td>Pintura de Cabelo</td>
                                    <td>Uma tinta muito boa</td>
                                    <td>$80.25</td>
                                    <td><button>Editar</button><button>Deletar</button></td>
                                </tr>
                            </tbody>
                        </table>

                </main>
            </>
        )
    }
}