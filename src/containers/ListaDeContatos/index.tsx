import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const tarefas = filtraContatos()

  return (
    <MainContainer>
      <ul>
        {tarefas.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
