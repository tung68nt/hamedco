import PostCreateForm from "./PostCreateForm";

export default function AdminPostCreatePage() {
  return (
    <>
      {/* Page Header */}
      <div className="admin-topbar">
        <div className="admin-topbar-left">
          <h1>Viết bài mới</h1>
          <p>Tạo bài viết tin tức mới</p>
        </div>
      </div>

      {/* Content */}
      <div className="admin-content">
        <PostCreateForm />
      </div>
    </>
  );
}
