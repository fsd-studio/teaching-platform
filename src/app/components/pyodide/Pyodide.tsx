"use client";

import CodeBlock from "@/app/components/pyodide/CodeBlock";
import StatusBar from "@/app/components/pyodide/StatusBar";
import TokenTable from "@/app/components/pyodide/TokenTable";
import { usePyodide } from "@/hooks/usePyodide";
import { useTokenizer } from "@/hooks/useTokenizer";
import { useEffect, useState } from "react";

export default function Pyodide() {
    const { pyodide, runPython } = usePyodide();
    const [code, setCode] = useState("print('Try the CPython Tokenizer!\n')")

    const { tokens, error, isLoading, tokenize } = useTokenizer(pyodide, runPython);

    async function handleChange(newCode:string) {
        setCode(newCode);
        tokenize(newCode)
    };

    useEffect(() => {
        if (pyodide) tokenize(code);
    }, [pyodide, tokenize]);

    return (
        <>
            <CodeBlock code={code} handleChange={handleChange}></CodeBlock>

            {error && <StatusBar type="alert">Error: cannot tokenize</StatusBar>}
            
            {isLoading ? (
                <StatusBar type="info">Loading...</StatusBar>
            ) : (
                <TokenTable tokens={tokens} />
            )}
        </>
    );
}
