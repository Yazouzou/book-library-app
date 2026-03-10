import Button from "./Button"
import { FaBook } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function CTA() {
  const navigate = useNavigate()

  return (
    <section className="bg-blue-50 py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Library Today!</h2>
      <Button onClick={() => navigate("/register")} color="black">
        <FaBook /> Register Now
      </Button>
    </section>
  )
}

export default CTA