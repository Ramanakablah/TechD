import "./blogspage.scss";

export default function Blogspage() {
  return (
    <div className="b-container">

      <div className="b-searchbar">
        <input type="text" placeholder=" Search..." />
        <button>Search</button>
      </div>

      <div className="b-navbar">
        <button>Featured</button>
        <button>Featured</button>
        <button>Featured</button>
        <button className="b-activebtn">Featured</button>
        <button>Featured</button>
        <button>Featured</button>
      </div>

      <div className="b-part1">
        <h2 className="b-blockheading">Featured</h2>
        <div className="b-cardcontainer">
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
        </div>
      </div>

      <div className="b-part2">
        <h2 className="b-blockheading">Featured</h2>
        <div className="b-cardcontainer">
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
        </div>
      </div>

      <div className="b-part3">
        <h2 className="b-blockheading">Featured</h2>
        <div className="b-cardcontainer">
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
          <div className="b-card">
            <div className="b-top"></div>
            <div className="b-bottomtext">Blog Name</div>
          </div>
        </div>
      </div>

    </div>
  );
}
