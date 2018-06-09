const respError = async resp => {
  const message = await resp.text();
  return { name: "@nelreina/web-api Fetch Error", message };
};

export async function get(path) {
  const host = (this && this.host) || "";
  const resp = await fetch(`${host}${path}`);
  // console.info(resp);
  if (resp.ok) {
    return resp.json();
  } else {
    throw await respError(resp);
  }
}

export async function post(path, data) {
  let body;
  try {
    body = JSON.stringify(data);
  } catch (error) {
    body = data;
  }
  const postOptions = {
    method: "POST",
    body,
    headers: {
      "content-type": "application/json"
    }
  };
  const host = (this && this.host) || "";
  const resp = await fetch(`${host}${path}`, postOptions);
  if (resp.ok) {
    return resp.json();
  } else {
    throw await respError(resp);
  }
}

class Api {
  constructor(host) {
    this.host = host || "";
    this.get = get;
    this.post = post;
  }
}

export default Api;
