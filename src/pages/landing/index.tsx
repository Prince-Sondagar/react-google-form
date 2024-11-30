import { useNavigate } from "react-router";

const Root = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome To Google Form
                </p>
                <button
                    onClick={() => navigate('/dashboard')}
                    className='w-32 h-[40px] text-sm bg-[#3e7886] text-white rounded border-solid border-2 border-slate-300 cursor-pointer font-medium	'>
                    Go to Dashboard
                </button>
            </header>
        </div >
    );
};

export default Root;