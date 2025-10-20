# AgendamentosApp

Sistema web para gerenciamento de agendamentos, desenvolvido em Angular. O objetivo é permitir o cadastro, visualização e gerenciamento de agendamentos de forma simples e eficiente.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Sobre o Projeto

O **AgendamentosApp** é uma aplicação web construída com [Angular](https://angular.io/) para facilitar o controle de agendamentos. O projeto está em constante evolução, recebendo novas funcionalidades e melhorias técnicas.

## Funcionalidades

- Listagem de agendamentos
- Cadastro de novos agendamentos *(em desenvolvimento)*
- Edição e exclusão de agendamentos *(em breve)*
- Interface responsiva

> **Nota:** Novas funcionalidades serão automaticamente documentadas aqui conforme forem lançadas.

## Estrutura do Projeto

```
src/
  app/
    agendamento-lista/
      agendamento-lista.component.ts      # Componente de listagem de agendamentos
      agendamento-lista.component.html
      agendamento-lista.component.css
    models/
      agendamento.ts                      # Modelo de dados de agendamento
    app.component.ts                      # Componente principal
    app.module.ts                         # Módulo principal
  assets/                                 # Recursos estáticos
  styles.css                              # Estilos globais
  main.ts                                 # Bootstrap da aplicação
```

- Veja o componente de listagem em [`AgendamentoListaComponent`](src/app/agendamento-lista/agendamento-lista.component.ts).
- O modelo de dados está em [`agendamento.ts`](src/app/models/agendamento.ts).

## Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   ng serve
   ```
3. Acesse `http://localhost:4200/` no navegador.

## Testes

- Para rodar os testes unitários:
  ```sh
  ng test
  ```
- Os testes estão localizados em arquivos `.spec.ts`, como [`app.component.spec.ts`](src/app/app.component.spec.ts) e [`agendamento-lista.component.spec.ts`](src/app/agendamento-lista/agendamento-lista.component.spec.ts).

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Fork este repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'feat: nova feature'`)
4. Push para o branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT.

---

> Documentação gerada automaticamente. Novas funcionalidades e detalhes técnicos serão atualizados conforme o projeto evolui.
