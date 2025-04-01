import { Outlet } from 'react-router-dom';
import NavBar from '../Components/ui/NavBar';
import Footer from '../Components/ui/Footer';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  )
}

export default MainLayout