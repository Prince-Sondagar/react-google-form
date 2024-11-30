import { useNavigate } from "react-router";


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('token', "ghp_4bsghuj863mchcjf55");
        navigate('/dashboard');
    };

    return (
        <>
            <h1>Login</h1>
            <button onClick={handleLogin}>
                Login Now
            </button>
        </>
    );
};

export default Login;