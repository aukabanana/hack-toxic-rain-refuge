import { Router } from "express";

import {
    createMapMarker,
    deleteMapMarker,
    getMapMarkers,
} from "../controllers/mapMarker.controller.js";

import {
    createMapZone,
    deleteMapZone,
    getMapZones,
} from "../controllers/mapZone.controller.js";

const mapRouter = Router();

mapRouter.get("/markers", getMapMarkers);
mapRouter.post("/markers", createMapMarker);
mapRouter.delete("/markers/:markerId", deleteMapMarker);

mapRouter.get("/zones", getMapZones);
mapRouter.post("/zones", createMapZone);
mapRouter.delete("/zones/:zoneId", deleteMapZone);

export default mapRouter;