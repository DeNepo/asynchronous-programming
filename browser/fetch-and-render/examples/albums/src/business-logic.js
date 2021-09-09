import { typicodeResource } from './data-access.js';

export const fetchAlbum = async (albumId = 0) => {
  // parallel fetching, photos and album are fetched at the same time
  //  the `await` is finished when both have resolved
  const albumPromise = typicodeResource('albums', albumId);
  const photosPromise = typicodeResource('albums', albumId, 'photos');

  const [album, photos] = await Promise.all([albumPromise, photosPromise]);

  // // sequential fetching, photos are only fetched after album is completely finished
  // const album = await typicodeResource('albums', albumId);
  // const photos = await typicodeResource('albums', albumId, 'photos');

  return {
    album,
    photos,
  };
};
