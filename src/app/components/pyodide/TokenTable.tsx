import { PythonToken } from "@/app/types";

export default function TokenTable({ tokens }: {tokens: PythonToken[]}) {
    return (
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
    );
}
