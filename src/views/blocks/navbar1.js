const hbs = `
<nav class="navbar navbar-expand-lg {{#if useDarkTheme}}navbar-dark bg-dark{{else}}navbar-light bg-light{{/if}}">
  <a class="navbar-brand" href="#">{{brand}}</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">{{link1}} <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{{link2}}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{{link3}}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{{link4}}</a>
      </li>
    </ul>
    {{#if showSearch}}
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    {{/if}}
  </div>
</nav>
`;

const block = {
  hbs,
  name: 'Navbar #1',
  previewImageUrl: 'https://i.imgur.com/awrvf3d.png',
  category: 'header',
  defaultData: {
    brand: "Reynholm",
    link1: "Home",
    link2: "Features",
    link3: "Pricing",
    link4: "About",
    showSearch: true,
    useDarkTheme: false,
  },
  config: {
    brand: {
      type: "string",
      name: 'Brand name',
    },
    link1: {
      type: "string",
      name: 'Link #1',
    },
    link2: {
      type: "string",
      name: 'Link #2',
    },
    link3: {
      type: "string",
      name: 'Link #3',
    },
    link4: {
      type: "string",
      name: 'Link #4',
    },
    showSearch: {
      type: "boolean",
      name: 'Show search',
    },
    useDarkTheme: {
      type: "boolean",
      name: 'Use dark theme',
    },
  }
};

export default block;
