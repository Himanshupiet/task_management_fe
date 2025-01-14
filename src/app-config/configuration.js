
export const SETTING = {    
    APP_CONSTANT : {
        API_URL:process.env.REACT_APP_API_BASE_URL,
    },
    HEADER_PARAMETERS: {
        'Accept': '*/*',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': '*'
    },
}