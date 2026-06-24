import { Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}; 