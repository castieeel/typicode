import React from 'react'

export const PaginationComponent: React.FC = () => {
  return (
    <nav aria-label="Пример навигации по страницам">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Предыдущая</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Следующая</a></li>
  </ul>
</nav>
  )
}
