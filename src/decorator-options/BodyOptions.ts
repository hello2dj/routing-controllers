/**
 * Body decorator parameters.
 */
export interface BodyOptions {

    /**
     * If set to true then request body will become required.
     * If user performs a request and body is not in a request then routing-controllers will throw an error.
     */
    required?: boolean;

    /**
     * Extra options to be passed to body-parser middleware.
     */
    options?: any;

    /**
     * Explicitly set type which should be used for Body to perform transformation.
     */
    type?: any;
    
}