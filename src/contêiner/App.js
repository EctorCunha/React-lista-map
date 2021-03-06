import ClassComponent from "../components/ClassComponent";
import FunctionComponent from "../components/FunctionComponents";


const list1 = [
  {
    id:'1',
    nome:'Nicolas',
    estaNaLista:true
  },
  {
    id:'2',
    nome:'Pedro',
    estaNaLista:false
  },
  {
    id:'3',
    nome:'Carolina',
    estaNaLista:true
  },
  
]

const list2 = [
  {
    id:'1',
    nome:'Nicolas',
    tarefa:"batata-frita"
  },
  {
    id:'2',
    nome:'Pedro',
    tarefa:"pizza"
  },
  {
    id:'3',
    nome:'Carolina',
    tarefa:"bebidas"
  },
  
]

function App() {
  return (
    <div className="App">
      <h3>Convidados:</h3>

      {
        list1.map((item)=><ClassComponent key={item.id} nome={item.nome} estaNaLista={item.estaNaLista}/>)
      }

    {/*   <ClassComponent nome="Nicolas" estaNaLista={true}/>
      <ClassComponent nome="Pedro" estaNaLista={false}/>
      <ClassComponent nome="Carolina" estaNaLista={true}/> */}

      <h3>Tarefa: </h3>

      {
        list2.map((item)=> <FunctionComponent key={item.id} nome={item.nome} tarefa={item.tarefa}/>)
      }
     {/*  <FunctionComponent nome="Nicolas" tarefa="batata-frita"/>
      <FunctionComponent nome="Pedro" tarefa="pizza"/>
      <FunctionComponent nome="Carolina" tarefa="bebidas"/> */}

    </div>
  );
}

export default App;
