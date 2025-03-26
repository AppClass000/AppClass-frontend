import { BrowserRouter as Router} from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { UserDataProvider } from "./contexts/UserDataContext";
import Approute from "./routes/AppRoute"
 

export const App:React.FC = () => {
  return (
    <AuthProvider>
      <UserDataProvider >
        <Router >
            <Approute />
        </Router>
      </UserDataProvider>
    </AuthProvider>
  )
}

