import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { useAuthStore } from '../hooks/useAuthStore';
import { ViewsRoutes } from '../views/routes/ViewsRoutes';


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';


    useEffect(() => {
        checkAuthToken();
    }, []) // Actualiza el token
    

    if(status === 'checking'){
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
            <Routes>
                {
                    ( status === 'not-authenticated')  
                    ? <Route path="/auth/*" element={ <LoginPage /> } /> 
                    : <Route path="/*" element={ <ViewsRoutes /> } />
                }
                <Route path="/*" element={ <Navigate to={"/auth/login"}/> } />    
            </Routes>
    );
};