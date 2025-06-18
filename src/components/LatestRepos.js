import React, { useEffect, useState } from "react";
// import { FaGithub } from "react-icons/fa";
import { logEvent } from "../analytics";

const username = "sergethi";

function LatestRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`
        );
        const data = await res.json();

        // Fetch languages for each repo
        const reposWithLangs = await Promise.all(
          data.map(async (repo) => {
            const langRes = await fetch(repo.languages_url);
            const langData = await langRes.json();

            // Calculate percentages
            const total = Object.values(langData).reduce(
              (sum, val) => sum + val,
              0
            );
            const langPercentages = Object.entries(langData).map(
              ([lang, bytes]) => ({
                lang,
                percent: ((bytes / total) * 100).toFixed(1), // 1 decimal place
              })
            );

            return {
              ...repo,
              languages: langPercentages,
            };
          })
        );

        setRepos(reposWithLangs);
      } catch (err) {
        console.error("Error fetching repos or languages", err);
        setError("Failed to load GitHub repositories. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const handleRepoClick = (name) => {
    logEvent("LatestRepos", "Click", name);
  };

  return (
    <>
      {/* <div className="projects_container"> */}
      {loading && (
        <p className="fallback-message">⏳ Loading latest repositories...</p>
      )}
      {error && <p className="fallback-message error">{error}</p>}
      {!loading && !error && repos.length === 0 && (
        <p className="fallback-message">No repositories found.</p>
      )}
      {repos.map((repo) => (
        <div key={repo.id} className="project project-repo">
          <div className="image repo-card">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleRepoClick(repo.name)}
              className="proj-img-flex"
            >
              <div className="repo-img-container">
                {/* <img src={repo.owner.avatar_url} alt={repo.name} /> */}
              </div>
              <span className="repo-name">{repo.name}</span>
            </a>
          </div>

          {/* <div className="title">
              {repo.language || "GitHub"}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div> */}

          {repo.languages?.length > 0 && (
            <div className="language-usage">
              {repo.languages.map((lang) => (
                <span key={lang.lang} className="lang-badge">
                  {lang.lang}: {lang.percent}%
                </span>
              ))}
            </div>
          )}
          {repo.description && <p className="repo-desc">{repo.description}</p>}
        </div>
      ))}
      {/* </div> */}
    </>
  );
}

export default LatestRepos;
