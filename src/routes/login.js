import Router  from "express"
import AuthValidation  from "../validation/LoginValidation.js"
import loginpost ,{profile} from "../controllers/login.js"
const login = Router()

login.post("/login",AuthValidation, loginpost);
login.get("/profile", profile);

export default login;