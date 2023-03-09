import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { useLoading } from "../hooks/useLoading";
import { ViewsRoutes } from "../views/routes/ViewsRoutes";

export const AppRouter = () => {
    const { status } = useLoading();
    if (status === "checking") {
        return <h3>Cargando...</h3>;
    }

    return (
        <Routes>
            {status === "not-authenticated" ? (
                <Route path="/auth/*" element={<LoginPage />} />
            ) : (
                <Route path="/*" element={<ViewsRoutes />} />
            )}
            <Route path="/*" element={<Navigate to={"/auth/login"} />} />
        </Routes>
    );
};
