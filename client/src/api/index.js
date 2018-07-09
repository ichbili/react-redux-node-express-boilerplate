export const testServer = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();   
    return body;
}
  