import { getLocationsFromDB } from "../../db/location.js";

export const getLocations = async (req, res, next) => {
  try {
    res.status(200).json(await getLocationsFromDB());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
