const API_BASE_URL = "https://portfolio-project-csm7.onrender.com";
const API_URL = `${API_BASE_URL}/api/projects`;

export async function getProjects() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export async function addProject(project, adminKey) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-key": adminKey,
    },
    body: JSON.stringify(project),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Failed to add project");
  }

  return res.json();
}

export async function updateProject(id, project, adminKey) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-admin-key": adminKey,
    },
    body: JSON.stringify(project),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Failed to update project");
  }

  return res.json();
}

export async function deleteProject(id, adminKey) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "x-admin-key": adminKey,
    },
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Failed to delete project");
  }

  return res.json();
}

export async function sendMessage(message) {
const res = await fetch(`${API_BASE_URL}/api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to send message");
  }

  return data;
}

// GET MESSAGES — ADMIN ONLY
export async function getMessages(adminKey) {
const res = await fetch(`${API_BASE_URL}/api/messages`, {
    headers: {
      "x-admin-key": adminKey,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to load messages");
  }

  return data;
}
export async function updateMessage(id, read, adminKey) {
const res = await fetch(`${API_BASE_URL}/api/messages/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-admin-key": adminKey,
    },
    body: JSON.stringify({ read }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to update message");
  }

  return data;
}

export async function deleteMessage(id, adminKey) {
const res = await fetch(`${API_BASE_URL}/api/messages/${id}`, {
    method: "DELETE",
    headers: {
      "x-admin-key": adminKey,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to delete message");
  }

  return data;
}


