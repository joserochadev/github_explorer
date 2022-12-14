import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { api } from '../../services/api'

import { Header, RepositoryInfo, Issues } from './style'

import logo from '../../assets/logo.svg'

interface Repository {
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
  }
}

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

export const Repository: React.FC = () => {
  const { autho, repositoryName } = useParams()
  const [repository, setRepository] = useState<Repository | null>(null)
  const [issues, setIssue] = useState<Issue[]>([])

  useEffect(() => {
    api.get(`repos/${autho}/${repositoryName}`).then((response) => {
      setRepository(response.data)
    })

    api.get(`repos/${autho}/${repositoryName}/issues`).then((response) => {
      setIssue(response.data)
    })
  }, [autho, repositoryName])

  return (
    <>
      <Header>
        <img src={logo} alt="Github explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url} target="blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  )
}
