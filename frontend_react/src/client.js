import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: 'dzp13njh',
  dataset: 'production',
  apiVersion: '2023-03-21',
  useCdn: true,
  token:
    'sk3x50W1lIkiBC4fuckRtrfNC6308lcSs2q0bjiSAJmV0TKVOnrAztQN4lu3vOW3PB5UK8KChc61VKDsClwQx9x5t2cvQ6qOM462tWg8sU3fBROkNTVCwQsOegzN1txBuyH0xkZVaGK2pvMRh04ogGuCNIWgys8cDBfeyOmjEHX7JlyjfVKy',
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
