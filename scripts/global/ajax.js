async function ajax(url) {
    const response = await fetch(url);
    
    if (!response.ok) {
        console.error(`Response for ${url} failed with ${response.status} status.`)
    }

    const data = await response.text().finally();

    return data;
}