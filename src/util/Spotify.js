const clientId = ''

const accessToken = '';
const spotify = {};

function getAccessToken() {

}

async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

export {spotify};

// https://api.spotify.com/v1/search?q=
// https://api.spotify.com/v1/me
