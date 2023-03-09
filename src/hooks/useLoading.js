import { useEffect } from "react";
import { useAuthStore } from "../hooks/useAuthStore";

export const useLoading = () => {
    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    return {
        status,
    };
};
