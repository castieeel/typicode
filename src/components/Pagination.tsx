import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNumPage } from '../store/slices/slicePage'
import { type RootState } from '../store/store'

interface IPage {
  totalPage: number
}

export const PaginationComponent: React.FC<IPage> = ({ totalPage }) => {
  const dispatch = useDispatch()
  const page = useSelector((state: RootState) => (state.slicePage.numPage))
  const arrayPage: number[] = []
  for (let i = 1; i < totalPage + 1; i++) {
    arrayPage.push(i)
  }

  const setPage = (num: number): void => {
    if (num >= 1 && num <= totalPage) {
      dispatch(setNumPage(num))
    }
  }

  return (
  <ul className="pagination justify-content-center">
    <li className="page-item"><a className="page-link" href="#" onClick={() => { setPage(page - 1) }}>Предыдущая</a></li>
    {arrayPage?.map((el, index) => (el === page)
      ? (<li key={index} className="page-item active">
        <a className="page-link" href="#" onClick={() => { setPage(arrayPage[index]) }}>{arrayPage[index]}</a>
        </li>)
      : (<li key={index} className="page-item">
      <a className="page-link" href="#" onClick={() => { setPage(arrayPage[index]) }}>{arrayPage[index]}</a>
      </li>))
    }
    <li className="page-item"><a className="page-link" href="#" onClick={() => { setPage(page + 1) }}>Следующая</a></li>
  </ul>
  )
}
