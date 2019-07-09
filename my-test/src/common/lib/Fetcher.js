export default function jsonFetch(url, params = {}) {
    return fetch(url, {
        ...params,
        ...(params.method === "POST"
            && { headers: { ...params.headers, "Content-Type": "application/json" } }),
        ...(params.body && { body: JSON.stringify(params.body) })
    }).then(r => r.json())
}