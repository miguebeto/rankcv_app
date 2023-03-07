import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui/components/NavBar";
import { CharactersPage } from "../pages/CharactersPage";
import { EpisodesPage } from "../pages/EpisodesPage";
import { LocationsPage } from "../pages/LocationsPage";

export const ViewsRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="characters" element={<CharactersPage />} />
                    <Route path="episodes" element={<EpisodesPage />} />
                    <Route path="locations" element={<LocationsPage />} />

                    <Route path="/" element={<Navigate to="characters" />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    );
};
