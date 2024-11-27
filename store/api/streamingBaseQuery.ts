import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

export const streamingBaseQuery: BaseQueryFn = async ({ url, method, body }) => {
    try {
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!response.body) {
            throw new Error("ReadableStream not supported");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        let result = "";

        const streamPromise = new Promise((resolve, reject) => {
            const readStream = async () => {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    result += decoder.decode(value, { stream: true });
                }
                resolve(result);
            };

            readStream().catch(reject);
        });

        const finalResult = await streamPromise;
        return { data: finalResult };
    } catch (error) {
        return { error: { status: 'FETCH_ERROR', message: error.message } };
    }
};
