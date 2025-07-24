const headerNavData = [
  { name: 'Home', url: 'index.html#hero' },
  { name: 'About', url: 'index.html#about' },
  { name: 'Expertise and Skills', url: 'index.html#skills' },
  {
    name: 'Research Projects',
    url: 'index.html#projects',
    dropdown: [
      { name: 'Micromagnet Shape Optimization for Spin Qubits', url: 'msoga-details.html' },
      { name: 'Device Fabrication', url: 'devfab-details.html' },
      { name: 'Coherent Control of Semiconductor Spin Qubits', url: 'qdspinqmeas-details.html' },
      { name: 'Nonreciprocal Transport in vdW Heterostructures', url: 'vdw-details.html' },
      { name: 'Cryogenic & RF System Integration', url: 'setup-details.html' },
      { name: 'Computational Modeling of Quantum Systems', url: 'simul-details.html' }
    ]
  },
  {
    name: 'Personal Study',
    url: 'index.html#course', // Note: This link might not work as intended, consider a dedicated page.
    dropdown: [
      { name: 'Mathematics', url: 'math/math.html' },
      { name: 'Physics', url: 'physics/physics.html' },
      { name: 'Engineering', url: 'engineering/engineering.html' },
      { name: 'Lab Note', url: 'labnote/labnote.html' }
    ]
  },
  { name: 'Contact', url: 'index.html#contact' }
];

// 2. 헤더 HTML을 생성하고 페이지에 삽입하는 함수
function generateHeader(pathPrefix = '') {
  const headerElement = document.getElementById('header');
  if (!headerElement) return;

  let navLinksHTML = '';
  headerNavData.forEach(link => {
    if (link.dropdown) {
      navLinksHTML += `<li class="dropdown"><a href="${pathPrefix}${link.url}"><span>${link.name}</span> <i class="bi bi-chevron-down"></i></a><ul>`;
      link.dropdown.forEach(item => {
        navLinksHTML += `<li><a href="${pathPrefix}${item.url}">${item.name}</a></li>`;
      });
      navLinksHTML += `</ul></li>`;
    } else {
      navLinksHTML += `<li><a class="nav-link scrollto" href="${pathPrefix}${link.url}">${link.name}</a></li>`;
    }
  });

  const fullHeaderHTML = `
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="${pathPrefix}index.html">Jonginn Yun</a></h1>
      <nav id="navbar" class="navbar">
        <ul>
          ${navLinksHTML}
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  `;

  headerElement.innerHTML = fullHeaderHTML;
}