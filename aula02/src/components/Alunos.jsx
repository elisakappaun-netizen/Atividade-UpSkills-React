import { FaUsers } from "react-icons/fa";
export default function Alunos({alunos}) {

    return (
        <>

            <h1 className="titulo-pagina">Saracuruna UpSkills</h1>   
            <div className="titulo-table">
            <FaUsers/>
            <h2>Lista de Alunos</h2>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Matricula</th>
                    <th>Nome</th>
                    <th>Media</th>
                    <th>Pendências</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map(aluno => (
                            <tr key={aluno.matricula}>
                                <td className="corpo-tabela">{aluno.matricula}</td>
                                <td className="corpo-tabela-centro">{aluno.nome}</td>
                                <td className="corpo-tabela">{aluno.media}</td>
                                <td className="corpo-tabela-centro">{aluno.pendencia ? 'Sim' : 'Não'}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}