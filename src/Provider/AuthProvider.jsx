import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import Swal from 'sweetalert2';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const registerUser = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            Swal.fire({
                icon: 'success',
                title: 'Registration successful!',
                showConfirmButton: false,
                timer: 1500
            });
            return result.user;
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registration failed!',
                text: 'Please try again.',
            });
            throw error;
        }
    };

    const signInUser = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                showConfirmButton: false,
                timer: 1500
            });
            return result.user;
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login failed!',
                text: 'Please check your credentials and try again.',
            });
            throw error;
        }
    };

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = {
                ...result.user,
                displayName: result.user.displayName || result.user.email.split('@')[0]
            };
            setUser(user);
            Swal.fire({
                icon: 'success',
                title: 'Google login successful!',
                showConfirmButton: false,
                timer: 1500
            });
            return result.user;
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Google login failed!',
                text: 'Please try again.',
            });
            throw error;
        }
    };

    const signInWithGithub = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            const user = {
                ...result.user,
                displayName: result.user.displayName || result.user.email.split('@')[0]
            };
            setUser(user);
            Swal.fire({
                icon: 'success',
                title: 'GitHub login successful!',
                showConfirmButton: false,
                timer: 1500
            });
            return result.user;
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'GitHub login failed!',
                text: 'Please try again.',
            });
            throw error;
        }
    };

    const updateUserProfile = async (profileUpdates) => {
        await updateProfile(auth.currentUser, profileUpdates);
        if (user) {
            try {
                
                const updatedUser = { ...user, ...profileUpdates };
                setUser(updatedUser);
                Swal.fire({
                    icon: 'success',
                    title: 'Profile updated successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Profile update failed!',
                    text: 'Please try again.',
                });
                throw error;
            }
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            Swal.fire({
                icon: 'success',
                title: 'Logout successful!',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Logout failed!',
                text: 'Please try again.',
            });
        }
    };

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        updateUserProfile,
        logout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
