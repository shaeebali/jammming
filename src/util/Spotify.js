const clientId = 'bd8aba796b9249329067c9e5dd1b7e27';
const params = new URLSearchParams(window.location.search);
const code = params.get('code');

let username;

if (!code) {
  redirectToAuthCodeFlow(clientId);
} else {
  const accessToken = await getAccessTokenFromCodeFlow(clientId, code);
  const profile = await fetchProfile(accessToken);
  populateUI(profile);
}

export async function redirectToAuthCodeFlow(clientId) {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://localhost:3000/callback");
  params.append("scope", "user-read-private user-read-email");
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

async function getUsername() {
  if (username) {    
    return username;
  } else {
    const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {Authorization: `Bearer ${token}`
    });

    const jsonResponse = await response.json();
    username = jsonResponse.id;
  }
}

function generateCodeVerifier(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

async function getAccessToken(clientId, code) {
  const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

async function spotifySearch(term, token) {
  const response = await fetch(`https://api.spotify.com/v1/search?q=${term}"&type=artist,track,album`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const jsonResponse = await response.json();

  return jsonResponse.tracks.items.map(track => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    album: track.album.name,
    uri: track.uri,
    preview: track.preview_url
  }));

}

async function savePlaylist(playlistName, savePlaylist, token) {
  const responseNp = await fetch("https://api.spotify.com/v1/users/"+ username + "/playlists", {
        method: "POST",
        headers: { 
            "Content-Type":"application/json",
            "Authorization": "Bearer " + token
        }, 
        body: JSON.stringify({ name: playlistName })
    });
}

// complete this later and implement user profile data into the UI https://developer.spotify.com/documentation/web-api/howtos/web-app-profile

// function populateUI(profile) {
//   document.getElementById("displayName").innerText = profile.display_name;
//   if (profile.images[0]) {
//     const profileImage = new Image(200, 200);
//     profileImage.src = profile.images[0].url;
//     document.getElementById("avatar").appendChild(profileImage);
//     document.getElementById("imgUrl").innerText = profile.images[0].url;
//   }
//   document.getElementById("id").innerText = profile.id;
//   document.getElementById("email").innerText = profile.email;
//   document.getElementById("uri").innerText = profile.uri;
//   document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
//   document.getElementById("url").innerText = profile.href;
//   document.getElementById("url").setAttribute("href", profile.href);
// }

// export {spotify};

// https://api.spotify.com/v1/search?q=
// https://api.spotify.com/v1/me
