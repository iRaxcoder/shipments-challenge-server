import express from "express";
import { getLocations } from "../controllers/location/index.js";
import {
  getPackages,
  getPendingPackages,
  createPackage,
  markAsDelivered,
  deletePackage,
} from "../controllers/package/index.js";

export const router = express.Router();

// ************PACKAGES ROUTES************

router.get("/packages/get", getPackages);
router.get("/packages/get-pending", getPendingPackages);
router.post("/packages/create", createPackage);
router.put("/packages/mark-as-delivered", markAsDelivered);
router.post("/packages/delete", deletePackage);

// ************LOCATION ROUTES************

router.get("/locations/get", getLocations);
