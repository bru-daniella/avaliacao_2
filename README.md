# Atividade Prática: Estudo de Caso com Rotas, Consumo de API e Testes Automatizados

Este estudo de caso é um projeto realizado para demonstrar a aplicação de alguns conceitos e arquiteturas vistas na aula.

## 🛠️ Tecnologias

Este projeto possui duas partes, uma web e uma mobile e está estruturado em:
- Web
    - React
    - Vite
    - Axios
    - Bootstrap 5
    - Vitest
    - Testing Library
- Mobile
    - React Native
    - Expo
    - Expo Router e React Navigation
    - Axios

A API consumida foi fornecida externamente e não faz parte do projeto em si.

## 🛣️ Rotas
### Web
As rotas da aplicação Web seguem o definido no arquivo `routes.ts` existente na raiz da aplicação, e são as seguintes:

* `students`: A Index, que exibe a lista de todos os alunos
* `students/ID_DO_ALUNO`: A aba de detalhes do aluno

### Mobile
As rotas da aplicação Mobile são estruturas através dos arquivos e pastas criadas dentro da pasta app, como determinado pelo `Expo Router`, e são as seguintes:

* `/`: A Index, que exibe a lista de todos os alunos
* `students/ID_DO_ALUNO`: A aba de detalhes do aluno

## ⚙️ Como Executar

```
ATENÇÃO: A execução é realizada de formas distintas e em portas distintas para cada um dos módulos da aplicação
```
### Clone o repositório:

```bash
git clone 
cd estudo-de-caso
```

### Para acessar o módulo Web:

#### Acesse a pasta da aplicação Web:

```bash
cd web
```

#### Instale as dependências via npm:

```bash
npm i
```

#### Execute:

```bash
npm start
```

```
A aplicação estará disponível na porta 5173, tal qual http://localhost:5173
```

#### Para testar o módulo web

##### Execute
```bash
npm test
```

### Para acessar o módulo Mobile:

#### Acesse a pasta da aplicação Mobile:

```bash
cd mobile
```

#### Instale as dependências via npm:

```bash
npm i
```

#### Execute:

```bash
npm start
```

```
A aplicação estará disponível na porta 8081, tal qual http://localhost:8081
```

OBS: Para acessar a aplicação mobile em um dispositivo Android ou iOS, é necessário baixar o aplicativo Expo Go e escanear o QR Code exibido após a execução do `npm start`

# Referências:

* https://www.youtube.com/watch?v=iLZHFDelYpQ

