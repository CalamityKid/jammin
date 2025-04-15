/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
 */

var client_id = '5544742038044636ae0e70df50006519';
var client_secret = '078517ab43b2458f89e2386a57393319';
let dasToken;
let query="";
let profile;

function updateSearchValue(newValue) {
  query = newValue;
};

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
};

async function getAndStoreToken() {
    try{
        const response = await getToken();
        dasToken = response.access_token;}
    catch (error) {
        console.error("Error fetching token:", error);
    }}


const suffix="&type=track,album,artist";

async function getSearchInfo(access_token) {
  const response = await fetch("https://api.spotify.com/v1/search?q="+query+suffix, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}


async function triggerAPICall(){
    try {
        if (!dasToken) {
            await getAndStoreToken();
        }
    profile = await getSearchInfo(dasToken);
        } catch (error) {
            console.error("Error: ", error);
        }
};

function returnStringifiedTracks(profile) {
    const formattedTracks = profile.tracks.items.slice(0, 5).map(item => ({
    spotifyID: item.id,
    songName: item.name,
    artist: item.artists[0].name
  }));
  const stringifiedTracks = JSON.stringify(formattedTracks);
  return stringifiedTracks;}
/*
  getToken().then(response => {
    getSearchInfo(response.access_token).then(profile => {
        const smm = returnStringifiedTracks(profile);
        console.log(smm);
  })});

  the initial code

getToken().then(response => {
  getSearchInfo(response.access_token).then(profile => {
    console.log(profile);
    console.log(profile.tracks.items[0].name);
    console.log(profile.tracks.items[0].artists[0].name);
    console.log(profile.tracks.items[0].artists[0].id);
})});
*/