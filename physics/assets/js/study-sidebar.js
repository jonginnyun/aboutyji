// assets/js/study-sidebar.js

const sidebarData = {
  physics: {
    title: "Physics",
    overviewUrl: "physics.html", // 메인 페이지 URL 추가
    categories: [
      {
        name: "Quantum Mechanics",
        subtopics: [
          // 경로는 이제 math 폴더를 기준으로 작성합니다.
          { name: "Basic Concepts", url: "qm/basic.html" }
        ]
      }
    ]
  }
};

// 수정된 함수: basePath 인자를 추가로 받습니다.
function generateSidebar(pageType, activeSubtopic, basePath = '') {
  const sidebarContainer = document.getElementById('study-sidebar-container');
  if (!sidebarContainer) return;

  const data = sidebarData[pageType];
  if (!data) return;
  
  // Overview 링크 추가 (팁 적용)
  const overviewIsActive = (activeSubtopic === 'Overview') ? 'active' : '';
  let html = `
    <h5>${data.title}</h5>
    <a class="nav-link ${overviewIsActive}" href="${basePath}${data.overviewUrl}">Overview</a>
  `;
  
  data.categories.forEach(category => {
    const isExpanded = category.subtopics.some(sub => sub.name === activeSubtopic);

    html += `
      <a class="nav-link" data-bs-toggle="collapse" href="#${category.id}" role="button" aria-expanded="${isExpanded ? 'true' : 'false'}" aria-controls="${category.id}">
        ${category.name}
      </a>
      <div class="collapse ${isExpanded ? 'show' : ''} sub-nav" id="${category.id}">
    `;
    category.subtopics.forEach(sub => {
      const isActive = (sub.name === activeSubtopic) ? 'active' : '';
      // basePath를 각 URL 앞에 붙여줍니다.
      html += `<a class="nav-link ${isActive}" href="${basePath}${sub.url}">${sub.name}</a>`;
    });
    html += `</div>`;
  });

  sidebarContainer.innerHTML = html;
}