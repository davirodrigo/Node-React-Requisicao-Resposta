/*OLÁ, Se você está vendo isso pelo meu github, prazer, este é o meu primeiro projeto node depois
de um longo tempo após o ultimo... já fiz projetos como este anteriormente mas para voltar a
pratica estarei comentando passo a passo meus feitos e do ambiente do código.

git init = inicia o versionamento de código no meu projeto

git -v = me diz a versão do meu git

git status = me mostra qual o nome da branch (como se fosse o nome DAQUELE versionamento em espe-
cífico) e se há alteração no código que não foi versionada.

git branch = me diz assim como o git status o nome da branch mas no caso ele apenas mostra esse
informação

git branch main -m master = troca o nome de brain pra master ou git branch master -m main [viceversa]

git remote add origin [link do projeto que voce quer associar no github]

git remote -v= verifica se está linkado

git push -u origin main = vamos entender, esse comando sem o -u associa o origin(github) ao
main(git) , quando usamos o -u, gravamos na memória do computador essa associação, ai basta
nas próximas vezes apenas escrever "git push" que ele ja entende

git add . = adiciona todos os arquivos ou git add "nome-do-arquivo" para serem versionados para
a versão que o git status te mostrou que tal arquivo está, assim as alterações no codigo para
aquele arquivo são preparadas para serem alteradas no github

git commit -m "mensagem" = assim como o add, separa os arquivos para serem versionados, o commit
oficialmente os versiona, com uma descrição que o -m nomeia

node -v = verifica se está instalado o node

npm init -y = instala todos os pacotes necessário para trabalhar com node

npm install express = servidor que vai rodar o código
*/

import express from 'express';
import { PrismaClient } from '@prisma/client';
const app = express(); 
const prisma = new PrismaClient( );

app.use(express.json());
 
app.post('/usuarios',async(req, res)=>{
    await prisma.users.create({
        data:{
            nome: req.body.nome,
            idade: req.body.idade,
            email: req.body.email , 
            personalidade: req.body.personalidade
        }
    })
    res.status(201).json(req.body);
})

app.put('/usuarios/:id',async(req, res)=>{
    await prisma.users.update({
        where : {
            id: req.params.id 
        } , 
         data:{
            nome: req.body.nome,
            idade: req.body.idade,
            email: req.body.email , 
            personalidade: req.body.personalidade
        }
    })
    res.status(201).json(req.body);
})

app.delete('/usuarios/:abacate', async(req, res)=>{
    await prisma.users.delete({
        where:{
            id: req.params.abacate
        }
    })
    res.status(200).json({message : "Usuário deletado"});
})


/* nesta rota nós iremos  criar os usuários que nos foram solicitados pelo cliente por meio do
front-end que por sua vez usa o meio da API*/

app.get('/usuarios' , async (req,res)=>{
    let usuarios = [];
        if(req.query){
        usuarios = await prisma.users.findMany({
            where:{
                id: req.query.id , 
                nome: req.query.nome ,
                idade: req.query.idade ,
                email: req.query.email ,
                personalidade: req.query.personalidade
                /*Lembrando que como back-end eu posso colocar INUMEROS filtros e deixar que
                o front decida na query, porque sim... o where relaciona essas informações com
                o operador, oque significa que só são aceitos todos que correspondem a essas
                informações MAS desde que esta informação esteja na query do front, se não estiver
                o where apenas ignora.*/

                /*é interessante até mesmo que eu mencione o ID para caso o front queira buscar UM
                usuário específico, ele irá buscar apenas um filtro de query na url visto que o ID
                é único e não pode ser repetido.*/
            }
        });
    }else{
        usuarios = await prisma.users.findMany();
    }
    res.status(200).json(usuarios);
}) 

/*nesta outra nós iremos retornar para o front os usuários como resposta.*/
app.listen(3000);

/*user: davirodrigopereira password: fCSAIaRjWi6Q38y9*/

/*para alterarmos dados direto pelo codigo fonte node precisamos de uma "ponte" que é uma ORM
no caso vamos utilizar prisma, para instalar vamos usar npm install prisma --save-dev e também
seu client

ou seja
npm instal prisma --save-dev e 
npm install @prisma/client  

npx prisma ( se quiser ver todos os comandos prisma)
npx prisma init = equivalente ao npm init -y pro node so que pro prisma, serve pra baixar depen-
dencias

npx prisma db push = esse comando serve para sincronizar todo conteudo prisma com meu banco mongo
npx prisma studio = abre a interface grafica do prisma de acordo com oque voce colocou no schema
*/

/*agora assim como fizemos em node, iremos iniciar o prisma, com a função inicializadora dele "npx"
npx prisma init*/
/**/