import {AuthorizationChecker} from "./AuthorizationChecker";
import {CurrentUserChecker} from "./CurrentUserChecker";

/**
 * Routing controller initialization options.
 */
export interface RoutingControllersOptions {

    /**
     * Indicates if cors are enabled.
     * This requires installation of additional module (cors for express and kcors for koa).
     */
    cors?: boolean|Object;

    /**
     * Global route prefix, for example '/api'.
     */
    routePrefix?: string;

    /**
     * List of controllers to register in the framework or directories from where to import all your controllers.
     */
    controllers?: Function[]|string[];

    /**
     * List of middlewares to register in the framework or directories from where to import all your middlewares.
     */
    middlewares?: Function[]|string[];

    /**
     * List of interceptors to register in the framework or directories from where to import all your interceptors.
     */
    interceptors?: Function[]|string[];

    /**
     * Indicates if development mode is enabled.
     * By default its enabled if your NODE_ENV is not equal to "production".
     */
    development?: boolean;

    /**
     * Indicates if default routing-controller's error handler is enabled or not.
     * Enabled by default.
     */
    defaultErrorHandler?: boolean;

    /**
     * Map of error overrides.
     */
    errorOverridingMap?: { [key: string]: any };

    /**
     * Special function used to check user authorization roles per request.
     * Must return true or promise with boolean true resolved for authorization to succeed.
     */
    authorizationChecker?: AuthorizationChecker;

    /**
     * Special function used to get currently authorized user.
     */
    currentUserChecker?: CurrentUserChecker;
    
    /**
     * Default settings
     */
    defaults?: {
        /**
         * If set, all null responses will return specified status code by default
         */
        nullResultCode?: number;

        /**
         * If set, all undefined responses will return specified status code by default
         */
        undefinedResultCode?: number;

        /**
         * Default param options
         */
        paramOptions?: {
            /**
             * If true, all non-set parameters will be required by default
             */
            required?: boolean;
        };
    };
}