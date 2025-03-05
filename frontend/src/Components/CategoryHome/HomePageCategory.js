import React from "react";
import "../../Assets/styles/homePageCategory.css";

const HomePageCategory = () => {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-list">
        <div className="category-item">📓 Notebooks & Diaries</div>
        <div className="category-item">🎨 Art & Craft Supplies</div>
        <div className="category-item">🏫 School Stationery</div>
        <div className="category-item">🖊️ Writing Essentials</div>
        <div className="category-item">📎 Office Supplies</div>
        <div className="category-item">📏 Geometry & Measuring Tools</div>
        <div className="category-item">📁 Files & Organizers</div>
        <div className="category-item">✂️ Cutting & Adhesives</div>
        <div className="category-item">🖍️ Coloring & Markers</div>
        <div className="category-item">📜 Papers & Printing</div>
      </div>
    </section>
  );
};

export default HomePageCategory;
