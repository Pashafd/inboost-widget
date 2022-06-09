import { useAppSelector } from "./tsReduxHook";

export const useLocaleText = (): {
    t: (name: string) => string;
    d: (name: string) => number;
    findTextById: (id: number) => string;
    id: (id: number) => string;
} => {
    const allTexts = useAppSelector(state => state.locale.texts);

    return {
        ["t"]: name => allTexts.find(t => t.name === name)?.value ?? "",
        ["d"]: name => allTexts.find(t => t.name === name)?.idText ?? 0,
        ["findTextById"]: id => allTexts.find(t => t.idText === id)?.value ?? "",
        ["id"]: id => allTexts.find(t => t.idText === id)?.value ?? "",
    };
};
