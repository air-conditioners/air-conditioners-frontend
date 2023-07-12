import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Start from './pages/Start';

const Router = () => {
  return (
        <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='/main' element={<Layout/>}/>
        </Routes>
  )
}

export default Router