import errorImage from '../../src/assets/404/404.gif'; 
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <img src={errorImage} alt="Error Animation" className="w-3/4 max-w-lg mb-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110" />
            <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Oops! Something went wrong</h1>
            <p className="text-xl mb-8 px-4 text-gray-600">The page you are looking for doesn't exist or an error occurred. Please try again later or go back to the homepage.</p>
            <button
                onClick={handleGoHome}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-pink-600 hover:to-red-600 transition duration-300 transform hover:scale-105"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default ErrorPage;
