import { useState, FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import { Title, Form, Repositories, Error } from './styles'

import { api } from '../../services/api'

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

export const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@githubExplorer:repositories',
    )

    if (storageRepositories) {
      return JSON.parse(storageRepositories)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:repositories',
      JSON.stringify(repositories),
    )
  }, [repositories])

  async function handleAddRepositories(
    e: FormEvent<HTMLElement>,
  ): Promise<void> {
    e.preventDefault()

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório')
      return
    }

    try {
      const response = await api.get(`repos/${newRepo}`)
      setRepositories([...repositories, response.data])
      setNewRepo('')
      setInputError('')
    } catch (err) {
      setInputError('Erro na busca por este repositório')
    }
  }

  return (
    <>
      <img src={logo} alt="Github explore logo" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepositories}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repositorie) => (
          <Link
            key={repositorie.full_name}
            to={`/repositories/${repositorie.full_name}`}
            // name={repositorie.full_name}
          >
            <img
              src={repositorie.owner.avatar_url}
              alt={repositorie.owner.login}
            />

            <div>
              <strong>{repositorie.full_name}</strong>
              <p>{repositorie.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}
