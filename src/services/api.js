import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3000'
});

/*O axios é uma ferramenta que cria uma conexão com o meu servidor, percebe - se a porta sendo
escutada que é a 3000, é a descrita no arquivo server.js na pasta node, ao criar essa base
podemos acessar métodos do axios para mandar requisições, uma vez "linkado"*/

export default api; 