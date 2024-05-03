import {Route, Routes} from "react-router-dom";
import React from "react";
import {Navigation} from "widgets/navigation";
import {EmployeesList} from "pages/employee-list";
import {EmployeeProfile} from "pages/employee-profile";



export const Routing = () => {
    return (
        <Routes>
            {/*здесь расположены маршруты для страниц, отсюда же вызывается их рендер*/}
            <Route path={"/"} element={<Navigation />}>
                <Route path={"employees"} element={<EmployeesList />}/>
                <Route path={"employee/:id"} element={<EmployeeProfile />}/>
            </Route>

        </Routes>
    );
};