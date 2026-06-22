function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <div>
              <a href="">Inventory</a>
              <ul>
                <li>Products</li>
                <li>Categories</li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Audit Logs</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;
