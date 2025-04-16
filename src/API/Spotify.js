// Spotify API integration

var client_id = '5544742038044636ae0e70df50006519';
var client_secret = '078517ab43b2458f89e2386a57393319';
let dasToken;
let query="";
const suffix="&type=track,album,artist";

function updateSearchValue(newValue) {
  query = newValue;
};

async function getToken() {
  const encodedCredentials = btoa(client_id + ':' + client_secret); // Use btoa for Base64 encoding

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + encodedCredentials, // Use the encoded credentials
    },
  });

  return await response.json();
}

async function getAndStoreToken() {
  try {
      console.log("Fetching token...");
      const response = await getToken();
      dasToken = response.access_token;
      console.log("Token fetched successfully:", dasToken);
  }  catch (error) {
      console.error("Error fetching token:", error);
  }
}

async function getSearchInfo(access_token) {
  const response = await fetch("https://api.spotify.com/v1/search?q="+query+suffix, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

function returnStringifiedTracks(profile) {
  let firstFive = [];
  for (let i = 0; i < 5; i++) {firstFive.push(profile.tracks.items[i]);}

  const formattedTracks = firstFive.map(item => ({
    spotifyID: item.id,
    songName: item.name,
    artist: item.artists[0].name
  }));
  const stringifiedTracks = JSON.stringify(formattedTracks);
  return stringifiedTracks;}

async function triggerAPICall(){
    try {
        if (!dasToken) {
            await getAndStoreToken();
        }
    const response = await getSearchInfo(dasToken);
    console.log("inside triggerAPICall");
    
    const stringifiedResults = returnStringifiedTracks(response);
    console.log(stringifiedResults)
    
    return stringifiedResults;

    } catch (error) {
            console.error("Error: ", error);
        }
};

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
export { updateSearchValue, triggerAPICall}