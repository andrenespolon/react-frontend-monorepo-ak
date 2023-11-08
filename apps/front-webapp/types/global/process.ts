/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/**
 * Environment defined
 */
namespace NodeJS {
	/**
	 * All variables shared in packages.
	 */
	interface ProcessEnv {
		/**
		 * Node environment
		 *
		 * `test` mode is used by __Jest__ and it be functional.
		 */
		readonly NODE_ENV: 'test' | 'development' | 'production';
		/**
		 * Finnet API key for public checkout page (cockpit api key)
		 */
		readonly NEXT_PUBLIC_API_KEY: string;
		/**
		 * Intitutional Lunapay website
		 */
		readonly NEXT_PUBLIC_INSTITUTIONAL_WEBSITE_URL: string;
		/**
		 * Lunapay web app url
		 */
		readonly NEXT_PUBLIC_LUNAPAY_WEBSITE_URL: string;
		/**
		 * Lunapix web app url
		 */
		readonly NEXT_PUBLIC_LUNAPIX_WEBSITE_URL: string;
		/**
		 * LunaBoleto web app url
		 */
		readonly NEXT_PUBLIC_LUNABOLETO_WEBSITE_URL: string;
		/**
		 * Finnet API Cockpit base url path
		 */
		readonly NEXT_PUBLIC_API_COCKPIT_BASE_URL: string;
		/**
		 * Finnet API Cadastro base url path
		 */
		readonly NEXT_PUBLIC_API_CADASTRO_BASE_URL: string;
		/**
		 * Finnet API HubPay base url path
		 */
		readonly NEXT_PUBLIC_API_HUBPAY_BASE_URL: string;
		/**
		 * Cognito region
		 */
		readonly NEXT_PUBLIC_COGNITO_REGION: string;
		/**
		 * Cognito user pools
		 */
		readonly NEXT_PUBLIC_COGNITO_USER_POOL_ID: string;
		/**
		 * Cognito client id
		 */
		readonly NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID: string;
		/**
		 * Define current product
		 */
		readonly NEXT_PUBLIC_CURRENT_PRODUCT: string;
	}
}
