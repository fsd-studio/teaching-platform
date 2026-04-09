"use client";

import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
// You MUST import a CSS theme for the colors to appear
import 'highlight.js/styles/github-dark.css'; 

hljs.registerLanguage('python', python);

type CodeBlockProps = {
    code: string;
    handleChange: (code: string) => void;
}

export default function CodeBlock({ code, handleChange }: CodeBlockProps) {
    
    const highlightWithHljs = (code: string) => {
        return hljs.highlight(code, { language: 'python' }).value;
    };

    return (
        <div className="border bg-gray-900 p-3 rounded">
            <Editor
                value={code}
                onValueChange={handleChange}
                highlight={highlightWithHljs}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                }}
                textareaClassName='focus:outline-0 '
                className="editor-container"
            />
        </div>
    );
}