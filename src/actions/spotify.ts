'use server';

import { getShowEpisodes, type SpotifyEpisode } from '@/utils/spotify';

export async function fetchPodcastEpisodes(limit = 3): Promise<SpotifyEpisode[]> {
  try {
    const response = await getShowEpisodes(limit);
    return response.items;
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
    return [];
  }
}
