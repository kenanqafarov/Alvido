import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import "../style/AdminPageStyle/AdminDashboard.css"

const initialBlogs = [
  { id: 1, name: 'First Blog', image: 'https://via.placeholder.com/100', description: 'This is the first blog.' },
  { id: 2, name: 'Second Blog', image: 'https://via.placeholder.com/100', description: 'This is the second blog.' },
];

const initialProducts = [
  { id: 1, name: 'Product One', image: 'https://via.placeholder.com/100', description: 'Description of Product One', price: '$10', category: 'Texnologiya' },
  { id: 2, name: 'Product Two', image: 'https://via.placeholder.com/100', description: 'Description of Product Two', price: '$20', category: 'Oyun' },
];

export default function AdminDashboard() {
  const [view, setView] = useState('blogs');
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState({ open: false, type: '', id: null });
  const [editMode, setEditMode] = useState(false);

  const [blogs, setBlogs] = useState(initialBlogs);
  const [products, setProducts] = useState(initialProducts);

  const [newBlog, setNewBlog] = useState({ image: '', name: '', description: '', id: null });
  const [newProduct, setNewProduct] = useState({ image: '', name: '', description: '', category: '', price: '', id: null });

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === 'blog') setNewBlog({ ...newBlog, image: reader.result });
      if (type === 'product') setNewProduct({ ...newProduct, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleEdit = (type, id) => {
    setEditMode(true);
    setModalOpen(true);
    if (type === 'blog') {
      const blog = blogs.find(b => b.id === id);
      setNewBlog(blog);
    } else {
      const product = products.find(p => p.id === id);
      setNewProduct(product);
    }
  };

  const handleDelete = (type, id) => {
    setConfirmDelete({ open: true, type, id });
  };

  const confirmDeleteItem = () => {
    if (confirmDelete.type === 'blog') {
      setBlogs(blogs.filter(b => b.id !== confirmDelete.id));
    } else {
      setProducts(products.filter(p => p.id !== confirmDelete.id));
    }
    setConfirmDelete({ open: false, type: '', id: null });
  };

  const handleSubmit = () => {
    if (view === 'blogs') {
      if (editMode) {
        setBlogs(blogs.map(b => b.id === newBlog.id ? newBlog : b));
      } else {
        setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
      }
    } else {
      if (editMode) {
        setProducts(products.map(p => p.id === newProduct.id ? newProduct : p));
      } else {
        setProducts([...products, { ...newProduct, id: Date.now() }]);
      }
    }
    setModalOpen(false);
    setEditMode(false);
    setNewBlog({ image: '', name: '', description: '', id: null });
    setNewProduct({ image: '', name: '', description: '', category: '', price: '', id: null });
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Xoş gəlmisiniz cənab Adınız</h1>
      <div className="dashboard-buttons">
        <button onClick={() => setView('products')} className={`toggle-button ${view === 'products' ? 'active' : ''}`}>Products</button>
        <button onClick={() => setView('blogs')} className={`toggle-button ${view === 'blogs' ? 'active' : ''}`}>Blogs</button>
        <button onClick={() => { setModalOpen(true); setEditMode(false); }} className="add-button"><FaPlus /> Yeni {view === 'blogs' ? 'Blog' : 'Product'}</button>
      </div>

      <div className="dashboard-content">
        {view === 'blogs' && blogs.map((blog, index) => (
          <div key={blog.id} className="item-card">
            <div className="item-info">
              <span className="item-index">{index + 1}.</span>
              <img src={blog.image} alt={blog.name} className="item-image" />
              <div>
                <h2 className="item-title">{blog.name}</h2>
                <p className="item-description">{blog.description}</p>
              </div>
            </div>
            <div className="item-actions">
              <button className="icon-button" onClick={() => handleEdit('blog', blog.id)}><FaEdit /></button>
              <button className="icon-button" onClick={() => handleDelete('blog', blog.id)}><FaTrash /></button>
            </div>
          </div>
        ))}

        {view === 'products' && products.map((product, index) => (
          <div key={product.id} className="item-card">
            <div className="item-info">
              <span className="item-index">{index + 1}.</span>
              <img src={product.image} alt={product.name} className="item-image" />
              <div>
                <h2 className="item-title">{product.name}</h2>
                <p className="item-description">{product.description}</p>
                <p className="item-description">Kateqoriya: {product.category}</p>
                <p className="item-price">{product.price}</p>
              </div>
            </div>
            <div className="item-actions">
              <button className="icon-button" onClick={() => handleEdit('product', product.id)}><FaEdit /></button>
              <button className="icon-button" onClick={() => handleDelete('product', product.id)}><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => { setModalOpen(false); setEditMode(false); }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{editMode ? 'Redaktə et' : 'Yeni əlavə et'} {view === 'blogs' ? 'Blog' : 'Product'}</h2>
            <input type="file" onChange={(e) => handleImageUpload(e, view)} />
            <input type="text" placeholder="{view === 'blogs' ? 'Blog Adı' : 'Product Adı'}"
              value={view === 'blogs' ? newBlog.name : newProduct.name}
              onChange={(e) => view === 'blogs' ? setNewBlog({ ...newBlog, name: e.target.value }) : setNewProduct({ ...newProduct, name: e.target.value })} />
            {view === 'blogs' ? (
              <textarea placeholder="Blog Məzmunu"
                value={newBlog.description}
                onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })} />
            ) : (
              <>
                <textarea placeholder="Product Təsviri"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
                <select value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
                  <option value="">Kateqoriya Seçin</option>
                  <option value="Texnologiya">Texnologiya</option>
                  <option value="Oyun">Oyun</option>
                  <option value="Fiqur">Fiqur</option>
                  <option value="Digər">Digər</option>
                </select>
                <input type="text" placeholder="Qiymət"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
              </>
            )}
            <button className="submit-button" onClick={handleSubmit}>{editMode ? 'Yadda saxla' : 'Əlavə et'}</button>
          </div>
        </div>
      )}

      {confirmDelete.open && (
        <div className="modal-overlay" onClick={() => setConfirmDelete({ open: false, type: '', id: null })}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Silmək istədiyinizə əminsiniz?</h2>
            <div className="flex justify-between gap-4">
              <button className="submit-button" onClick={confirmDeleteItem}>Bəli, sil</button>
              <button className="submit-button" onClick={() => setConfirmDelete({ open: false, type: '', id: null })}>Xeyr</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
