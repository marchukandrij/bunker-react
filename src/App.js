import React from 'react';
import { Header, Footer } from './components/navigation'
import { PageMain } from './components/pageMain'
import { PageGalery } from './components/pageGalery'
import { PageAuthors } from './components/pageAuthors'
import { PageBackground } from './components/pageBackground'
import { PageContact } from './components/pageContact'
import { useSelector  } from 'react-redux'
import { ModalCover } from './components/modals'


export const App = () => {
  const currentPage = useSelector(state => state.navigator.currentPage);
  return (
    <>
      <Header />
      {currentPage === 'main' && <PageMain />}
      {currentPage === 'galery' && <PageGalery />}
      {currentPage === 'authors' && <PageAuthors />}
      {currentPage === 'background' && <PageBackground />}
      {currentPage === 'contact' && <PageContact />}
      <ModalCover />
      <Footer />
    </>
  )
}
