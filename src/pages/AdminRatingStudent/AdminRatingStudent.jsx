import React, { useEffect } from "react";
import { ToolkitWithTable } from "./ToolkitWithTable/ToolkitWithTable";
import { AddingStudent } from "./AddingStudent/AddingStudent";

import { useDispatch, useSelector } from "react-redux";
import { hideAddingWindow } from "../../store/applicationSlice";

export const AdminRatingStudent = () => {
    const dispatch = useDispatch();
    const {showAddingWindow} = useSelector(state => state.application);
    const {authRole} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(hideAddingWindow());
    }, [dispatch]);

    return showAddingWindow && authRole === "admin" ? <AddingStudent /> : <ToolkitWithTable />;
};