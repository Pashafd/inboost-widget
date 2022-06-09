import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LocalTextInterface {
    idText: number;
    name: string;
    value: string;
}

interface InitialStateI {
    texts: LocalTextInterface[];
}

const initialState: InitialStateI = {
    texts: [],
};

const localSlice = createSlice({
    name: "local",
    initialState,
    reducers: {
        setTexts: (state, action: PayloadAction<LocalTextInterface[]>) => {
            state.texts = action.payload;
        },
    },
});

export const { setTexts } = localSlice.actions;
export default localSlice.reducer;
