"use client";

import { useState, useEffect, useCallback } from "react";

export function usePyodide(
  indexURL = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
) {
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true

    const initPyodide = async () => {
      try {
        if (!window.loadPyodide && !document.getElementById("pyodide-script")) {
          const script = document.createElement("script");
          script.id = "pyodide-script";
          script.src = indexURL + "pyodide.js";
          script.async = true;
          document.body.appendChild(script);

          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = () => reject(new Error("Failed to load Pyodide CDN"));
          });
        }

        if (!window.globalPyodideInstance) {
          window.globalPyodideInstance = await window.loadPyodide({ indexURL });
        }

        if (isMounted) {
          setPyodide(window.globalPyodideInstance);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to initialize Pyodide");
          setIsLoading(false);
        }
      }
    };

    initPyodide();

    return () => isMounted = false
  }, [indexURL]);

  const runPython = useCallback(
    async (code) => {
      if (!pyodide) throw new Error("Pyodide is not loaded yet.");
      
      const result = await pyodide.runPythonAsync(code);

      return result?.toJs ? result.toJs({ dict_converter: Object.fromEntries }) : result;
    },
    [pyodide]
  );

  return { pyodide, isLoading, error, runPython };
}