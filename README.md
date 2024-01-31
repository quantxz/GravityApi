<p align="center">
    <img src="https://i.ibb.co/DCYnK5P/Mock.png" alt="logo do projeto" width="709" height="173" />
</p>

 
<h1 align="center">Journal4</h1>
<div align="center">
   <a href="https://journal4.vercel.app" style="text-decoration:none; color:#FFF; font-weight:bold;">user interface</a> 
   <strong>   |   </strong>
   <a href="https://journal4.vercel.app/api-docs" style="text-decoration:none; color:#FFF; font-weight:bold;">Documentation</a>
   <strong>   |   </strong>
   <a href="https://github.com/quantxz" style="text-decoration:none; color:#FFF; font-weight:bold;">Author</a>
   <strong>   |   </strong>
   <a href="https://github.com/BryanDevelops7z" style="text-decoration:none; color:#FFF; font-weight:bold;">Colaborator</a>
</div>

## 🔥 Introdução
A journal4 é uma API que foi desenvolvida inspirada na POKEAPI, funcionando de forma extremamente similar, ou seja para utilizar dela basta fazer requisições http para os end points e os dados serão retornados  a voce, os dados são separados em 5 divisões sendo elas:
* 1º - Episodes

* 2º - Books

* 3º - Characters

* 4º - Creatures

* 5º - Relatives

## 👷 Autores & Colaboradores 
* **Anderson | Quantxz** - *autor e desenvolvedor de toda a estrutura e inserção de dados da API* - [Quantxz](https://github.com/quantxz)

* **Bryan** - *colaborador e desenvolvedor de toda a interface de usuarios da API* - [Bryan](https://github.com/BryanDevelops7z)

## 📦 Tecnologias usadas

**Frontend:** 

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

**Backend:**

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📍 Endpoints
* Episodes
  ```
  /episodes - retorna todos os episodios da serie

  /episodes/id/{id} - retorna um episodio especifico com base no id passado;
  exemplo de uso: https://journal4.vercel.app/episodes/id/1

  /episodes/title/{title} - retorna um episodio especifico com base no titulo passado;
  exemplo de uso: https://journal4.vercel.app/episodes/id/Tourist Trapped
  ```
* Books
  ```
  /books - retorna os livros sobre a serie lançados até o momento

  /books/id/{id} - retorna um livro especifico com base no id passado;
  exemplo de uso: https://journal4.vercel.app/books/id/1

  /books/title/{title} - retorna um livro especifico com base no titulo passado;
  exemplo de uso: https://journal4.vercel.app/books/id/Dipper's and Mabel's Guide to Mystery and Nonstop Fun! 
  ```
* Characters
  * Personagens Principais
  ```
  /Characters/Main - retorna os personagems principais da serie
  
  /Characters/Main/name/{name} - retorna um personagen principal especifico com base no nome passado;
  exemplo de uso: https://journal4.vercel.app/Characters/Main/name/Mason Pines
  ```
  * Personagens Recorrentes
  ```
  /Characters/Rec - retorna os personagems recorrentes da serie
  
  /Characters/Rec/name/name/{name} - retorna um personagem recorrente da serie com base no nome passado;
  exemplo de uso:  https://journal4.vercel.app/Characters/Rec/name/Abuelita
  ```
  * Personagens Menores
  ```
  /Characters/Minors - retorna os personagems Menos recorrentes da serie
  
  /Characters/Minors/name/{name} - retorna um personagem menos recorrente da serie com base no nome passado;
  exemplo de uso:  https://journal4.vercel.app/Characters/Minors/name/Alex Hirsch
  ```
* Creatures
    ```
    /Creatures - retorna as criaturas da serie
    
    /Creatures/name/{name} - retorna uma criatura especifica da serie com base no nome passado;
    exemplo de uso: https://journal4.vercel.app/Creatures/name/Bat Boy

    /Creatures/Weirdmageddon - retorna as criaturas do estranhagedon

    /Creatures/Weirdmageddon - retorna uma criatura do estranhagedon especifica com base no nome passado;
    exemplo de uso: https://journal4.vercel.app/Creatures/Weirdmageddon/name/8 Ball
    ```
* Relatives
    * Relações dos personagens Principais
    ```
    /Relatives/MainChars - retorna todos os familiares dos personagems principais

    /Relatives/MainChars/id/{id} - retorna os familiares das personagems principais com base em um id especifico;
    exemplo de uso: https://journal4.vercel.app/Relatives/MainChars/id/1

    /Relatives/MainChars/name/{name} - retorna os familiares de uma das personagems principais com base no nome do familiar conhecido;
    exemplo de uso: https://journal4.vercel.app/Relatives/MainChars/name/Mason Pines; (retornara os dados dos sr e da sra Pines)
    ```
    * Relações dos personagens Recorrentes
    ```
    /Relatives/RecChars - retorna todas os familiares dos personagems recorrentes

    /Relatives/RecChars/id/{id} - retorna os familiares das personagems recorrentes com base em um id especifico;
    exemplo de uso: https://journal4.vercel.app/Relatives/RecChars/id/1

    /Relatives/RecChars/name/{name} - retorna os familiares de uma das personagems recorrentes com base no nome do mesmo;
    exemplo de uso: https://journal4.vercel.app/Relatives/RecChars/name/Preston Northwest; (não existe muita informação sobre os personagens recorrentes, por isso esta rota não é recomendada)
    ```
    * Relações dos personagens Menores
    ```
    /Relatives/MinorChars - retorna todos os familiares dos personagems principais

    /Relatives/MinorChars/id/{id} - retorna os familiares das personagems menores com base em um id especifico;
    exemplo de uso: https://journal4.vercel.app/Relatives/MinorChars/id/1

    /Relatives/MinorChars/name/{name} - retorna os familiares de uma das personagems menores com base no do mesmo;
    exemplo de uso: https://journal4.vercel.app/Relatives/MinorChars/name/Anti-Mabel; (não existe muita informação sobre os personagens Menores, por isso esta rota não é recomendada)
   
    ```

## 🙏 expressões de gratidão
  * Um agradecimento aos devs que fizeram e/ou ajudaram no projeto
  * reporte de algum bug ou duvida para - anderson.backdev@gmail.com
  * follow nas redes sociais dos devs:

     [instagram Anderson](https://www.instagram.com/andersonlxz) | [instagram Bryan](https://www.instagram.com/bryan_devs/)

     [Linkedin Anderson](https://www.linkedin.com/in/anderson-silva-725561282/) | [Linkedin Bryan](Ainda nâo tem)

  ## ⚠️ Avisos
  * 1º - a função de requisições de episodio por titulo usando o titulo em portugues brasileiro sera aperfeiçoado na V2 do projeto
  * 2º - a função de requisições de livros por titulo usando o titulo em portugues brasileiro sera aperfeiçoado na V2 do projeto
  * 3º - Atualizações na forma das requisições, implementação da tecnologia GraphQL, e outras novidades, chegarão na V2 da API
