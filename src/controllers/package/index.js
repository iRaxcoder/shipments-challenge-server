import {
  insertPackage,
  getPackagesFromDB,
  getPendingPackagesFromDB,
  markAsDeliveredFromDB,
  deletePackageFromDB,
} from "../../db/package.js";

export const getPackages = async (req, res, next) => {
  try {
    res.status(200).json(await getPackagesFromDB());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getPendingPackages = async (req, res, next) => {
  try {
    const pendingPackages = await getPendingPackagesFromDB();
    const orderedByDistance = pendingPackages.sort((a, b) => {
      if (a["DISTANCE"] < b["DISTANCE"]) {
        return -1;
      } else if (a["DISTANCE"] === b["DISTANCE"]) {
        return 0;
      } else if (a["DISTANCE"] > b["DISTANCE"]) {
        return 1;
      }
      return 1;
    });
    res.status(200).json(orderedByDistance);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createPackage = async (req, res, next) => {
  const data = req.body.data;
  try {
    res.status(200).json(await insertPackage(Object.values(data)));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const markAsDelivered = async (req, res, next) => {
  const data = req.body.data;
  try {
    res.status(200).json(await markAsDeliveredFromDB(Object.values(data)));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deletePackage = async (req, res, next) => {
  const data = req.body.data;
  try {
    res.status(200).json(await deletePackageFromDB(Object.values(data)));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
