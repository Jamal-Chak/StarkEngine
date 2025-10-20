// src/plugins/djangoCRM/index.jsx
import React from "react";

export default function DjangoCRM() {
  // Tip: if your Django app has a login page, you can point directly to it or to / (home).
  const DJANGO_CRM_URL = "http://127.0.0.1:8001/";

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Django-CRM</h2>
        <p style={{ margin: "6px 0 0 0", fontSize: 12, opacity: 0.7 }}>
          Embedded view (dev). Your Django app stays unchanged.
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <iframe
          title="Django-CRM"
          src={DJANGO_CRM_URL}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
}
