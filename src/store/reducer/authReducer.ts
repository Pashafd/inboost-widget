import { Languages } from "@/components/chat/chatIndex";
export interface AuthReducerState {
    bearerToken: null | string;
    expired_in: null | number;
    domains: {
        appApiDomain: string;
        constructorApiDomain: string;
        websocketDomain: string;
        testConstructorApiDomain: string;
    };
    language: null | string;
}

const initialState: AuthReducerState = {
    bearerToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyMzkxIiwiUm9sZUlkIjoiNCIsIlBvcnRhbElkIjoiMTMxMCIsInJvbGUiOiJQb3J0YWxBZG1pbiIsIm5iZiI6MTY1Mjc5MTEwNiwiZXhwIjoxNjY4Njg4NzA2LCJpYXQiOjE2NTI3OTExMDZ9.0Bn9jCta4s7vRRuiWRYnr6dSBA91g0Xm5QS2VC-exHA",
    expired_in: null,
    domains: {
        appApiDomain: null,
        constructorApiDomain: null,
        websocketDomain: null,
        testConstructorApiDomain: null,
    },
    language: Languages.EN,
};

export const authReducer = (
    state = initialState,
    action: {
        type: string;
        payload: {
            token: string;
            expired_in: number;
            domains: AuthReducerState["domains"];
            language: string;
        };
    },
): AuthReducerState => {
    switch (action.type) {
        case "SET_AUTH_TOKEN": {
            state = {
                ...state,
                bearerToken: action.payload.token,
                expired_in: action.payload.expired_in,
            };
            break;
        }
        case "SET_DOMAINS": {
            state = {
                ...state,
                domains: {
                    ...action.payload.domains,
                },
            };
            break;
        }
        case "SET_LANGUAGE": {
            state = {
                ...state,
                language: action.payload.language,
            };
        }
    }

    return state;
};
