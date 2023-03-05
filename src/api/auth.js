import { httpClient } from "./axios.js";

export function Filter({isChildFriendly, isDogFriendly, isStrangerFriendly}) {
  return httpClient.get(`/?isChildFriendly=${isChildFriendly}&isDogFriendly=${isDogFriendly}&isStrangerFriendly=${isStrangerFriendly}`);
}
