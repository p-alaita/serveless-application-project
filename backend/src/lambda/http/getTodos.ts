import 'source-map-support/register'

import {APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler} from 'aws-lambda';
import { createLogger } from '../../utils/logger';
import {getAllToDo} from "../../businessLogic/todos";

const logger = createLogger('getTodos')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // TODO: Get all TODO items for a current user
    logger.info("Processing Event ", event);
    const authorization = event.headers.Authorization;
    const split = authorization.split(' ');
    const jwtToken = split[1];

    const toDos = await getAllToDo(jwtToken);

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            "items": toDos,
        }),
    }
};

