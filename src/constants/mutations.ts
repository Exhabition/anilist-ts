export const allowedMutations = ['favourite'] as const;
export type AllowedMutation = (typeof allowedMutations)[number];

export const MUTATIONS = {
  favourite: `mutation ($TYPEId: Int) {        
                    ToggleFavourite (TYPEId: $TYPEId) {
                      characters {
                        nodes { isFavourite isFavouriteBlocked }
                      }             
                    }
                }`,
};
