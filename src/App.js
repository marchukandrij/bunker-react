import React from 'react';
import { Header } from './components/navigation'
import { PageMain } from './components/pageMain'
import { PageGalery } from './components/pageGalery'
import { useSelector  } from 'react-redux'


export const App = () => {
  const currentPage = useSelector(state => state.navigator.currentPage);
  return (
    <>
      <Header />
      {currentPage === 'main' && <PageMain></PageMain>}
      {currentPage === 'galery' && <PageGalery></PageGalery>}
    </>
  )
}
