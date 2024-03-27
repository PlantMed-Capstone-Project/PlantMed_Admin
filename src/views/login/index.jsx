import * as styleMui from './Login.styled'
import LoginForm from 'views/login/components/LoginForm'

function Login() {
    return (
        <styleMui.container>
            <styleMui.Background>
                <LoginForm />
            </styleMui.Background>
        </styleMui.container>
    )
}

export default Login
