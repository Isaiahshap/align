const SPOTIFY_SHOW_ID = '2F5FRcKI4GN5XcjIpYTnU2';
const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

interface SpotifyEpisode {
  id: string;
  name: string;
  description: string;
  release_date: string;
  duration_ms: number;
  images: { url: string; height: number; width: number }[];
  external_urls: { spotify: string };
  html_description: string;
}

interface SpotifyShow {
  id: string;
  name: string;
  description: string;
  images: { url: string; height: number; width: number }[];
  external_urls: { spotify: string };
}

interface SpotifyEpisodesResponse {
  items: SpotifyEpisode[];
  total: number;
  limit: number;
  offset: number;
  next: string | null;
  previous: string | null;
}

let tokenData: { access_token: string; expires_at: number } | null = null;

async function getAccessToken(): Promise<string> {
  // Check if we have a valid token
  if (tokenData && tokenData.expires_at > Date.now()) {
    return tokenData.access_token;
  }

  // Client credentials flow
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Missing Spotify API credentials');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get Spotify access token: ${response.statusText}`);
  }

  const data = await response.json();
  
  // Store the token with expiration
  tokenData = {
    access_token: data.access_token,
    expires_at: Date.now() + data.expires_in * 1000 - 60000, // Subtract 1 minute for safety
  };

  return data.access_token;
}

export async function getShowDetails(): Promise<SpotifyShow> {
  const token = await getAccessToken();
  const response = await fetch(`${SPOTIFY_API_BASE}/shows/${SPOTIFY_SHOW_ID}?market=US`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch show details: ${response.statusText}`);
  }

  return response.json();
}

export async function getShowEpisodes(limit = 10, offset = 0): Promise<SpotifyEpisodesResponse> {
  const token = await getAccessToken();
  const response = await fetch(
    `${SPOTIFY_API_BASE}/shows/${SPOTIFY_SHOW_ID}/episodes?market=US&limit=${limit}&offset=${offset}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch show episodes: ${response.statusText}`);
  }

  return response.json();
}

export { type SpotifyEpisode, type SpotifyShow, type SpotifyEpisodesResponse };
