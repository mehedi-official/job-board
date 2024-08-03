import posthog from 'posthog-js'
import { browser } from '$app/environment';

export const load = async () => {

  if (browser) {
    posthog.init(
      'phc_zSLSM5Ax9pn1Sihb4maO8U1IY3QHXrWS2IirJmTGYXO',
      { 
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
      }
    )
  }
  return
};