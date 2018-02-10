// Importando CSS
import '../css/style.css'

// Utilizando import com Babel
import Pessoa from './pessoa'

const pessoa = new Pessoa('Guilherme')
console.log(pessoa.toString())

// --------------------------------------------

// Clonar produto
const produto = {
	nome: 'Caneta Bic Preta',
	preco: 1.90,
	desconto: 0.05
}

function clone(objeto) {
	return { ...objeto }	
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log('Produtos: ', produto, novoProduto)

// --------------------------------------------

// Experiência com ReactJS
import 'react'

export default props => (
	<h1>Olá</h1>
)

console.log('Funcionou o REACT')

// --------------------------------------------