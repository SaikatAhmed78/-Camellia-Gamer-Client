import { Link } from 'react-router-dom';
import signUpInImg from '../../src/assets/form/login-concept-illustration_114360-739.avif';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const SignIn = () => {
   
    const {signInUser} = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(result => {
            
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const signInInfo = {email, lastSignInTime};

            fetch(``, {
                method: 'PATCH',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
                (data)
            })
        })
        .catch(error => console.log(error))
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6 text-[#91572B]">Sign In to Your Account</h2>
                <form onSubmit={handleSignIn} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
                            value={email}
                           
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
                            value={password}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#91572B] text-white font-semibold rounded-md shadow-md hover:bg-[#7d4f20] transition duration-300 ease-in-out"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account? <Link to='/signUp' className="text-[#91572B] hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
            <img
                src={signUpInImg}
                alt="Sign In"
                className="hidden md:block w-1/2 h-auto rounded-lg shadow-lg ml-8"
            />
        </div>
    );
};

export default SignIn;
