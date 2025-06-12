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
node -v  aaaa*/
let numero = 1;
