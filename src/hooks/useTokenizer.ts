import { PythonToken } from "@/app/types";
import { TOKENIZER_SCRIPT } from "@/utils/pythonScripts";
import { useCallback, useState } from "react";

export function useTokenizer(pyodide: any, runPython: Function) {
    const [tokens, setTokens] = useState<PythonToken[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null)

    const tokenize = useCallback(async (code: string) => {
        if (!pyodide) return;
        
        setIsLoading(true);
        try {
            pyodide.globals.set("code_str", code);
            const result = await runPython(TOKENIZER_SCRIPT);
            setTokens(result || []);
            setError(false);
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, [pyodide, runPython]);

    return { tokens, error, isLoading, tokenize };
}
