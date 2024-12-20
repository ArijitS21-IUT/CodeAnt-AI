import React from "react";

const repositories = [
  { name: "design-system", language: "React", size: "7320 KB", updated: "1 day ago", public: true },
  { name: "codeant-ci-app", language: "JavaScript", size: "5871 KB", updated: "2 days ago", public: false },
  { name: "analytics-dashboard", language: "Python", size: "4521 KB", updated: "5 days ago", public: false },
  { name: "mobile-app", language: "Swift", size: "3096 KB", updated: "3 days ago", public: true },
  { name: "e-commerce-platform", language: "Java", size: "6210 KB", updated: "6 days ago", public: false },
  { name: "blog-website", language: "HTML/CSS", size: "1876 KB", updated: "4 days ago", public: true },
  { name: "social-network", language: "PHP", size: "5432 KB", updated: "7 days ago", public: false },
];

function RepositoryList() {
  return (
    <div className="repo-list">
      {repositories.map((repo, index) => (
        <div className="repo" key={index}>
          <h3>
            {repo.name} <span>{repo.public ? "Public" : "Private"}</span>
          </h3>
          <p>
            {repo.language} | {repo.size} | Updated {repo.updated}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RepositoryList;
