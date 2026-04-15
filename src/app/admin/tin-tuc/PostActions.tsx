"use client";

import { useState } from "react";
import { deletePost } from "../actions";

export default function PostActions({ slug, postTitle }: { slug: string; postTitle: string }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    const result = await deletePost(slug);
    if (result.success) {
      window.location.reload();
    } else {
      alert("Lỗi xóa bài viết: " + result.error);
      setDeleting(false);
      setShowConfirm(false);
    }
  };

  if (showConfirm) {
    return (
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span style={{ fontSize: "0.75rem", color: "var(--color-error)" }}>Xóa?</span>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="btn btn-sm"
          style={{ background: "var(--color-error)", color: "white", padding: "4px 12px", fontSize: "0.75rem" }}
        >
          {deleting ? "..." : "Xóa"}
        </button>
        <button
          onClick={() => setShowConfirm(false)}
          className="btn btn-sm btn-outline"
          style={{ padding: "4px 12px", fontSize: "0.75rem" }}
        >
          Hủy
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="admin-btn-edit"
      style={{ color: "var(--color-error)", borderColor: "var(--color-error)" }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
      </svg>
      Xóa
    </button>
  );
}
