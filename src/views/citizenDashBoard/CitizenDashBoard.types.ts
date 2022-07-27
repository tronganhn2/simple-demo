export type CitizenShortInfo = {
    /**
     * The id of the citizen profile
     */
    profileId: string;
    /**
     * The name of the citizen
     */
    name: string;
}

export type CitizenDetail = {
    /**
     * The id of the citizen profile
     */
    profileId: string;
    /**
     * The name of the citizen
     */
    name: string;
    /**
     * Flag to indicate if the citizen is still working
     */
    currentlyWorking: boolean;
    /**
     * Current living country of the citizen
     */
    country: string;
     /**
     * Citizen's type of job
     */
    jobType: string;
    /**
     * Current living city of the citizen
     */
    city: string;
    /**
     * Current age
     */
    age: number;
    /**
     * Dummy property just for demo purposes, use when we want make some changes to the citizen detail
     */
    dummyProperty?: any
}