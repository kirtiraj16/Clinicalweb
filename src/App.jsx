import Header from "./components/Header"
import WelcomeSection from "./components/WelcomeSection"
import DoctorCards from "./components/DoctorCard"
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      
      <Header/>
      <WelcomeSection/>
      <DoctorCards/>
    </h1>
    
  )
}
