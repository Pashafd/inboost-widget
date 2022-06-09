export interface IManagerInfoReducer {
    idUser: number;
    idPortal: number;
    idActivityStatusUser: number;
    idTypeUser: number;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    password: string;
    createdOn: string;
    updateOn: string;
    hash: string;
}

const initialState: IManagerInfoReducer = {
    idUser: null,
    idPortal: null,
    idActivityStatusUser: null,
    idTypeUser: null,
    firstname: null,
    lastname: null,
    phoneNumber: null,
    email: null,
    password: null,
    createdOn: null,
    updateOn: null,
    hash: null,
};

export const setManagerInfo = "SET_MANAGER_INFO";

export const managerInfoReducer = (
    state = initialState,
    action: { type: string; payload: Record<string, any> },
): IManagerInfoReducer => {
    switch (action.type) {
        case setManagerInfo:
            return Object.assign({}, state, {
                ...action.payload,
            });

        default:
            return state;
    }
};
