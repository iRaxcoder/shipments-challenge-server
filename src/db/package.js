import { pool } from "./index.js";

export const getPackagesFromDB = async () => {
  const query = "CALL sp_get_packages";

  const [rows] = await pool.query(query);

  return rows[0];
};

export const getPendingPackagesFromDB = async () => {
  const query = "CALL sp_pending_packages";

  const [rows] = await pool.query(query);

  return rows[0];
};

export const insertPackage = async (package_) => {
  const query = "CALL sp_insert_package(?,?)";
  const [rows] = await pool.query(query, package_);

  return rows[0][0];
};

export const markAsDeliveredFromDB = async (package_) => {
  const query = "CALL sp_mark_delivered_package(?)";

  const [rows] = await pool.query(query, package_);

  return rows[0][0];
};

export const deletePackageFromDB = async (id) => {
  const query = "CALL sp_delete_package(?)";

  const [rows] = await pool.query(query, id);

  return rows[0][0];
};
