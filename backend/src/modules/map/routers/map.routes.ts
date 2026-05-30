import { Router } from "express";

import {
    createMapMarker,
    deleteMapMarker,
    getMapMarkers,
} from "../controllers/mapMarker.controller.js";

const mapRouter = Router();

mapRouter.get("/markers", getMapMarkers);
mapRouter.post("/markers", createMapMarker);
mapRouter.delete("/markers/:markerId", deleteMapMarker);

export default mapRouter;