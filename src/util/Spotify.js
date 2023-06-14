const clientId = 'bd8aba796b9249329067c9e5dd1b7e27';
const code = undefined;
const accessToken = '';
const spotify = {};

if (!code) {
  redirectToAuthCodeFlow(clientId);
} else {
  const accessToken = await getAccessTokenFromCodeFlow(clientId, code);
  const profile = await fetchProfile(accessToken);
  populateUI(profile);
}

async function redirectToAuthCodeFlow(clientId) {

}

async function getAccessToken(clientId, code) {

}

async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

async function fetchProfile(profile) {

}

export {spotify};

// https://api.spotify.com/v1/search?q=
// https://api.spotify.com/v1/me
