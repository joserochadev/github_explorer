import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'
import { Repository } from '../pages/Repository'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/repositories/:autho/:repositoryName"
        element={<Repository />}
      />
    </Routes>
  </BrowserRouter>
)
