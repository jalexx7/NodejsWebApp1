var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var React = require('react');
var ReactDOM = require('react-dom');
var _a = require('react-bootstrap'), Bootstrap = _a.Bootstrap, Grid = _a.Grid, Row = _a.Row, Col = _a.Col, Navbar = _a.Navbar, Nav = _a.Nav, NavItem = _a.NavItem, NavDropdown = _a.NavDropdown, MenuItem = _a.MenuItem;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Grid, { fluid: true },
            React.createElement(Row, { className: "show-grid" },
                React.createElement(NavigationBar, null)),
            React.createElement(Row, { className: "show-grid" },
                React.createElement(Col, { xs: 6, md: 12 },
                    React.createElement(Header, null))),
            React.createElement(Row, { className: "show-grid" },
                React.createElement(Col, { xs: 12, md: 8 },
                    React.createElement(Content, null)),
                React.createElement(Col, { xs: 4, md: 4 },
                    React.createElement(Content2, null))),
            React.createElement(Row, { className: "show-grid" },
                React.createElement(Col, { xs: 8, md: 6 },
                    React.createElement(Content3, null))),
            React.createElement(Background, null)));
    };
    return App;
}(React.Component));
var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background() {
        var _this = 
        // @ts-ignore
        _super.call(this) || this;
        _this.state = {
            pictures: []
        };
        return _this;
    }
    Background.prototype.componentDidMount = function () {
        var _this = this;
        fetch('https://randomuser.me/api/?results=500')
            .then(function (results) {
            return results.json();
        }).then(function (data) {
            var pictures = data.results.map(function (pic) {
                return (React.createElement("div", { key: pic.results },
                    React.createElement("img", { src: pic.picture.medium })));
            });
            _this.setState({ pictures: pictures });
            console.log("state", _this.state.pictures);
        });
    };
    Background.prototype.render = function () {
        return (React.createElement("div", { className: "container2" },
            React.createElement("div", { className: "container1" }, this.state.pictures)));
    };
    return Background;
}(React.Component));
var NavigationBar = /** @class */ (function (_super) {
    __extends(NavigationBar, _super);
    function NavigationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBar.prototype.render = function () {
        return (React.createElement(Navbar, { inverse: true, collapseOnSelect: true },
            React.createElement(Navbar.Header, null,
                React.createElement(Navbar.Brand, null,
                    React.createElement("a", { href: "#brand" }, "React-Bootstrap")),
                React.createElement(Navbar.Toggle, null)),
            React.createElement(Navbar.Collapse, null,
                React.createElement(Nav, null,
                    React.createElement(NavItem, { eventKey: 1, href: "#" }, "Link"),
                    React.createElement(NavItem, { eventKey: 2, href: "#" }, "Link"),
                    React.createElement(NavDropdown, { eventKey: 3, title: "Dropdown", id: "basic-nav-dropdown" },
                        React.createElement(MenuItem, { eventKey: 3.1 }, "Action"),
                        React.createElement(MenuItem, { eventKey: 3.2 }, "Another action"),
                        React.createElement(MenuItem, { eventKey: 3.3 }, "Something else here"),
                        React.createElement(MenuItem, { divider: true }),
                        React.createElement(MenuItem, { eventKey: 3.3 }, "Separated link"))),
                React.createElement(Nav, { pullRight: true },
                    React.createElement(NavItem, { eventKey: 1, href: "#" }, "Link Right"),
                    React.createElement(NavItem, { eventKey: 2, href: "#" }, "Link Right")))));
    };
    return NavigationBar;
}(React.Component));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Header - Make this much longer so that it goes across the screen and maybe we can use react bootstrap to modify.")));
    };
    return Header;
}(React.Component));
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "This is the text for the CONTENT component!!! VERY COOL. ALSO MAKE THIS A MUCH LONGER MESSAGE THAT GOES ACROSS THE SCREEN SO THAT WE CAN TEST IT OUT USING REACT BOOTSTRAP IF I CAN FIGURE OUT HOW TO MAKE IT WORK!")));
    };
    return Content;
}(React.Component));
var Content2 = /** @class */ (function (_super) {
    __extends(Content2, _super);
    function Content2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content2.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "222 This is the text for the CONTENT component!!! VERY COOL. ALSO MAKE THIS A MUCH LONGER MESSAGE THAT GOES ACROSS THE SCREEN SO THAT WE CAN TEST IT OUT USING REACT BOOTSTRAP IF I CAN FIGURE OUT HOW TO MAKE IT WORK!")));
    };
    return Content2;
}(React.Component));
var Content3 = /** @class */ (function (_super) {
    __extends(Content3, _super);
    function Content3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content3.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "333 This is the text for the CONTENT component!!! VERY COOL. ALSO MAKE THIS A MUCH LONGER MESSAGE THAT GOES ACROSS THE SCREEN SO THAT WE CAN TEST IT OUT USING REACT BOOTSTRAP IF I CAN FIGURE OUT HOW TO MAKE IT WORK!")));
    };
    return Content3;
}(React.Component));
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return (React.createElement("h1", null, "Welcome to React!!"));
    };
    return Hello;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map