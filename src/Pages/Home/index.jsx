import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash-slash-alt-svgrepo-com.svg'
import api from '../../services/api'

function Home(){

  const [users , setUsers] = useState([]);

  /*pela arquitetura do react que apenas nos permite tratar dados por métodos e estados, usamos
  desta forma, onde users é o nome da minha variavel, setUsers: o alodor de informações para tal
  e esse conjunto recebe o useState que é função que arquiteta essa estrutura.*/


  const email = useRef();
  const nome = useRef(); 
  const idade = useRef();

  /*criamos constantes para chaamr o hook ref apenas para informar que algum input será associado
  á tais, e especificamos qual constante vai para cada input no formulário e assim, eles
  estão associados, no dado momento que aloco informações no input ele fica salvo no value,
  e minha função createUsers pode jogar para o db*/

  async function getUsers(){
    const generalInfoFromApi = await api.get('/usuarios');
    setUsers(generalInfoFromApi.data);
    console.log(users);
  }

  /*note o async await pois o controle de tempo em requisição de dados é essencial.
  comentários de "api" estará no arquivo ../../services/api.
  o uso do setUsers é imprescindivel visto a arquitetura do react que apenas nos permite trata-
  mento de dados por estados, e em generalInfoFromApi especificamos ".data" pois a requisão get
  retorna muito mais do que apenas os dados, importante lembrar deste fato, mas de modo geral
  esse trecho de código lista todos os usuários que estão no db e o setUsers() joga essa informa-
  ção para o estado do componente*/

  async function deleteUsers(id){
    await api.delete(`usuarios/${id}`);
    getUsers();
  }

  /*a lógica da requisição é a mesma do api.get, mas agora há uma diferença... a url variável
  se faz necessário o uso da template string e especificarmos qual id queremos chamar na hora de 
  chamar a função, veja o comentário do forms para essa função no botão de deletar... note também
  que eu chamei a função getUsers() isso porque agora ele vai fazer a requisição, com o db já
  sem o usuario que eu deletei, usamos assim quando queremos resposta instantânea após uma função
  e usamos useEffect quando queremos resposta na ação de abrir tela ou refresh*/

  async function createUsers(){
    await api.post('/usuarios',{
      nome: nome.current.value, 
      idade: idade.current.value,
      email: email.current.value
      });
      getUsers();
  }

  /*getUsers() sendo chamado... segue mesma lógica... quanto ao api.post, vamos falar sobre o se-
  gundo parâmetro, em node você ira perceber que eu mando informações pelo body, eis - o aqui,
  afinal minhas consts associadas ao input está dentro do form que é o body do html, entende? 
  o que temos a esquerda dos dois pontos é são os dados específicados no schema do node, e á direi-
  ta são as constantes que criamos para linkar com os input, pegamos o valor que fica após eu di-
  gitar no input, e na requisição, o back faz o resto...*/

  useEffect(()=>{
    getUsers(); 
  },[])
  /*Note que a função getUsers se encontra como resposta desta função, por quê? O useEffect é um
  hook que faz com que todas as funções retornadas atualizem seus dados sempre que a pagina for
  aberta ou dermos refresh, isso é importante quando eu quero expor todos ou alguns usuários
  constantemente*/

  return(
    <div className='container'>
      <div className='FormLabel'>
      <form className='Formulario'> 
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Digite seu nome' type="text" name='nome' ref={nome}/>
        <input placeholder='Digite sua idade' type='number' name='idade' ref={idade} />
        <input placeholder='Digite seu email' type="email" name='email' ref={email} />
        <button onClick={createUsers} className='submitButton' type='button'>Cadastrar</button>
      </form>
      </div>
      {users.map((user)=>(
      <div key={user.id} className='GeneralScope'>
        <div className='InsertData'>
          <p>nome:{user.nome}</p>
          <p>idade:{user.idade}</p>
          <p>email:{user.email}</p>
        </div>
        <div className='SignedUpUsers'>
        <button onClick={()=>deleteUsers(user.id)} className='DeleteButton'> <img className='img' src={Trash} alt="" /> </button>
        </div>
      </div>
      ))}  
    </div>
  )
}

/*NOTE um fato interessante do React, você pode colocar HTML dentro do script com um return(<HTML>)
e ainda mais, podemos retornar novamente código react dentro do HTML se separarmos
as linguagens com  -> {}... ex: <HTML>{função react}{variavel react}{objeto react}</HTML>*/

/*e por último duas coisas interessantes a mencionar em React é que podemos usar o map dentro de
{} e o retorno como () para escrever código HTML e ele repetirá o código HTML para cada index de
 users, e então podemos usar denovo {} para mencionar cada dado de users que pegamos da requisição
 feita mais acima, para instrui - lo cada dado dentro do HTML, a outra coisa é que se chamarmos
 uma função pelas chaves não podemos colocar (),a não ser que seja com parametros, ai fazemos
{()=> nomeDaFunção(parâmetro)}*/

/*É ISSO RECRUTADORES! O CÓDIGO ESTÁ COMENTADO MAIS EM FUNÇÃO DA CONFIABILIDADE DA AUTORIA
MAS NÃO É MINHA PRIMEIRA VEZ USANDO REACT, JÁ HAVIA APRENDIDO OS CONCEITOS, MAS DE FATO É MEU
PRIMEIRO PROJETO, FIQUE ATENTO AO GITHUB ESTAREI ATUALIZANDO*/

export default Home
