import errorImage from '../../src/assets/404/404.gif'; 
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <img src={errorImage} alt="Error Animation" className="w-3/4 max-w-lg mb-8" />
            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
            <p className="text-lg mb-8">The page you are looking for doesn't exist or an error occurred. Please try again later or go back to the homepage.</p>
            <button
                onClick={handleGoHome}
                className="px-6 py-3 bg-[#e3b577] text-white rounded-lg hover:bg-green-600"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default ErrorPage;
