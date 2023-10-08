import { XataClient } from '../xata';

export type ItemStatus = 'ACTIVE' | 'INACTIVE' | 'DELETED';

export const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH
});