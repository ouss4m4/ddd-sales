import { GetClientDetails } from "./getClientDetails.usecase";
import { GetClientDetailsController } from "./getClientDetails.controller";
import { clientRepo } from "../../repo";

const getClientDetails = new GetClientDetails(clientRepo);
export const getClientDetailsController = new GetClientDetailsController(getClientDetails);
