"use client";

import CodeBlock from "@/app/components/pyodide/CodeBlock";
import StatusBar from "@/app/components/pyodide/StatusBar";
import TokenTable from "@/app/components/pyodide/TokenTable";
import { usePyodide } from "@/hooks/usePyodide";
import { TOKENIZER_SCRIPT } from "@/utils/pythonScripts";
import { useEffect, useState } from "react";

type PythonToken = {
    type: number;
    type_name: string;
    exact_type: number;
    exact_type_name: string;
    string: string;
    start: [number, number];
    end: [number, number];
}

export default function Pyodide() {
    const { pyodide, runPython } = usePyodide();
    const [code, setCode] = useState("print('Try the CPython Tokenizer!\n')")
    const [tokens, setTokens] = useState<PythonToken[]>([])
    const [error, setError] = useState<any>(null)

    async function handleChange(newCode:string) {
        setCode(newCode);
        
        try {
            const returned_tokens = await run(newCode);
            console.log(returned_tokens)
            setTokens(returned_tokens || []);

            setError(false)
        }
        catch (err) {
            setError(true)
        }
    };

    async function run(newCode: string) {
        if (!pyodide) return [];

        try {
            pyodide.globals.set("code_str", newCode);

            return await runPython(TOKENIZER_SCRIPT);
        } catch (err) {
            console.error("Pyodide execution error:", err);
            throw err; 
        }
    }

    useEffect(() => {
        async function handleSetTokens(code: string) {
            const returned_tokens = await run(code);
            setTokens(returned_tokens)
        }

        handleSetTokens(code)
    }, [pyodide])

    return (
        <>
            <CodeBlock code={code} handleChange={handleChange}></CodeBlock>

            { error ? <StatusBar type="alert" className="mt-3">Error: cannot tokenize</StatusBar> : 
              tokens.length == 0 ? <StatusBar type="info" className="mt-3">Loading...</StatusBar> : 
              
                <TokenTable tokens={tokens} />
            }
        </>
    );
}
