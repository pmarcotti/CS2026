# Controle de Versão com Git

## Introdução

Git é um sistema de controle de versão essencial para rastrear mudanças em arquivos, reverter para versões anteriores e organizar projetos.

Neste guia, você aprenderá a instalar, configurar e usar os comandos básicos do Git.

## O que é um Sistema de Controle de Versão?

Imagine que você está escrevendo um guia detalhado sobre fotografia digital.

Ao longo do processo, você revisa e reorganiza o conteúdo, remove seções e altera a ordem dos tópicos.

Às vezes, você percebe que uma versão anterior era melhor ou deseja recuperar uma seção excluída.

Criar cópias de segurança manuais torna-se complicado e desorganizado, e você se preocupa em perder o controle das versões e do conteúdo importante.

Um sistema de controle de versão resolve esses problemas, permitindo rastrear mudanças, reverter para versões anteriores e manter o projeto organizado.

## O que é o Git?

Git é um sistema de controle de versão eficiente para projetos de todos os tamanhos.

Ele mantém um histórico completo de todas as mudanças nos arquivos, permitindo voltar a versões anteriores e entender as alterações entre elas.

## Repositório

Para começar a usar o Git, você cria um "repositório", uma pasta que armazena seu projeto e o histórico de revisões.

O repositório pode ser local no seu computador ou sincronizado com serviços remotos como GitHub, GitLab ou Bitbucket.

## Commit

Cada vez que você "salva" as alterações no seu projeto usando o Git, você cria um "commit".

Um commit é como um ponto de verificação seguro, permitindo voltar a ele caso algo dê errado.

O Git armazena todos os commits anteriores, facilitando a recuperação de qualquer versão do projeto.

# Instalação do Git

Antes de usar o Git, você precisa instalá-lo no seu computador.

O processo varia dependendo do sistema operacional.

No Windows, você pode instalar o Git nativamente ou usar o Subsistema do Windows para Linux (WSL).

No Linux e macOS, a instalação é geralmente mais simples.

## Instalação no Windows

**Instalação Nativa:**

1.  Baixe o instalador do Git para Windows no site oficial: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2.  Execute o instalador, mantendo as opções padrão, a menos que você saiba o que está fazendo.
3.  Após a instalação, verifique se o Git foi instalado corretamente abrindo um terminal e executando o comando `git --version`.

## Configuração do Git

Após a instalação, você precisa configurar seu nome de usuário e e-mail para associar seus commits à sua identidade.

Abra o terminal e execute os seguintes comandos, substituindo os valores pelos seus dados:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

## Comandos Básicos do Git

* `git init`: Inicializa um novo repositório Git no diretório atual.
* `git clone <url>`: Clona um repositório remoto para o diretório atual.
* `git add <arquivo>`: Adiciona um arquivo à área de preparação (stage).
* `git commit -m "mensagem"`: Cria um commit com os arquivos na área de preparação.
* `git status`: Exibe o status do repositório, mostrando arquivos modificados, na área de preparação e não rastreados.
* `git log`: Exibe o histórico de commits do repositório.
* `git pull`: Baixa as últimas alterações do repositório remoto para o repositório local.
* `git push`: Envia os commits do repositório local para o repositório remoto.

## Trabalhando com Repositórios Remotos (GitHub)

1.  Crie uma conta no GitHub.
2.  Crie um novo repositório no GitHub.
3.  No seu repositório local, adicione o repositório remoto como um "remote":

```bash
git remote add origin <url_do_repositorio_remoto>
```

4.  Envie seus commits para o repositório remoto:

```bash
git push origin main
```

## Dicas Adicionais

* Use mensagens de commit claras e concisas.
* Faça commits frequentes para manter um histórico detalhado do projeto.
* Use branches para trabalhar em novas funcionalidades ou correções de bugs sem afetar a versão principal do projeto.
* Explore os recursos do GitHub para colaboração, como pull requests e issues.

Lembre-se que essa é apenas uma introdução ao Git e GitHub. 
Existem muitos outros comandos e recursos para explorar.

# Após a Instalação do Git

Após a instalação, abra o terminal e digite `git --version`. 
Se a instalação foi bem-sucedida, a versão do Git será exibida.

## O que é um Terminal?

Um terminal é uma interface de linha de comando que permite interagir com o sistema operacional ou software através de comandos de texto.

É uma ferramenta poderosa para programadores e profissionais de TI, permitindo realizar tarefas como gerenciar arquivos, executar programas e acessar bancos de dados.

Cada sistema operacional possui seu próprio tipo de terminal: Prompt de Comando ou PowerShell no Windows, e Terminal no macOS e Linux.

O terminal oferece maior controle e flexibilidade em comparação com interfaces gráficas.

## Configuração Inicial do Git

A configuração inicial do Git é crucial para garantir que seu trabalho seja rastreado e gerenciado adequadamente.

## Nome e E-mail

O Git registra seu nome e e-mail em cada commit. Configure essas informações com os seguintes comandos:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

Substitua os valores entre aspas pelos seus dados reais.

## Editor de Texto

O Git usa um editor de texto para certas operações. 
Configure o editor padrão com o comando:

```bash
git config --global core.editor <nome_do_editor>
```

Instale o `nano` se necessário:

### Outras Configurações

O Git oferece diversas opções de configuração para personalizar sua experiência:

* **Alias:** Crie atalhos para comandos longos.
* **Color UI:** Ative ou desative cores na interface do Git.
* **Merge Tool:** Defina a ferramenta padrão para resolver conflitos de mesclagem.
* **Push Default:** Configure o comportamento padrão do `git push`.
* **Pull Rebase:** Use rebase em vez de merge ao fazer `git pull`.
* **FileModes:** Defina se o Git deve considerar mudanças nas permissões de arquivos.
* **Ignore Case:** Configure o tratamento de nomes de arquivo em sistemas que não diferenciam maiúsculas e minúsculas.
* **AutoCrlf:** Converta automaticamente terminações de linha entre LF e CRLF.

# Checando as Configurações

Verifique as configurações salvas com o comando:

```bash
git config --list
```

Para consultar o valor de uma configuração específica, use:

```bash
git config <nome_da_configuração>
```

### Configurações Globais e Locais

* `git config --global`: Define configurações globais para todos os projetos.
* `git config` (sem `--global`): Define configurações locais para um projeto específico, sobrescrevendo as configurações globais.

# Criando um Projeto e Usando o Git

Vamos criar um projeto de guia de fotografia digital e 
usar o Git para fazer checkpoints.

1.  Crie uma pasta para o projeto: `mkdir guia-fotografia`
2.  Acesse a pasta: `cd guia-fotografia`

## Git init

Dentro da pasta do projeto, inicialize o repositório Git com o comando `git init`.

Isso cria uma pasta oculta chamada `.git`, onde o Git armazena todos os commits (backups).

Para visualizar a pasta oculta pelo terminal, use `ls -a`:

```bash
ls -a
```

O comando lista todos os arquivos e pastas, incluindo os ocultos (opção `-a`). Os símbolos `.` e `..` representam a pasta atual e a pasta acima, respectivamente.

No Explorador de Arquivos do Windows, ative a opção "Itens ocultos" para ver a pasta `.git`.

### O que é a pasta .git?

A pasta `.git` armazena todas as informações de backup do projeto. **Nunca** modifique essa pasta, pois isso pode corromper o histórico do Git.

O conteúdo da pasta `.git` é complexo e difícil de entender para humanos, pois o Git armazena informações de forma otimizada para máquinas.

Comandos como `git add` e `git commit` alteram o conteúdo dessa pasta automaticamente.

## Working Tree

Para iniciar o guia de fotografia, crie um arquivo `guia.txt`. Isso pode ser feito pelo terminal (`touch guia.txt` e `nano guia.txt`) ou pela interface gráfica.

O arquivo `guia.txt` é salvo na pasta do projeto, que representa a **Working Tree** (árvore de trabalho).

## Git status

Após criar o arquivo `guia.txt`, o Git detecta sua existência. Use `git status` para verificar o que o Git está rastreando:

```bash
git status
```

A mensagem "No commits yet" indica que nenhum commit foi criado. O arquivo `guia.txt` aparece em vermelho em "Untracked files", indicando que o Git não está rastreando o arquivo.

## Git add

Para rastrear o arquivo, use `git add <nome_do_arquivo>`:

```bash
git add guia.txt
```

O `git status` agora mostra `guia.txt` em verde em "Changes to be committed", indicando que o arquivo foi adicionado à área de preparação (stage).

## Index / Staging Area

Após adicionar a seção "Modos de Disparo" ao `guia.txt`, o `git status` mostra o arquivo em verde ("Changes to be committed") e em vermelho ("Changes not staged for commit").

Para entender isso, imagine o seguinte:

* **Working Tree:** Rascunho privado do livro.
* **Index / Staging Area:** Cópia impressa do livro para revisão.
* **Commit:** Livro publicado pela editora.

O `git add` copia o arquivo do Working Tree para o Index. O `git status` mostra as diferenças entre o Index e o Working Tree.

* **Verde:** Arquivo no Index (preparado para commit).
* **Vermelho:** Arquivo modificado no Working Tree, mas não no Index.

Para atualizar o Index, use `git add guia.txt` novamente.

## Git commit

Para criar um backup definitivo do projeto, use `git commit`. Ele salva uma cópia do Index (não do Working Tree).

Ao executar `git commit`, o Git abre o editor de texto configurado (nano). Digite um título para o commit (ex: "Initial commit"), salve e saia.

Ou use `git commit -m "<mensagem_do_commit>"` para criar o commit diretamente:

```bash
git commit -m "Initial commit"
```

O `git status` agora mostra "nothing to commit, working tree clean", indicando que o Index e o Working Tree estão sincronizados com o último commit.

O commit é como salvar um jogo de videogame, permitindo voltar a versões anteriores.

## Boas Práticas para Mensagens de Commit

* **Clareza e Concisão:** Mensagens informativas e diretas.
* **Inglês:** Facilita a colaboração global.
* **Tempo Presente:** Use verbos no presente imperativo (ex: "Add", "Update").
* **Resumo na Primeira Linha:** Menos de 50 caracteres.
* **Separação com Linhas em Branco:** Melhora a legibilidade.
* **Contexto e Razão:** Explique o porquê das mudanças.
* **Evite Mensagens Genéricas:** Seja específico.
* **Revisão:** Verifique erros e aderência às diretrizes.
* **Consistência:** Siga as normas da equipe.

## Fazendo mais commits

Após o primeiro commit, modifique os arquivos e adicione as mudanças ao Index com `git add`.

Use `git commit -m "<mensagem_do_commit>"` para criar novos commits.

O Git guarda todos os commits passados, permitindo voltar a qualquer versão do projeto.

Lembre-se: o processo de trabalho com Git é um ciclo contínuo de edição, adição e commit. Cada commit é um marco importante para o seu projeto.

Com certeza! Aqui está a versão revisada e aprimorada do último trecho da sua apostila de Git:

# Git log

Para visualizar os commits já realizados, utilize o comando `git log`:

```bash
git log
```

O `git log` exibe todos os commits, do mais recente ao mais antigo, com as seguintes informações:

* **Autor:** Nome e e-mail (configurados inicialmente).
* **Data:** Data e hora do commit.
* **Mensagem de commit:** Descrição do commit.
* **Commit hash (checksum):** Identificador único do commit (ex: `503517...`).

As palavras `HEAD` e `master` indicam o último commit (commit mais recente).

O `git log` possui diversas opções para personalizar a exibição dos commits. Consulte o manual do Git (`git log --help`) para mais detalhes.

Exemplos de opções:

* `git log --oneline`: Exibe apenas o hash e o título do commit.
* `git log --stat`: Exibe os arquivos alterados em cada commit.

# Git não rastreia pastas

O Git rastreia apenas arquivos, não pastas. Pastas vazias não aparecem no `git status`.

Ao adicionar um arquivo dentro de uma pasta, o `git status` passa a rastrear o arquivo.

# Deletando um arquivo

Ao deletar um arquivo rastreado do Working Tree (ex: `rm contato.txt`), o `git status` indica a deleção:

```bash
git status
```

Para registrar a deleção no próximo commit, atualize o Index com `git add contato.txt`.

Em seguida, execute `git commit -m "Remove contact"` para criar um commit sem o arquivo deletado.

# Renomeando um arquivo

O Git detecta renomeações de arquivos de forma heurística, comparando o conteúdo dos arquivos antes e depois da renomeação.

Ao renomear um arquivo (ex: `contato.txt` para `contatos.txt`), o `git status` inicialmente mostra a deleção do arquivo antigo e a criação do novo.

Após adicionar as mudanças com `git add contato.txt contatos.txt`, o Git reconhece a renomeação.

Para evitar problemas, renomeie e faça o commit em seguida, sem modificar o conteúdo do arquivo.

# Movendo um arquivo

Mover um arquivo funciona de forma semelhante a renomear. O Git compara os conteúdos dos arquivos para detectar a movimentação.

# Ignorando arquivos

Para ignorar arquivos específicos, crie um arquivo chamado `.gitignore` e liste os nomes dos arquivos a serem ignorados, um por linha.

O `.gitignore` suporta padrões para ignorar múltiplos arquivos ou pastas.

Exemplos:

* `anotacoes.txt`: Ignora o arquivo `anotacoes.txt`.
* `anotacoes/`: Ignora todos os arquivos dentro da pasta `anotacoes`.
* `*.txt`: Ignora todos os arquivos com a extensão `.txt`.
* `anotacoes/*.txt`: Ignora arquivos `.txt` dentro da pasta `anotacoes`, mas não em subpastas.
* `anotacoes/**/*.txt`: Ignora arquivos `.txt` dentro da pasta `anotacoes` e em subpastas.

Consulte a documentação oficial do Git para mais detalhes: [https://git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore)

# Retirando mudanças do Index

Para remover mudanças do Index (stage), utilize o comando `git reset HEAD <arquivo>`:

```bash
git reset HEAD guia.txt
```

O `git reset` restaura o arquivo no Index para coincidir com o último commit (HEAD).

O comando `git reset` possui outras variações para diferentes funcionalidades.

# Vendo o conteúdo das mudanças

O comando `git diff` compara duas versões de um arquivo e exibe as diferenças.

Exemplos:

* `git diff HEAD -- teste.txt`: Compara o último commit com o Working Tree.
* `git diff --cached -- teste.txt`: Compara o Index com o último commit.
* `git diff teste.txt`: Compara o Working Tree com o Index.
* `git diff <commit> <commit> -- teste.txt`: Compara dois commits específicos.
* `git diff <commit> -- teste.txt`: Compara o Working Tree com um commit específico.

Consulte a documentação oficial do Git para mais detalhes: [https://git-scm.com/docs/git-diff](https://git-scm.com/docs/git-diff)

# Remendando o último commit

Para adicionar mudanças a um commit já realizado, utilize o comando `git commit --amend`:

```bash
git commit --amend
```

O `--amend` refaz o último commit, incluindo as novas mudanças.

O hash do commit é alterado após o `--amend`.

O `--amend` só funciona para o último commit.

# Tags

Tags são rótulos para commits, geralmente usados para marcar versões do software (ex: `v1.0`, `v2.0`).

Comandos:

* `git tag <nome_da_tag>`: Cria uma tag para o último commit.
* `git tag <nome_da_tag> <hash_do_commit>`: Cria uma tag para um commit específico.
* `git tag`: Lista todas as tags.
* `git tag -d <nome_da_tag>`: Deleta uma tag.

Existem dois tipos de tags: lightweight (simples) e annotated (com mensagem e assinatura).

Consulte a documentação oficial do Git para mais detalhes: [https://git-scm.com/book/en/v2/Git-Basics-Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

# Alias

Alias são atalhos para comandos Git.

Para criar um alias, utilize o comando `git config --global alias.<nome_do_alias> "<comando_real>"`:

```bash
git config --global alias.l "log --oneline"
```

O alias `l` agora executa o comando `git log --oneline`.

Para remover um alias, utilize o comando `git config --global --unset alias.<nome_do_alias>`:

```bash
git config --global --unset alias.l
```
