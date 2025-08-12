/**
 * Spotify API client for fetching podcast data
 */

const SPOTIFY_SHOW_ID = '2F5FRcKI4GN5XcjIpYTnU2';
const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';
const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

// These would typically be stored in environment variables
// For a production app, use .env.local and process.env
let cachedToken: { access_token: string; expires_at: number } | null = null;

/**
 * Get a client credentials token from Spotify
 */
async function getAccessToken(): Promise<string> {
  // Return cached token if it's still valid
  if (cachedToken && cachedToken.expires_at > Date.now()) {
    return cachedToken.access_token;
  }

  // In a real app, these would be environment variables
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  // For demo purposes, we'll use a fallback mechanism
  // In production, ALWAYS use environment variables
  const credentials = clientId && clientSecret 
    ? `${clientId}:${clientSecret}`
    : 'fallback_for_demo_only';
  
  try {
    const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(credentials).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get Spotify token: ${response.status}`);
    }

    const data = await response.json();
    
    // Cache the token with expiration
    cachedToken = {
      access_token: data.access_token,
      expires_at: Date.now() + (data.expires_in * 1000) - 60000, // Subtract 1 minute for safety
    };

    return data.access_token;
  } catch (error) {
    console.error('Error fetching Spotify token:', error);
    // For demo purposes only - in production, handle this properly
    return 'demo_token_fallback';
  }
}

/**
 * Fetch podcast show details
 */
export async function getShowDetails() {
  try {
    const token = await getAccessToken();
    const response = await fetch(
      `${SPOTIFY_API_BASE}/shows/${SPOTIFY_SHOW_ID}?market=US`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch show: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching show details:', error);
    return null;
  }
}

/**
 * Fetch podcast episodes
 */
export async function getShowEpisodes(limit = 3) {
  try {
    const token = await getAccessToken();
    const response = await fetch(
      `${SPOTIFY_API_BASE}/shows/${SPOTIFY_SHOW_ID}/episodes?market=US&limit=${limit}&offset=0`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch episodes: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching show episodes:', error);
    return null;
  }
}

/**
 * Format episode duration from milliseconds to MM:SS
 */
export function formatDuration(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Format release date to a more readable format
 */
export function formatReleaseDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

/**
 * Get the Spotify show URL
 */
export function getShowUrl(): string {
  return `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`;
}

/**
 * Get episode URL
 */
export function getEpisodeUrl(episodeId: string): string {
  return `https://open.spotify.com/episode/${episodeId}`;
}
