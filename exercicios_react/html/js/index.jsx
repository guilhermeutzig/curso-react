import React from 'react'
import ReactDOM from 'react-dom'

// Apresentação
ReactDOM.render(
	<div>
		<h1>Bem-vindo ao meu curso e React</h1>
		<p>Abaixo seguem os componentes criados em aula.</p>
	</div>
, document.getElementById('presentation'))

// Import de dois componentes em um mesmo arquivo
import { Primeiro, Segundo } from './first-component/firstComponent'

ReactDOM.render(
	<div>
		<Primeiro />
		<Segundo />
	</div>
, document.getElementById('app'))

// Importa membros da família
import Family from './family/family'
import Member from './family/member'

ReactDOM.render(
	<Family lastName="Utzig">
		<Member name="Guilherme" />
		<Member name="Algenor" />
		<Member name="Lisiane" />
		<Member name="Mateus" />
	</Family>
, document.getElementById('family'))

// Importa classe e faz função de incremento e decremento
import ClassComponent from './classComponent/classComponent'

ReactDOM.render(
	<ClassComponent label="Contador" initialValue={15} />
, document.getElementById('class-component'))

// Importa field
import Field from './field/field'
ReactDOM.render(
	<Field initialValue={10} />
, document.getElementById('field'))
