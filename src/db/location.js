import { pool } from "./index.js";

export const getLocationsFromDB = async () => {
  const query = "CALL sp_get_locations";

  const [rows] = await pool.query(query);

  return rows[0];
};
