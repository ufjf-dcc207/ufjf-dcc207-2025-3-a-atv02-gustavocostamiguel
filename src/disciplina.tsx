
import "./Disciplina.css";
type DisciplinaProps = {
    codigo:string;
    nome:string;
};
function Disciplina({codigo,nome}:DisciplinaProps){
 (
<div className ="disciplina">
 <div>{props.codigo}</div>
 <div>{props.nome}</div>
</div>
);
}
export default Disciplina;