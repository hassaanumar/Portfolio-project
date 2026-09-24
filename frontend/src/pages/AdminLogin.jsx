import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [adminKey, setAdminKey] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!adminKey.trim()) {
      setError("Please enter your admin key.");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/messages`, {
        headers: {
          "x-admin-key": adminKey,
        },
      });

      if (!res.ok) {
        setError("Invalid admin key.");
        return;
      }

      localStorage.setItem("adminKey", adminKey);

      navigate("/admin");
    } catch (error) {
      setError("Unable to connect to the server.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 px-6 pt-32 text-white">
      <div className="mx-auto max-w-md">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Private Area
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Admin Login
          </h1>

          <p className="mt-3 text-gray-500">
            This area is restricted to the portfolio owner.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
        >
          <label className="mb-2 block text-sm text-gray-400">
            Admin Key
          </label>

          <input
            type="password"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            placeholder="Enter your admin key"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
          />

          {error && (
            <p className="mt-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-bold text-gray-950 transition hover:from-cyan-300 hover:to-blue-400"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </main>
  );
}

export default AdminLogin;
