import { RootState } from "@/store";
import { setManagerInfo } from "@/store/reducer/managerInfoReducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAdminApi } from "./useApi";

export function useManagerInfo(): void {
    const domain = useSelector((state: RootState) => state.pReducer.domains.constructorApiDomain);
    const [isSended, setIsSended] = useState(false);
    const dispatch = useDispatch();
    const api = useAdminApi();

    useEffect(() => {
        if (domain && !isSended) {
            setIsSended(true);
            api.get(`Users/getUserInfo`)
                .then(res => res.data)
                .then(data => {
                    console.log("manager info", data);
                    dispatch({ type: setManagerInfo, payload: data });
                })
                .catch(err => {
                    console.error(err, "error in get manager info hook");
                });
        }
    }, [domain]);
}
