// Protects "write" routes (add/edit/delete) so random visitors can't
// modify your portfolio. You send a secret key from the frontend admin
// panel, and it must match ADMIN_KEY in your .env file.
function requireAdmin(req, res, next) {
  const key = req.headers["x-admin-key"];
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

module.exports = requireAdmin;
