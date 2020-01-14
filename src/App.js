import React from 'react';
import { Header } from './components/navigation'
import { PageMain } from './components/pageMain'
import { PageGalery } from './components/pageGalery'
import { PageAuthors } from './components/pageAuthors'
import { PageBackground } from './components/pageBackground'
import { PageContact } from './components/pageContact'
import { useSelector  } from 'react-redux'


export const App = () => {
  const currentPage = useSelector(state => state.navigator.currentPage);
  return (
    <>
      <Header />
      {currentPage === 'main' && <PageMain></PageMain>}
      {currentPage === 'galery' && <PageGalery></PageGalery>}
      {currentPage === 'authors' && <PageAuthors></PageAuthors>}
      {currentPage === 'background' && <PageBackground></PageBackground>}
      {currentPage === 'contact' && <PageContact></PageContact>}
    </>
  )
}
