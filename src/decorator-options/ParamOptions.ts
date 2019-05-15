/**
 * Extra options set to the parameter decorators.
 */
export interface ParamOptions {

    /**
     * If set to true then parameter will be required.
     * If user performs a request and required parameter is not in a request then routing-controllers will throw an error.
     */
    required?: boolean;

    /**
     * If set to true then parameter will be parsed to json.
     * Parsing is automatically done if parameter type is a class type.
     */
    parse?: boolean;

    /**
     * Explicitly set type which should be used for param to perform transformation.
     */
    type?: any;
    
}