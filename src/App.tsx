import { Suspense } from "react";
import { BrowserRouter as Router} from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Approute from "./routes/index"
 

export const App:React.FC = () => {
  return (
    <AuthProvider>
      <Router >
          <Approute />
      </Router>
    </AuthProvider>
  )
}

