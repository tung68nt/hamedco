import ProductCreateForm from "./ProductCreateForm";

export default function AdminProductCreatePage() {
  return (
    <>
      {/* Page Header */}
      <div className="admin-topbar">
        <div className="admin-topbar-left">
          <h1>Tạo sản phẩm mới</h1>
          <p>Thêm sản phẩm mới vào danh mục</p>
        </div>
      </div>

      {/* Content */}
      <div className="admin-content">
        <ProductCreateForm />
      </div>
    </>
  );
}
