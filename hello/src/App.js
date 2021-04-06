import "./App.css";
function App() {
  return (
    <header id="doc-header">
      <div className="doc-wrap">
        <h1 id="global-logo"><img src="//image.gsshop.com/ui/gsshop/pc/common/images/logo.png" alt="GS SHOP" /></h1>
        <div id="global-search">
          <fieldset>
            <legend>전체검색</legend>
            <div id="globalSearchForm" className="search-form">
              <label className="blind" htmlFor="gnb_tq">검색어 입력</label>
              <span className="search-input">
                <input type="text" name="gnb_tq" id="gnb_tq" autoComplete="off" maxLength="100" title="검색어 입력" />
              </span>
              <button type="submit" id="searchSubmit" className="search-submit"><span className="sprite-search-lime">검색</span></button>
              <div id="search-result"></div>
            </div>
          </fieldset>
        </div>{/* #global-search */}
        <aside id="user-side">
          <strong className="blind">마이쇼핑 메뉴</strong>
          <ul>
            <li className="item myshopping">
              <a href="#!" onClick={() => this.handleChange }><i className="g-sprite myshop"></i><span>마이쇼핑</span></a>
              <div className="myshopping-layer">
                <ul>
                  <li><a href="#!" onClick={() => this.handleChange }><span>주문/배송조회</span></a></li>
                  <li><a href="#!" onClick={() => this.handleChange }><span>적립금/포인트</span></a></li>
                  <li><a href="#!" onClick={() => this.handleChange }><span>GS SHOP 할인권</span></a></li>
                  <li><a href="#!" onClick={() => this.handleChange }><span>리얼멤버십</span></a></li>
                </ul>
              </div>
            </li>
            <li className="item"><a href="#!" onClick={() => this.handleChange }><i className="g-sprite cart"></i><span>장바구니</span><em className="cnt">1</em></a></li>
          </ul>
        </aside>{/* #user-side */}
	  	</div>{/* .doc-wrap */}
      <div className="doc-block">
        <section className="doc-wrap extended">
          <div id="global-category" data-type="global-category-menu">
            <h2><i className="sprite-category"></i>카테고리</h2>
            <nav className="category-wrap" data-type="global-category-wrapper">
              <ul className="category-group">          
                <li className="items " data-type="one-depth">TEST1</li>
              </ul>
            </nav>
          </div>
        </section>
      </div>{/* .doc-block */}
    </header>
  );
}

export default App;
