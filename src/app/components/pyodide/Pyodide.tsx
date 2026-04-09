"use client";

import CodeBlock from "@/app/components/pyodide/CodeBlock";
import StatusBar from "@/app/components/pyodide/StatusBar";
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
              
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-700">
                                <th className="py-3 pr-4 font-semibold text-lg">Token</th>
                                <th className="py-3 px-4 font-semibold text-lg">Token Exact (Integer)</th>
                                <th className="py-3 pl-4 font-semibold text-lg">Value</th>
                            </tr>
                        </thead>
                        
                        <tbody className="divide-y divide-gray-800">
                            {tokens.map((token, index) => (
                                <tr key={index} className="hover:bg-gray-100 transition-colors">
                                    <td className="py-2 pr-4 align-middle">
                                        <span className="px-2  py-1 text-gray-400 text-sm border rounded bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                                            {token.exact_type_name}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4 align-middle text-gray-600 dark:text-gray-400">
                                        {token.exact_type}
                                    </td>
                                    <td className="py-2 pl-4 align-middle font-mono text-sm">
                                        {JSON.stringify(token.string)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
}
